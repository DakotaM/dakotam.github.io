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

    if (!formData.email) {
      setError("Email address is required")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Error: ${response.status}`)
      }

      setIsSubmitted(true)
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
      <div className="bg-bg-tertiary border border-white/8 rounded-card p-12 text-center">
        <div className="w-16 h-16 bg-accent-blue/20 text-accent-blue rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Thank you for reaching out!</h3>
        <p className="text-white/60 mb-8">We'll get back to you shortly to schedule a time.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-bg-elevated hover:bg-white/10 text-white font-medium rounded-button transition-colors"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-bg-tertiary border border-white/8 rounded-card p-8 lg:p-12">
      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-800/50 rounded-md text-red-300 text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-elevated border border-white/12 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 text-white placeholder:text-white/40 transition-all"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-elevated border border-white/12 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 text-white placeholder:text-white/40 transition-all resize-none"
            placeholder="Tell us about your current challenges or goals..."
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-accent-blue text-white font-semibold rounded-button hover:bg-accent-blue-hover glow-accent glow-accent-hover transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}
