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

async function getIpInfo(ip: string) {
  const token = process.env.IPINFO_TOKEN
  if (!token || !ip) {
    console.log("[v0] IPInfo lookup skipped - missing token or IP")
    return null
  }

  try {
    console.log("[v0] Fetching IP info for:", ip)
    const response = await fetch(`https://api.ipinfo.io/lite/${ip}?token=${token}`)

    if (!response.ok) {
      console.error("[v0] IPInfo API error:", response.status)
      return null
    }

    const data = await response.json()
    console.log("[v0] IPInfo data received:", data)
    return data
  } catch (error) {
    console.error("[v0] Error fetching IP info:", error)
    return null
  }
}

export async function POST(request: NextRequest) {
  console.log("[v0] Track API called")

  try {
    const body = await request.json()
    console.log("[v0] Received tracking data:", JSON.stringify(body, null, 2))

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

    console.log("[v0] Parsed fields:", {
      page_path,
      visitor_id,
      has_page_path: !!page_path,
      has_visitor_id: !!visitor_id,
    })

    if (!page_path || !visitor_id) {
      console.log("[v0] Missing required fields:", {
        page_path: !!page_path,
        visitor_id: !!visitor_id,
      })
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const ip_address = getClientIp(request)
    console.log("[v0] Client IP:", ip_address)

    const ipInfo = ip_address ? await getIpInfo(ip_address) : null

    const supabase = await createClient()

    console.log("[v0] Checking if visitor is new:", { visitor_id, ip_address })

    const { count } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .or(`visitor_id.eq.${visitor_id},ip_address.eq.${ip_address}`)

    const isNewVisitor = count === 0
    console.log("[v0] Is new visitor:", isNewVisitor, "Previous count:", count)

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
        country: ipInfo?.country || null,
        country_code: ipInfo?.country_code || null,
        continent: ipInfo?.continent || null,
        asn: ipInfo?.asn || null,
        as_name: ipInfo?.as_name || null,
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
      const slackData = {
        page_path: page_path,
        referrer: referrer || undefined,
        utm_source: utm_source || undefined,
        utm_campaign: utm_campaign || undefined,
        visitor_id: visitor_id,
        ip_address: ip_address || undefined,
        is_new_visitor: isNewVisitor,
        country: ipInfo?.country,
        country_code: ipInfo?.country_code,
        city: ipInfo?.city,
        as_name: ipInfo?.as_name,
      }
      console.log("[v0] Slack notification data:", slackData)
      slackSent = await sendSlackNotification(slackData)
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
