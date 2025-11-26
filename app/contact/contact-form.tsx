"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Add validation check before submission
    if (!formData.email) {
      setError("Email address is required")
      setIsSubmitting(false)
      return
    }

    try {
      // Send the form data to our API route instead of directly to Slack
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Error: ${response.status}`)
      }

      // Show success state
      setIsSubmitted(true)

      // Reset form
      setFormData({
        email: "",
        message: "",
      })
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-surface-elevated/50 backdrop-blur-sm border border-divider rounded-lg p-8 text-center">
        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-400"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank you for reaching out!</h3>
        <p className="text-text-muted mb-6">We'll get back to you shortly to schedule a time.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 bg-text-primary/10 hover:bg-text-primary/20 text-text-primary font-medium rounded-md transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-surface-elevated/50 backdrop-blur-sm border border-divider rounded-lg p-8">
      {error && <div className="mb-6 p-4 bg-red-900/20 border border-red-800/50 rounded-md text-red-300">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-surface-elevated/50 border border-divider rounded-md focus:outline-none focus:ring-1 focus:ring-text-primary/30 focus:border-text-primary/30 text-text-primary"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-surface-elevated/50 border border-divider rounded-md focus:outline-none focus:ring-1 focus:ring-text-primary/30 focus:border-text-primary/30 text-text-primary"
            placeholder="Tell us about your current challenges or goals..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-text-primary text-surface font-medium rounded-md hover:bg-text-secondary transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}
