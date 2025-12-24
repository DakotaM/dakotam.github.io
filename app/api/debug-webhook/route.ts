import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL

  return NextResponse.json({
    hasWebhook: !!webhookUrl,
    webhookLength: webhookUrl?.length || 0,
    webhookStart: webhookUrl?.substring(0, 30) || "not set",
    allEnvVars: Object.keys(process.env).filter((key) => key.includes("SLACK")),
  })
}
