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

  if (!webhookUrl) {
    console.error("[v0] Slack webhook URL not configured")
    return false
  }

  try {
    const badge = message.is_new_visitor ? "🎉 NEW VISITOR" : "👤 Returning Visitor"
    const text = `${badge}
*Page:* ${message.page_path}
*Referrer:* ${message.referrer || "Direct"}
*UTM Source:* ${message.utm_source || "N/A"}
*UTM Campaign:* ${message.utm_campaign || "N/A"}
*IP Address:* ${message.ip_address || "Unknown"}
*Visitor ID:* ${message.visitor_id}`

    console.log("[v0] Sending Slack notification:", { badge, page_path: message.page_path })

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
