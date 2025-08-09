import { NextResponse } from "next/server"

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Log the webhook payload for debugging
    console.log("Koala webhook received:", JSON.stringify(body, null, 2))

    if (!SLACK_WEBHOOK_URL) {
      console.error("SLACK_WEBHOOK_URL not configured")
      return NextResponse.json({ error: "Slack webhook not configured" }, { status: 500 })
    }

    // Handle visitor events
    if (body.type === "visitor" || body.event === "page_view" || body.event === "session_start") {
      const visitorInfo = body.visitor || body.user || {}
      const sessionInfo = body.session || {}

      const message = {
        text: `🌐 New visitor on Dynamic.vc`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: [
                `*🌐 New Visitor on Dynamic.vc*`,
                `*Page:* ${body.page_url || body.url || "Unknown"}`,
                `*Location:* ${visitorInfo.city || "Unknown"}, ${visitorInfo.country || "Unknown"}`,
                `*Device:* ${visitorInfo.device || "Unknown"}`,
                `*Referrer:* ${body.referrer || "Direct"}`,
                `*Time:* ${new Date().toLocaleString()}`,
              ].join("\n"),
            },
          },
        ],
      }

      const response = await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      })

      if (!response.ok) {
        console.error("Slack webhook failed:", response.status, await response.text())
        return NextResponse.json({ error: "Slack notification failed" }, { status: 500 })
      }

      console.log("Slack notification sent successfully")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Koala webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
