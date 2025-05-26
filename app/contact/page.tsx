import Link from "next/link"
import { nunitoSans } from "../layout"
import ContactFormWrapper from "./client-wrapper"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Dynamic - Get in Touch with Our Team",
  description:
    "Contact Dynamic for venture capital investment inquiries or growth partnership consulting. Reach out to Dakota McKenzie and the Dynamic team for technical founder support.",
  keywords: [
    "contact Dynamic",
    "venture capital contact",
    "investment inquiries",
    "growth partnership",
    "technical founder support",
    "startup consulting",
    "Dakota McKenzie contact",
    "Dynamic team",
    "VC contact",
    "startup funding contact",
  ],
  openGraph: {
    title: "Contact Dynamic - Get in Touch with Our Team",
    description:
      "Contact Dynamic for venture capital investment inquiries or growth partnership consulting. Reach out to our team for technical founder support.",
    url: "https://dynamic.vc/contact",
    siteName: "Dynamic",
    type: "website",
    images: [
      {
        url: "https://dynamic.vc/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dynamic - Get in Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dynamic - Get in Touch with Our Team",
    description: "Contact Dynamic for venture capital investment inquiries or growth partnership consulting.",
    images: ["https://dynamic.vc/og-contact.jpg"],
    creator: "@dakotajmckenzie",
  },
  alternates: {
    canonical: "https://dynamic.vc/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Structured data for contact page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Dynamic",
  description: "Contact Dynamic for venture capital investment inquiries or growth partnership consulting",
  url: "https://dynamic.vc/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Dynamic",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Investment Inquiries",
        email: "dakota@dynamicgrowth.partners",
        availableLanguage: "English",
        areaServed: "Global",
      },
      {
        "@type": "ContactPoint",
        contactType: "General Inquiries",
        url: "https://dynamic.vc/contact",
        availableLanguage: "English",
        areaServed: "Global",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Dynamic
            </Link>
          </div>

          <header className="text-center mb-10">
            <h1 className={`${nunitoSans.className} text-4xl sm:text-5xl font-bold tracking-tight`}>Talk with us</h1>
            <p className="mt-4 text-lg text-gray-400">
              Get in touch for investment inquiries or growth partnership consulting
            </p>
          </header>

          <ContactFormWrapper />

          {/* Subtle blog link */}
          <footer className="text-center mt-8">
            <Link
              href="https://www.yellingatcloud.ai/archive?sort=top"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              <span className="relative">
                Insights
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gray-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
