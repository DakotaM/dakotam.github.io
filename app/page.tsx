import Link from "next/link"
import { nunitoSans } from "./layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
  description:
    "Dynamic provides venture capital funding and growth partnership for technical founders. We invest in developer tools, infrastructure, and B2B SaaS from pre-seed onward.",
  openGraph: {
    title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
    description:
      "We provide venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS.",
    url: "https://dynamic.vc",
  },
  alternates: {
    canonical: "https://dynamic.vc",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dynamic",
  description: "Venture capital and growth partners for technical founders",
  url: "https://dynamic.vc",
  logo: "https://dynamic.vc/logo.png",
  sameAs: ["https://linkedin.com/company/dynamic-growth-partners"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Investment Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venture Capital Funding",
          description: "Pre-seed to Series A funding for technical founders",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth Partnership",
          description: "GTM expertise and sales acceleration for startups",
        },
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-8">
        <h1
          className={`${nunitoSans.className} text-5xl sm:text-6xl md:text-8xl font-bold mb-12 md:mb-16 text-white text-center`}
        >
          DYNAMIC
        </h1>
        <nav className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 md:space-x-16 mb-8">
          <Link href="/team" className="group text-xl sm:text-2xl text-white text-center">
            <span className="relative">
              Growth Partners
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
          </Link>
          <Link href="/fund" className="group text-xl sm:text-2xl text-white text-center">
            <span className="relative">
              Fund
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
          </Link>
        </nav>

        {/* Subtle blog link */}
        <footer className="mt-8">
          <Link
            href="https://www.yellingatcloud.ai/archive?sort=top"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
          >
            <span className="relative">
              Insights
              <span className="absolute bottom-0 left-1/2 w-0 h-px bg-gray-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
          </Link>
        </footer>
      </main>
    </>
  )
}
