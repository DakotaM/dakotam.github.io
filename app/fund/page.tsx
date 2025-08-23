import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Fund - Venture Capital for Technical Founders | Pre-Seed to Series A",
  description:
    "Dynamic Fund invests in technical founders building developer tools, infrastructure, and B2B SaaS. We provide capital and GTM expertise from pre-seed onward. Portfolio includes Infisical, Flightcrew, Judgment Labs, Gist, Scalar Field, Clado.",
  keywords: [
    "venture capital fund",
    "VC fund",
    "technical founders",
    "developer tools",
    "infrastructure investing",
    "B2B SaaS",
    "pre-seed funding",
    "seed funding",
    "series A funding",
    "startup investment",
    "GTM expertise",
    "sales acceleration",
    "Dynamic Fund",
    "Dakota McKenzie",
    "technical startup funding",
    "venture capital portfolio",
    "startup accelerator",
    "Scalar Field",
    "Clado",
  ],
  openGraph: {
    title: "Dynamic Fund - Venture Capital for Technical Founders",
    description:
      "We invest in the best technical founders looking to accelerate growth from pre-seed onward. Portfolio includes Infisical, Flightcrew, Judgment Labs, Gist, Scalar Field, Clado.",
    url: "https://dynamic.vc/fund",
    siteName: "Dynamic",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
    creator: "@dakotajmckenzie",
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

// Enhanced structured data for AI search engines
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dynamic.vc/fund/#organization",
      name: "Dynamic Fund",
      alternateName: "Dynamic",
      url: "https://dynamic.vc/fund",
      logo: {
        "@type": "ImageObject",
        url: "https://dynamic.vc/logo.png",
        width: 400,
        height: 400,
      },
      description:
        "Venture capital fund investing in technical founders building developer tools, infrastructure, and B2B SaaS from pre-seed onward",
      foundingDate: "2023",
      industry: "Venture Capital",
      investmentFocus: [
        "Developer Tools",
        "Infrastructure Software",
        "B2B SaaS",
        "Technical Founders",
        "Pre-seed Stage",
        "Seed Stage",
        "Series A",
      ],
      areaServed: "Global",
      founder: {
        "@id": "https://dynamic.vc/fund/#dakota-mckenzie",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Investment Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pre-seed Funding",
              description: "Early-stage funding for technical founders with proven product-market fit signals",
              serviceType: "Investment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Seed Funding",
              description: "Growth capital for technical startups with validated business models",
              serviceType: "Investment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Series A Funding",
              description: "Scale funding for proven technical companies ready for rapid growth",
              serviceType: "Investment",
            },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Investment Inquiries",
        email: "dakota@dynamicgrowth.partners",
        availableLanguage: "English",
      },
      knowsAbout: [
        "Venture Capital",
        "Technical Founders",
        "Developer Tools",
        "Infrastructure Software",
        "B2B SaaS",
        "Startup Funding",
        "Go-to-Market Strategy",
        "Sales Acceleration",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://dynamic.vc/fund/#dakota-mckenzie",
      name: "Dakota McKenzie",
      jobTitle: "General Partner",
      worksFor: {
        "@id": "https://dynamic.vc/fund/#organization",
      },
      url: "https://www.linkedin.com/in/dakotajmckenzie/",
      image: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg",
        width: 400,
        height: 400,
      },
      description:
        "General Partner at Dynamic Fund. Former GTM leader at Databricks, Segment, Sumo Logic, and Demandware. Former investor at Unusual Ventures specializing in technical founder investments.",
      alumniOf: [
        {
          "@type": "Organization",
          name: "Databricks",
          description: "Former GTM team member",
        },
        {
          "@type": "Organization",
          name: "Segment",
          description: "Former GTM team member",
        },
        {
          "@type": "Organization",
          name: "Unusual Ventures",
          description: "Former investor",
        },
        {
          "@type": "Organization",
          name: "Sumo Logic",
          description: "Former GTM team member",
        },
        {
          "@type": "Organization",
          name: "Demandware",
          description: "Former GTM team member",
        },
      ],
      knowsAbout: [
        "Venture Capital",
        "Go-to-Market Strategy",
        "Sales Acceleration",
        "Technical Founders",
        "B2B SaaS",
        "Developer Tools",
        "Infrastructure Software",
        "Startup Growth",
        "Investment Strategy",
      ],
      sameAs: ["https://www.linkedin.com/in/dakotajmckenzie/"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What stage companies does Dynamic Fund invest in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dynamic Fund invests in technical founders from pre-seed onward, including seed and Series A stages. We focus on companies building developer tools, infrastructure, and B2B SaaS.",
          },
        },
        {
          "@type": "Question",
          name: "What types of companies does Dynamic Fund invest in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We invest in technical founders building developer tools, infrastructure software, and B2B SaaS platforms. Our portfolio includes companies like Infisical, Flightcrew, Judgment Labs, Gist, Scalar Field, and Clado.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the General Partner of Dynamic Fund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dakota McKenzie is the General Partner of Dynamic Fund. He has extensive experience in GTM roles at companies like Databricks, Segment, Sumo Logic, and Demandware, and was previously an investor at Unusual Ventures.",
          },
        },
        {
          "@type": "Question",
          name: "How can founders apply for investment from Dynamic Fund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Founders seeking investment can email dakota@dynamicgrowth.partners with their pitch deck and company information. We prioritize long-term partnerships and focus on technical founders building developer-focused products.",
          },
        },
      ],
    },
  ],
}

