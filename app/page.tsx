import Link from "next/link"
import { nunitoSans } from "./layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
  description:
    "Dynamic provides venture capital funding and growth partnership for technical founders. We invest in developer tools, infrastructure, and B2B SaaS from pre-seed onward. Led by Dakota McKenzie.",
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
    "infrastructure investing",
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
    creator: "@dakotajmckenzie",
  },
  alternates: {
    canonical: "https://dynamic.vc",
  },
}

// Enhanced structured data for AI search engines
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
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://dynamic.vc/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://dynamic.vc/#organization",
      name: "Dynamic",
      alternateName: ["Dynamic Fund", "Dynamic Growth Partners"],
      url: "https://dynamic.vc",
      logo: {
        "@type": "ImageObject",
        url: "https://dynamic.vc/logo.png",
        width: 400,
        height: 400,
      },
      description:
        "Venture capital fund and growth partnership firm investing in technical founders building developer tools, infrastructure, and B2B SaaS from pre-seed onward",
      foundingDate: "2023",
      industry: ["Venture Capital", "Investment Management", "Business Consulting"],
      serviceArea: {
        "@type": "Place",
        name: "Global",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Investment and Growth Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Venture Capital Funding",
              description: "Pre-seed to Series A funding for technical founders building developer tools and B2B SaaS",
              serviceType: "Investment",
              areaServed: "Global",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Growth Partnership",
              description: "GTM expertise, sales acceleration, and business development for technical startups",
              serviceType: "Consulting",
              areaServed: "Global",
            },
          },
        ],
      },
      founder: {
        "@type": "Person",
        "@id": "https://dynamic.vc/#dakota-mckenzie",
        name: "Dakota McKenzie",
        jobTitle: "General Partner",
        url: "https://www.linkedin.com/in/dakotajmckenzie/",
        description:
          "Former GTM leader at Databricks, Segment, Sumo Logic, and Demandware. Former investor at Unusual Ventures.",
        alumniOf: ["Databricks", "Segment", "Sumo Logic", "Demandware", "Unusual Ventures"],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Investment Inquiries",
          email: "dakota@dynamicgrowth.partners",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "General Inquiries",
          url: "https://dynamic.vc/contact",
          availableLanguage: "English",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/dynamic-growth-partners",
        "https://www.yellingatcloud.ai/archive?sort=top",
      ],
      knowsAbout: [
        "Venture Capital",
        "Technical Founders",
        "Developer Tools",
        "B2B SaaS",
        "Infrastructure Software",
        "Go-to-Market Strategy",
        "Sales Acceleration",
        "Startup Growth",
        "Pre-seed Funding",
        "Seed Funding",
        "Series A Funding",
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-8">
        <header className="text-center mb-12 md:mb-16">
          <h1 className={`${nunitoSans.className} text-5xl sm:text-6xl md:text-8xl font-bold text-white text-center`}>
            DYNAMIC
          </h1>
          <p className="sr-only">
            Dynamic - Venture capital and growth partners for technical founders building developer tools,
            infrastructure, and B2B SaaS
          </p>
        </header>

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
