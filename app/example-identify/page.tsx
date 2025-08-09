"use client"

import { useEffect } from "react"
import { koalaIdentify } from "@/lib/koala"

export default function ExampleIdentify() {
  useEffect(() => {
    // Example: replace with real user data after login/signup
    koalaIdentify({
      id: "123",
      email: "user@example.com",
      name: "Sample User",
      plan: "pro",
    })
  }, [])

  return <div>Fired Koala identify() with example traits. Check your Koala dashboard.</div>
}
