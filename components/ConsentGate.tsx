"use client"

import { useEffect, useState } from "react"
import KoalaScript from "@/components/KoalaScript"

const apiKey = process.env.NEXT_PUBLIC_KOALA_API_KEY

export default function ConsentGate() {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("consent-koala")
    if (saved) setConsent(saved === "true")
  }, [])

  if (consent === null) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 12,
          left: 12,
          right: 12,
          background: "rgba(0,0,0,0.85)",
          color: "#fff",
          padding: 12,
          borderRadius: 8,
          zIndex: 9999,
        }}
      >
        <p style={{ margin: 0 }}>We use analytics to improve your experience.</p>
        <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
          <button
            onClick={() => {
              localStorage.setItem("consent-koala", "true")
              setConsent(true)
            }}
          >
            Allow
          </button>
          <button
            onClick={() => {
              localStorage.setItem("consent-koala", "false")
              setConsent(false)
            }}
          >
            Decline
          </button>
        </div>
      </div>
    )
  }

  if (consent) {
    // Load Koala with defer and then init after mount
    return (
      <>
        <KoalaScript deferInit />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window._koala) { window._koala("init", { apiKey: "${apiKey ?? ""}" }); }
            `,
          }}
        />
      </>
    )
  }

  return null
}
