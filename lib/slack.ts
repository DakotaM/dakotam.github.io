export async function sendSlackNotification(message: {
  page_path: string
  referrer?: string
  utm_source?: string
  utm_campaign?: string
  visitor_id: string
  ip_address?: string
  is_new_visitor: boolean
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL

  console.log("[v0] Slack webhook URL configured:", !!webhookUrl)
  console.log("[v0] Notification data received:", message)

  if (!webhookUrl) {
    console.error("[v0] Slack webhook URL not configured")
    return false
  }

  try {
    const badge = message.is_new_visitor ? "🎉 NEW VISITOR" : "👤 Returning Visitor"
    const pagePath = message.page_path || "/"
    const referrer = message.referrer || "Direct"
    const utmSource = message.utm_source || "N/A"
    const utmCampaign = message.utm_campaign || "N/A"
    const ipAddress = message.ip_address || "Unknown"
    const visitorId = message.visitor_id || "Unknown"

    const text = `${badge}
*Page:* ${pagePath}
*Referrer:* ${referrer}
*UTM Source:* ${utmSource}
*UTM Campaign:* ${utmCampaign}
*IP Address:* ${ipAddress}
*Visitor ID:* ${visitorId}`

    console.log("[v0] Formatted Slack message:", text)

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })

    console.log("[v0] Slack API response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Slack API error response:", errorText)
    }

    return response.ok
  } catch (error) {
    console.error("[v0] Failed to send Slack notification:", error)
    return false
  }
}
