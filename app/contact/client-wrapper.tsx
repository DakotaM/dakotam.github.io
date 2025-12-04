"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import the ContactForm component with SSR disabled
const ContactForm = dynamic(() => import("./contact-form"), { ssr: false })

export default function ContactFormWrapper() {
  return (
    <Suspense
      fallback={
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 animate-pulse">
          <div className="h-10 bg-gray-800 rounded mb-6"></div>
          <div className="h-32 bg-gray-800 rounded mb-6"></div>
          <div className="h-12 bg-gray-800 rounded"></div>
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  )
}
