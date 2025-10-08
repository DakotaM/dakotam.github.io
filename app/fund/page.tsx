import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import type { Metadata } from "next"

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
  },
}

const investmentLogos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png",
    alt: "Infisical - Open-source secret management platform",
    width: 120,
    height: 60,
  },
  {
    src: "/images/flightcrew-new-logo.png",
    alt: "Flightcrew - AI-powered customer success platform",
    width: 120,
    height: 60,
  },
  {
    src: "/images/judgment-labs-logo.png",
    alt: "Judgment Labs - AI decision-making platform",
    width: 120,
    height: 60,
  },
  {
    src: "/images/gist-logo.png",
    alt: "Gist - Developer productivity platform",
    width: 120,
    height: 60,
  },
  {
    src: "/images/scalar-field-logo.png",
    alt: "Scalar Field",
    width: 120,
    height: 60,
  },
  {
    src: "/images/clado-logo.png",
    alt: "Clado",
    width: 120,
    height: 60,
  },
  {
    src: "/images/e3group-logo.png",
    alt: "e3group",
    width: 120,
    height: 60,
  },
]

const experienceLogos = [
  {
    src: "/images/databricks-new-logo.png",
    alt: "Databricks",
    width: 75,
    height: 30,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png",
    alt: "Segment",
    width: 75,
    height: 30,
  },
  {
    src: "/images/unusual-ventures-new-logo.png",
    alt: "Unusual Ventures",
    width: 75,
    height: 30,
  },
  {
    src: "/images/sumo-logic-new-logo.png",
    alt: "Sumo Logic",
    width: 75,
    height: 30,
  },
  {
    src: "/images/demandware-new-logo.png",
    alt: "Demandware",
    width: 75,
    height: 30,
  },
]

const personalInvestments = [
  { src: "/images/thatch-logo.png", alt: "Thatch", width: 56, height: 28 },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U95kAn6sHfQv98gCN2C0DyDHbkAB6R.png",
    alt: "Clay",
    width: 56,
    height: 28,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A55jqUZYS4ibLSfKQjLK8as4yddq28.png",
    alt: "Liveblocks",
    width: 56,
    height: 28,
  },
  { src: "/images/dock-logo.png", alt: "Dock", width: 56, height: 28 },
  { src: "/images/mtf-logo.png", alt: "MTF.vc", width: 56, height: 28 },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zXC8K7Jq5We5pbkRW6LBafhIe2Jv8B.png",
    alt: "Zuplo",
    width: 56,
    height: 28,
  },
  { src: "/safetycli-logo.svg", alt: "SafetyCLI", width: 56, height: 28 },
  { src: "/images/ours-privacy-logo.png", alt: "Ours Privacy", width: 56, height: 28 },
  { src: "/images/heyday-logo.png", alt: "Heyday", width: 56, height: 28 },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOHeIJcBXUpUXmU4mkB64jtp3BRaOH.png",
    alt: "Nango",
    width: 56,
    height: 28,
  },
  { src: "/images/metaview-new-logo.png", alt: "Metaview", width: 56, height: 28 },
  { src: "/images/plain-new-logo.png", alt: "Plain", width: 56, height: 28 },
  { src: "/images/cara-ai-logo.png", alt: "Cara AI", width: 56, height: 28 },
]

