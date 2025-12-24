import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendSlackNotification } from "@/lib/slack"

function getClientIp(request: NextRequest): string | null {
  // Check common headers for IP address (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get("x-forwarded-for")
  const realIp = request.headers.get("x-real-ip")
  const cfConnectingIp = request.headers.get("cf-connecting-ip")

  if (cfConnectingIp) return cfConnectingIp
  if (realIp) return realIp
  if (forwarded) return forwarded.split(",")[0].trim()

  return null
}

export async function POST(request: NextRequest) {
  console.log("[v0] Track API called")

  try {
    const body = await request.json()
    console.log("[v0] Received tracking data:", body)

    const {
      page_path,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      visitor_id,
      session_id,
      user_agent,
      screen_width,
      screen_height,
      language,
      timezone,
    } = body

    if (!page_path || !visitor_id) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const ip_address = getClientIp(request)
    console.log("[v0] Client IP:", ip_address)

    const supabase = await createClient()

    console.log("[v0] Checking if visitor is new:", { visitor_id, ip_address })

    const { count } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .or(`visitor_id.eq.${visitor_id},ip_address.eq.${ip_address}`)

    const isNewVisitor = count === 0
    console.log("[v0] Is new visitor:", isNewVisitor, "Previous count:", count)

    // Insert page view
    console.log("[v0] Inserting page view into database")
    const { data: pageView, error: insertError } = await supabase
      .from("page_views")
      .insert({
        page_path,
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        visitor_id,
        session_id,
        ip_address,
        user_agent,
        screen_width,
        screen_height,
        language,
        timezone,
        is_new_visitor: isNewVisitor,
      })
      .select()
      .single()

    if (insertError) {
      console.error("[v0] Error inserting page view:", insertError)
      return NextResponse.json({ error: "Failed to track page view" }, { status: 500 })
    }

    console.log("[v0] Page view inserted successfully:", pageView?.id)

    let slackSent = false
    if (isNewVisitor) {
      console.log("[v0] Attempting to send Slack notification for new visitor")
      slackSent = await sendSlackNotification({
        page_path,
        referrer: referrer || undefined,
        utm_source: utm_source || undefined,
        utm_campaign: utm_campaign || undefined,
        visitor_id,
        ip_address: ip_address || undefined,
        is_new_visitor: isNewVisitor,
      })
      console.log("[v0] Slack notification sent:", slackSent)
    } else {
      console.log("[v0] Skipping Slack notification for returning visitor")
    }

    if (pageView && isNewVisitor) {
      console.log("[v0] Logging alert to database")
      await supabase.from("alerts").insert({
        page_view_id: pageView.id,
        alert_type: "slack",
        sent_successfully: slackSent,
      })
    }

    return NextResponse.json({ success: true, is_new_visitor: isNewVisitor })
  } catch (error) {
    console.error("[v0] Tracking API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
