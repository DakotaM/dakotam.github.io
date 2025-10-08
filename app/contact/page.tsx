import Link from "next/link"
import { Header } from "@/components/layout/header"
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
    creator: "@dakotajmckenzie",
  },
  alternates: {
    canonical: "https://dynamic.vc/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-16 lg:py-24 max-w-3xl">
          <header className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Talk with us</h1>
            <p className="text-lg text-white/60">
              Get in touch for investment inquiries or growth partnership consulting
            </p>
          </header>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <ContactFormWrapper />
          </div>

          {/* Footer Links */}
          <footer className="text-center mt-12 pt-8 border-t border-white/8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                Back to Home
              </Link>
              <Link
                href="https://www.yellingatcloud.ai/archive?sort=top"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                Insights
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
