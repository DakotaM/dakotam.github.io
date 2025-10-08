import Link from "next/link"
import { Header } from "@/components/layout/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
  description:
    "Dynamic provides venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS. Led by Dakota McKenzie.",
  keywords: [
    "venture capital",
    "technical founders",
    "developer tools",
    "B2B SaaS",
    "startup funding",
    "growth partners",
    "GTM expertise",
    "Dynamic Fund",
    "Dakota McKenzie",
    "pre-seed funding",
    "seed funding",
    "series A",
    "infrastructure investing",
    "sales acceleration",
    "technical startup funding",
  ],
  openGraph: {
    title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
    description:
      "We provide venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS.",
    url: "https://dynamic.vc",
    siteName: "Dynamic",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dynamic - Venture Capital & Growth Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
    description:
      "We provide venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS.",
    images: ["/og-image.png"],
    creator: "@dakotajmckenzie",
  },
  alternates: {
    canonical: "https://dynamic.vc",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dynamic.vc/#website",
      url: "https://dynamic.vc",
      name: "Dynamic",
      description: "Venture capital and growth partners for technical founders",
      publisher: {
        "@id": "https://dynamic.vc/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://dynamic.vc/#organization",
      name: "Dynamic",
      alternateName: ["Dynamic Fund", "Dynamic Growth Partners"],
      url: "https://dynamic.vc",
      description:
        "Venture capital fund and growth partnership firm investing in technical founders building developer tools, infrastructure, and B2B SaaS from pre-seed onward",
      foundingDate: "2023",
      industry: ["Venture Capital", "Investment Management", "Business Consulting"],
      founder: {
        "@type": "Person",
        name: "Dakota McKenzie",
        jobTitle: "General Partner",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            DYNAMIC
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl text-white/70 mb-12 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Venture capital and growth partners for technical founders
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="/team"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-bg-tertiary border border-white/20 rounded-button hover:border-accent-blue/50 hover:bg-bg-elevated transition-all hover:-translate-y-0.5 min-w-[200px]"
            >
              Growth Partners
            </Link>
            <Link
              href="/fund"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-accent-blue rounded-button hover:bg-accent-blue-hover glow-accent glow-accent-hover transition-all hover:-translate-y-0.5 min-w-[200px]"
            >
              Fund
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
