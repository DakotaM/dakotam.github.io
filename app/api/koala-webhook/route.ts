import { NextResponse } from "next/server"

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Handle different Koala events
    if (body.event === "visitor_identified" || body.event === "new_visitor") {
      const message = {
        text: `🎯 Koala Event: ${body.event}`,
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*New Koala Event:* ${body.event}\n*User:* ${body.user?.email || "Anonymous"}\n*Page:* ${body.page || "Unknown"}`,
            },
          },
        ],
      }

      if (SLACK_WEBHOOK_URL) {
        await fetch(SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        })
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Koala webhook error:", error)
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 })
  }
}
