"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { getVisitorId, getSessionId } from "@/lib/visitor-id"

export function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log("[v0] Tracker mounted, pathname:", pathname)

    // Don't track admin pages
    if (pathname?.startsWith("/admin")) {
      console.log("[v0] Skipping admin page tracking")
      return
    }

    const trackPageView = async () => {
      try {
        const visitorId = getVisitorId()
        const sessionId = getSessionId()

        console.log("[v0] Tracking data:", { visitorId, sessionId, pathname })

        const trackingData = {
          page_path: pathname || "/",
          referrer: document.referrer || null,
          utm_source: searchParams?.get("utm_source") || null,
          utm_medium: searchParams?.get("utm_medium") || null,
          utm_campaign: searchParams?.get("utm_campaign") || null,
          utm_term: searchParams?.get("utm_term") || null,
          utm_content: searchParams?.get("utm_content") || null,
          visitor_id: visitorId,
          session_id: sessionId,
          user_agent: navigator.userAgent,
          screen_width: window.screen.width,
          screen_height: window.screen.height,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }

        console.log("[v0] Sending tracking request to /api/track")

        const response = await fetch("/api/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trackingData),
        })

        const result = await response.json()
        console.log("[v0] Tracking response:", result)
      } catch (error) {
        console.error("[v0] Tracking error:", error)
      }
    }

    trackPageView()
  }, [pathname, searchParams])

  return null
}
