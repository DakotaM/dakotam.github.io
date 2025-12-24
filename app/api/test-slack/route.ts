import { NextResponse } from "next"
import { sendSlackNotification } from "@/lib/slack"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const result = await sendSlackNotification(
      "🧪 Test Notification",
      "This is a test message to verify your Slack webhook is working correctly!",
      [
        { label: "Test Time", value: new Date().toLocaleString() },
        { label: "Environment", value: process.env.VERCEL_ENV || "development" },
      ],
    )

    return NextResponse.json({
      success: result,
      webhookConfigured: !!process.env.SLACK_WEBHOOK_URL,
      message: result ? "Slack notification sent successfully!" : "Failed to send Slack notification",
    })
  } catch (error) {
    console.error("Error in test-slack:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
