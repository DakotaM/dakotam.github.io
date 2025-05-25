import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Fund - Venture Capital for Technical Founders | Pre-Seed to Series A",
  description:
    "Dynamic Fund invests in technical founders building developer tools, infrastructure, and B2B SaaS. We provide capital and GTM expertise from pre-seed onward. Portfolio includes Infisical, Flightcrew, Judgment Labs.",
  keywords: [
    "venture capital",
    "VC fund",
    "technical founders",
    "developer tools",
    "infrastructure investing",
    "B2B SaaS",
    "pre-seed funding",
    "seed funding",
    "startup investment",
    "GTM expertise",
    "sales acceleration",
    "Dynamic Fund",
    "Dakota McKenzie",
    "technical startup funding",
  ],
  openGraph: {
    title: "Dynamic Fund - Venture Capital for Technical Founders",
    description:
      "We invest in the best technical founders looking to accelerate growth from pre-seed onward. Portfolio includes Infisical, Flightcrew, Judgment Labs, and Gist.",
    url: "https://dynamic.vc/fund",
    siteName: "Dynamic",
    type: "website",
    images: [
      {
        url: "https://dynamic.vc/og-fund.jpg",
        width: 1200,
        height: 630,
        alt: "Dynamic Fund - Venture Capital for Technical Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Fund - Venture Capital for Technical Founders",
    description: "We invest in the best technical founders looking to accelerate growth from pre-seed onward.",
    images: ["https://dynamic.vc/og-fund.jpg"],
  },
  alternates: {
    canonical: "https://dynamic.vc/fund",
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

// Structured data for search engines
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dynamic Fund",
  description:
    "Venture capital fund investing in technical founders building developer tools, infrastructure, and B2B SaaS from pre-seed onward",
  url: "https://dynamic.vc/fund",
  logo: "https://dynamic.vc/logo.png",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Dakota McKenzie",
    jobTitle: "General Partner",
    description: "Former GTM leader at Databricks, Segment, Sumo Logic, and Demandware. Investor at Unusual Ventures.",
    url: "https://linkedin.com/in/dakotajmckenzie",
  },
  investmentFocus: ["Developer Tools", "Infrastructure", "B2B SaaS", "Technical Founders", "Pre-seed", "Seed Stage"],
  portfolio: [
    {
      "@type": "Organization",
      name: "Infisical",
      description: "Open-source secret management platform",
    },
    {
      "@type": "Organization",
      name: "Flightcrew",
      description: "AI-powered customer success platform",
    },
    {
      "@type": "Organization",
      name: "Judgment Labs",
      description: "AI decision-making platform",
    },
    {
      "@type": "Organization",
      name: "Gist",
      description: "Developer productivity platform",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "dakota@dynamicgrowth.partners",
    contactType: "Investment Inquiries",
  },
}

export default function Fund() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 lg:mb-8">
                Dynamic Fund
              </h1>
              <div
                className="absolute -bottom-1 left-0 right-0 h-0.5 opacity-80"
                style={{ backgroundColor: "#ABBDBD" }}
              />
            </div>

            <div className="max-w-[700px] mx-auto space-y-3 lg:space-y-4 mt-6 lg:mt-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 tracking-wide">
                Dynamic invests in the best <strong>technical Founders</strong> looking to accelerate growth from{" "}
                <strong>pre-seed onward</strong>.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-400 tracking-wide">
                We prioritize long-term partnerships and obsess over your business.
              </p>
            </div>
          </header>

          {/* Portfolio Companies Section */}
          <section className="mb-12" aria-labelledby="portfolio">
            <div className="w-full h-px bg-gray-900 mb-8" />
            <h2
              id="portfolio"
              className="text-2xl sm:text-3xl font-medium text-center mb-8"
              style={{ color: "#ABBDBD" }}
            >
              Investments
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="group flex items-center justify-center h-24 sm:h-28 lg:h-32 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png"
                    alt="Infisical - Open-source secret management platform"
                    width={180}
                    height={90}
                    className="h-24 sm:h-28 lg:h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              <div className="group flex items-center justify-center h-24 sm:h-28 lg:h-32 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/flightcrew-new-logo.png"
                    alt="Flightcrew - AI-powered customer success platform"
                    width={180}
                    height={90}
                    className="h-24 sm:h-28 lg:h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              <div className="group flex items-center justify-center h-24 sm:h-28 lg:h-32 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/judgment-labs-logo.png"
                    alt="Judgment Labs - AI decision-making platform"
                    width={180}
                    height={90}
                    className="h-24 sm:h-28 lg:h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              <div className="group flex items-center justify-center h-24 sm:h-28 lg:h-32 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/images/gist-logo.png"
                    alt="Gist - Developer productivity platform"
                    width={180}
                    height={90}
                    className="h-24 sm:h-28 lg:h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Dakota Section */}
          <section className="mb-12" aria-labelledby="general-partner">
            <div className="w-full h-px bg-gray-900 mb-10" />

            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="w-24 sm:w-28 h-24 sm:h-28 mb-4 rounded-full overflow-hidden ring-1 ring-gray-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                  alt="Dakota McKenzie - General Partner at Dynamic Fund"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <h3 id="general-partner" className="text-xl sm:text-2xl font-medium text-white mb-1 tracking-wide">
                Dakota McKenzie
              </h3>
              <p className="text-base sm:text-lg tracking-wide mb-4" style={{ color: "#ABBDBD" }}>
                General Partner, Dynamic Fund
              </p>

              {/* Experience Logos */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 mb-6">
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/databricks-new-logo.png"
                    alt="Databricks - Former GTM team member"
                    width={75}
                    height={30}
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png"
                    alt="Segment - Former GTM team member"
                    width={75}
                    height={30}
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/unusual-ventures-new-logo.png"
                    alt="Unusual Ventures - Former investor"
                    width={75}
                    height={30}
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/sumo-logic-new-logo.png"
                    alt="Sumo Logic - Former GTM team member"
                    width={75}
                    height={30}
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/images/demandware-new-logo.png"
                    alt="Demandware - Former GTM team member"
                    width={75}
                    height={30}
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6 text-gray-200 space-y-4 leading-relaxed text-sm sm:text-base w-full max-w-4xl">
                <p className="text-left">
                  Dakota supports founding teams at companies like{" "}
                  <strong className="text-white font-medium">Clay (Sequoia)</strong>,{" "}
                  <strong className="text-white font-medium">Thatch (Index)</strong>,{" "}
                  <strong className="text-white font-medium">WorkOS (Greenoaks)</strong>, and{" "}
                  <strong className="text-white font-medium">Plain (Index)</strong> to accelerate their current sales
                  efforts to the next level or build their first GTM motion from the ground up.
                </p>
                <p className="text-left">
                  His experience includes working for firms led by <strong>Midas-list investors</strong>{" "}
                  <strong className="text-white font-medium">(Unusual Ventures)</strong>, operating for world-class GTM
                  teams from pre-$1M to $150M+ ARR, and being in the seat with founders on their journey from $0-100M
                  ARR prior to raising subsequent rounds from Tier-1 investors.
                </p>
                <p className="text-left">
                  Before running his fund, Dakota was on early GTM teams of companies like{" "}
                  <strong className="text-white font-medium">Demandware (IPO/Acq)</strong>,{" "}
                  <strong className="text-white font-medium">Sumo Logic (IPO)</strong>,{" "}
                  <strong className="text-white font-medium">Databricks</strong>, and{" "}
                  <strong className="text-white font-medium">Segment (Acq)</strong>.
                </p>
              </div>

              {/* Personal Investments */}
              <div className="mt-12 w-full max-w-5xl">
                <h2 className="text-lg sm:text-xl font-medium text-center mb-6" style={{ color: "#ABBDBD" }}>
                  Personal Investments
                </h2>

                <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {[
                    { src: "/images/thatch-logo.png", alt: "Thatch - Benefits platform" },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U95kAn6sHfQv98gCN2C0DyDHbkAB6R.png",
                      alt: "Clay - Data enrichment platform",
                    },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A55jqUZYS4ibLSfKQjLK8as4yddq28.png",
                      alt: "Liveblocks - Collaborative software platform",
                    },
                    { src: "/images/dock-logo.png", alt: "Dock - Customer workspace platform" },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOHeIJcBXUpUXmU4mkB64jtp3BRaOH.png",
                      alt: "Nango - API integration platform",
                    },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zXC8K7Jq5We5pbkRW6LBafhIe2Jv8B.png",
                      alt: "Zuplo - API management platform",
                    },
                    { src: "/safetycli-logo.svg", alt: "SafetyCLI - Security scanning tool" },
                    { src: "/images/heyday-logo.png", alt: "Heyday - Memory assistant AI" },
                    { src: "/images/mtf-logo.png", alt: "MTF.vc - Venture capital fund" },
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="group flex items-center justify-center h-12 sm:h-14 lg:h-16 transition-all duration-300 hover:scale-105"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          width={56}
                          height={28}
                          className="h-12 sm:h-14 lg:h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center py-6" aria-labelledby="contact">
            <div className="w-full h-px bg-gray-900 mb-8" />

            <div className="max-w-[800px] mx-auto">
              <h2 id="contact" className="text-xl font-medium mb-4" style={{ color: "#ABBDBD" }}>
                Investment Inquiries
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 tracking-wide">
                <strong>Founders seeking investment</strong> or <strong>prospective LPs</strong> can email us{" "}
                <Link
                  href="mailto:dakota@dynamicgrowth.partners"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
                >
                  here
                </Link>
                .
              </p>
              <Link
                href="/"
                className="group inline-flex items-center text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Back to Home
                  <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