const investmentLogos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png",
    alt: "Infisical - Open-source secret management platform",
  },
  {
    src: "/images/flightcrew-new-logo.png",
    alt: "Flightcrew - AI-powered customer success platform",
  },
  {
    src: "https://www.dynamicgrowth.partners/images/judgment-labs-logo.png",
    alt: "Judgment Labs - AI decision-making platform",
  },
  {
    src: "/images/gist-logo.png",
    alt: "Gist - Developer productivity platform",
  },
  {
    src: "/images/scalar-field-logo.png",
    alt: "Scalar Field logo",
  },
  {
    src: "/images/clado-logo.png",
    alt: "Clado logo",
  },
  {
    src: "/images/e3group-logo.png",
    alt: "e3group logo",
  },
]

export default function Fund() {
  const imageSizes = "(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 lg:mb-8">
              Dynamic Fund
            </h1>

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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {investmentLogos.map((logo, index) => (
                <div
                  key={logo.alt}
                  className={`group flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                    index === investmentLogos.length - 1 && investmentLogos.length % 3 === 1 ? "sm:col-start-2" : ""
                  }`}
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 overflow-hidden rounded-lg">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      layout="fill"
                      objectFit="contain"
                      className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      sizes={imageSizes}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Portfolio descriptions for AI crawlers */}
            <div className="sr-only">
              <h3>Portfolio Company Descriptions</h3>
              <ul>
                <li>Infisical: Open-source secret management platform for developers and DevOps teams</li>
                <li>Flightcrew: AI-powered customer success platform for B2B SaaS companies</li>
                <li>Judgment Labs: AI decision-making platform for enterprise applications</li>
                <li>Gist: Developer productivity platform for code collaboration and review</li>
                <li>Scalar Field: [Description of Scalar Field - please provide]</li>
                <li>Clado: [Description of Clado - please provide]</li>
                <li>e3group: [Description of e3group - please provide]</li>
              </ul>
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

              <Link
                href="https://www.linkedin.com/in/dakotajmckenzie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-medium text-white mb-1 tracking-wide hover:text-gray-300 transition-colors duration-300"
              >
                <h3 id="general-partner">Dakota McKenzie</h3>
              </Link>
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
                  teams from pre-$1M to $150M+ ARR{" "}
                  <strong className="text-white font-medium">(Databricks, Segment)</strong>, and being in the seat with
                  founders on their journey from $0-100M ARR prior to raising subsequent rounds from Tier-1 investors.
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
                <h4 className="text-lg sm:text-xl font-medium text-center mb-6" style={{ color: "#ABBDBD" }}>
                  Personal Investments
                </h4>

                <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                    { src: "/images/mtf-logo.png", alt: "MTF.vc - Venture capital fund" },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zXC8K7Jq5We5pbkRW6LBafhIe2Jv8B.png",
                      alt: "Zuplo - API management platform",
                    },
                    { src: "/safetycli-logo.svg", alt: "SafetyCLI - Security scanning tool" },
                    { src: "/images/ours-privacy-logo.png", alt: "Ours Privacy - Privacy-focused platform" },
                    { src: "/images/heyday-logo.png", alt: "Heyday - Memory assistant AI" },
                    {
                      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOHeIJcBXUpUXmU4mkB64jtp3BRaOH.png",
                      alt: "Nango - API integration platform",
                    },
                    { src: "/images/metaview-new-logo.png", alt: "Metaview - Interview intelligence platform" },
                    { src: "/images/plain-new-logo.png", alt: "Plain - Customer support platform" },
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <Link
                  href="/"
                  className="group inline-flex items-center text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="relative">
                    Back to Home
                    <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </span>
                </Link>

                <Link
                  href="https://www.yellingatcloud.ai/archive?sort=top"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="relative">
                    Insights
                    <span className="absolute bottom-0 left-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