export default function Fund() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          {/* Hero Section */}
          <header className="text-center mb-16 lg:mb-24 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Dynamic Fund</h1>

            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed">
                Dynamic invests in the best <strong className="text-white">technical Founders</strong> looking to
                accelerate growth from <strong className="text-white">pre-seed onward</strong>.
              </p>
              <p className="text-base sm:text-lg text-white/60">
                We prioritize long-term partnerships and obsess over your business.
              </p>
            </div>
          </header>

          {/* Portfolio Companies Section */}
          <section className="mb-20 lg:mb-30" aria-labelledby="portfolio">
            <div className="w-full h-px bg-white/8 mb-16" />
            <h2 id="portfolio" className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white/90">
              Investments
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {investmentLogos.map((logo, index) => (
                <div
                  key={logo.alt}
                  className={`group flex items-center justify-center bg-bg-tertiary border border-white/8 rounded-card p-6 transition-all hover:border-accent-blue/30 hover:bg-bg-elevated hover:-translate-y-1 animate-fade-in-up ${
                    index === investmentLogos.length - 1 && investmentLogos.length % 3 === 1 ? "sm:col-start-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain max-w-full max-h-full opacity-80 group-hover:opacity-100 transition-opacity"
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Dakota Section */}
          <section className="mb-20 lg:mb-30" aria-labelledby="general-partner">
            <div className="w-full h-px bg-white/8 mb-16" />

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3">
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-white/12">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                      alt="Dakota McKenzie - General Partner at Dynamic Fund"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>

                  <Link
                    href="https://www.linkedin.com/in/dakotajmckenzie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white mb-1 hover:text-accent-blue transition-colors"
                  >
                    <h3 id="general-partner">Dakota McKenzie</h3>
                  </Link>
                  <p className="text-sm text-white/60 mb-6">General Partner, Dynamic Fund</p>

                  {/* Experience Logos */}
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-6">
                    {experienceLogos.map((logo) => (
                      <div key={logo.alt} className="opacity-60 hover:opacity-100 transition-opacity">
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height}
                          className="h-8 object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:w-2/3 space-y-6 text-white/70 leading-relaxed">
                  <p>
                    Dakota supports founding teams at companies like{" "}
                    <strong className="text-white">Clay (Sequoia)</strong>,{" "}
                    <strong className="text-white">Thatch (Index)</strong>,{" "}
                    <strong className="text-white">WorkOS (Greenoaks)</strong>, and{" "}
                    <strong className="text-white">Plain (Battery)</strong> to accelerate their current sales efforts to
                    the next level or build their first GTM motion from the ground up.
                  </p>
                  <p>
                    His experience includes working for firms led by <strong>Midas-list investors</strong>{" "}
                    <strong className="text-white">(Unusual Ventures)</strong>, operating for world-class GTM teams from
                    pre-$1M to $150M+ ARR <strong className="text-white">(Databricks, Segment)</strong>, and being in
                    the seat with founders on their journey from $0-100M ARR prior to raising subsequent rounds from
                    Tier-1 investors.
                  </p>
                  <p>
                    Before running his fund, Dakota was on early GTM teams of companies like{" "}
                    <strong className="text-white">Demandware (IPO/Acq)</strong>,{" "}
                    <strong className="text-white">Sumo Logic (IPO)</strong>,{" "}
                    <strong className="text-white">Databricks</strong>, and{" "}
                    <strong className="text-white">Segment (Acq)</strong>.
                  </p>
                </div>
              </div>

              {/* Personal Investments */}
              <div className="mt-16">
                <h4 className="text-xl font-semibold text-center mb-8 text-white/90">Personal Investments</h4>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                  {personalInvestments.map((logo, index) => (
                    <div
                      key={index}
                      className={`group flex items-center justify-center h-16 bg-bg-tertiary border border-white/8 rounded-card p-3 transition-all hover:border-white/20 hover:scale-105 ${
                        index === personalInvestments.length - 1 && personalInvestments.length % 3 === 1
                          ? "col-start-2"
                          : ""
                      }`}
                    >
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center py-16" aria-labelledby="contact">
            <div className="w-full h-px bg-white/8 mb-16" />

            <div className="max-w-2xl mx-auto">
              <h2 id="contact" className="text-2xl font-semibold mb-4 text-white/90">
                Investment Inquiries
              </h2>
              <p className="text-white/60 mb-8">
                <strong>Founders seeking investment</strong> or <strong>prospective LPs</strong> can email us{" "}
                <Link
                  href="mailto:dakota@dynamicgrowth.partners"
                  className="text-accent-blue hover:text-accent-blue-hover underline transition-colors"
                >
                  here
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
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
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
