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
  try {
    const body = await request.json()

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
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const ip_address = getClientIp(request)

    const supabase = await createClient()

    let isNewVisitor = false

    const { count } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .or(`visitor_id.eq.${visitor_id},ip_address.eq.${ip_address}`)

    isNewVisitor = count === 0

    // Insert page view
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

    let slackSent = false
    if (isNewVisitor) {
      slackSent = await sendSlackNotification({
        page_path,
        referrer: referrer || undefined,
        utm_source: utm_source || undefined,
        utm_campaign: utm_campaign || undefined,
        visitor_id,
        ip_address: ip_address || undefined,
        is_new_visitor: isNewVisitor,
      })
    }

    if (pageView && isNewVisitor) {
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
