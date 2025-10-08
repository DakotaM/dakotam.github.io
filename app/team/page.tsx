import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import type { Metadata } from "next"
import { Suspense } from "react"
import LogoGrid from "./logo-grid"

export const metadata: Metadata = {
  title: "Dynamic Growth Partners - GTM Consulting for Technical Founders",
  description:
    "Dynamic Growth Partners provides go-to-market consulting, sales acceleration, and business development for technical founders. Led by Dakota McKenzie (CEO), Trey Johnson (Operating Partner), Ben Cappellacci (FDE Advisor), and Cindy Boulous (Executive Assistant). Over 25% of clients raise Tier-1 venture rounds.",
  keywords: [
    "growth partners",
    "GTM consulting",
    "go-to-market strategy",
    "sales acceleration",
    "technical founders",
    "startup consulting",
    "business development",
    "Dakota McKenzie",
    "Trey Johnson",
    "Ben Cappellacci",
    "Cindy Boulous",
    "startup growth",
    "venture capital preparation",
    "deployment advisory",
  ],
  openGraph: {
    title: "Dynamic Growth Partners - GTM Consulting for Technical Founders",
    description:
      "We support founding teams looking to accelerate their business and achieve fundraising milestones faster. Over 25% of our clients have gone on to raise Tier-1 venture rounds.",
    url: "https://dynamic.vc/team",
    siteName: "Dynamic",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dynamic Growth Partners - GTM Consulting Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Growth Partners - GTM Consulting for Technical Founders",
    description:
      "We support founding teams looking to accelerate their business and achieve fundraising milestones faster.",
    images: ["/og-image.png"],
    creator: "@dakotajmckenzie",
  },
  alternates: {
    canonical: "https://dynamic.vc/team",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dynamic.vc/team/#organization",
      name: "Dynamic Growth Partners",
      alternateName: "Dynamic",
      url: "https://dynamic.vc/team",
      description:
        "Growth partnership firm providing go-to-market consulting, sales acceleration, and business development for technical founders building developer tools and B2B SaaS",
      foundingDate: "2023",
      industry: ["Business Consulting", "Sales Consulting", "Go-to-Market Strategy"],
      areaServed: "Global",
      employee: [
        { "@id": "https://dynamic.vc/team/#dakota-mckenzie" },
        { "@id": "https://dynamic.vc/team/#trey-johnson" },
        { "@id": "https://dynamic.vc/team/#ben-cappellacci" },
        { "@id": "https://dynamic.vc/team/#cindy-boulous" },
      ],
    },
  ],
}

const team = [
  {
    name: "Dakota McKenzie",
    title: "CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg",
    linkedin: "https://linkedin.com/in/dakotajmckenzie",
  },
  {
    name: "Trey Johnson",
    title: "Operating Partner",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trey-EPgexA01iWSJgBZzf8NZQUyuSh0R4y.jpeg",
    linkedin: "https://www.linkedin.com/in/trey-j-07156924/",
  },
  {
    name: "Ben Cappellacci",
    title: "FDE Advisor",
    image: "/images/ben-cappellacci.jpeg",
    linkedin: "https://www.linkedin.com/in/bencappellacci/",
  },
  {
    name: "Cindy Boulous",
    title: "Executive Assistant",
    image: "/images/cindy-boulous.jpeg",
    linkedin: "https://www.linkedin.com/in/cindyboulous/",
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          {/* Hero Section */}
          <header className="text-center mb-16 lg:mb-24 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Dynamic Growth Partners
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed">
                Dynamic Growth Partners is focused on Founder-led company building and modern organizational design.
              </p>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                We work exclusively with technical Founders ranging from pre-seed through pre-IPO to help them grow
                faster, execute better, and raise capital more effectively.
              </p>
              <p className="text-sm sm:text-base text-white/50">
                Our approach is grounded in hands-on execution, shaped by working alongside the best GTM and Product
                leaders in the world. To date, over 30% of our clients have raised Tier 1 venture rounds.
              </p>
            </div>
          </header>

          {/* Team Section */}
          <section className="mb-20 lg:mb-30" aria-labelledby="team">
            <div className="w-full h-px bg-white/8 mb-16" />
            <h2 id="team" className="sr-only">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 mb-4 rounded-full overflow-hidden border-2 border-white/12 hover:border-accent-blue/50 transition-all hover:scale-105">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-semibold hover:text-accent-blue transition-colors"
                  >
                    <h3>{member.name}</h3>
                  </Link>
                  <p className="text-sm text-white/60 mt-1">{member.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Description Section */}
          <section className="mb-20 lg:mb-30">
            <div className="max-w-4xl mx-auto bg-bg-tertiary border border-white/8 rounded-card p-8 lg:p-12">
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Our experience includes working for and partnering with firms led by Midas-list investors, operating
                  at world-class GTM teams from pre-$1m in ARR to $1.5B ARR, and being in the seat with founders on
                  their journey from $0-100M+ ARR through strong product execution and a GTM machine bolted on.
                </p>
                <p>
                  Dynamic is the go-to partner for technical Founders because we know how and when to deploy the right
                  tools to ensure you're making the right strides towards product-market fit and building the best team
                  possible to achieve your goals as a business.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-20" aria-labelledby="experience">
            <div className="w-full h-px bg-white/8 mb-16" />
            <div className="max-w-5xl mx-auto">
              <h2 id="experience" className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white/90">
                Experience
              </h2>
              <p className="text-center text-white/60 mb-12 max-w-3xl mx-auto">
                We have worked at a range of SaaS companies in the earlier stages of growth based on our drive to build
                and grow new functions. We are inspired by building alongside world-class founders and teams.
              </p>
              <Suspense
                fallback={
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 items-center justify-items-center">
                    {Array(25)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-24 h-16 flex items-center justify-center animate-pulse bg-bg-tertiary rounded-md"
                        ></div>
                      ))}
                  </div>
                }
              >
                <LogoGrid />
              </Suspense>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="w-full h-px bg-white/8 mb-16" />
            <div className="max-w-2xl mx-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-accent-blue rounded-button hover:bg-accent-blue-hover glow-accent glow-accent-hover transition-all hover:-translate-y-0.5"
              >
                Book an intro call
              </Link>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
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
