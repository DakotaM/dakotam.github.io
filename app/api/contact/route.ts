import { NextResponse } from "next/server"

// Get the Slack webhook URL from environment variables
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { email, message } = body

    // Validate the required fields
    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 })
    }

    // Check if webhook URL is configured
    if (!SLACK_WEBHOOK_URL) {
      console.error("Slack webhook URL is not configured")
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    try {
      // Send the message to Slack
      const response = await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `New contact request from ${email}:\n\n${message}`,
        }),
      })

      // Check if the Slack API request was successful
      if (!response.ok) {
        console.error(`Slack API error: ${response.status}`)
        return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
      }

      // Return a success response
      return NextResponse.json({ success: true })
    } catch (slackError) {
      console.error("Error sending message to Slack:", slackError)
      // Return a more graceful error that doesn't expose internal details
      return NextResponse.json({ success: false, error: "Unable to send message at this time" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error processing contact request:", error)
    return NextResponse.json({ success: false, error: "Invalid request format" }, { status: 400 })
  }
}
