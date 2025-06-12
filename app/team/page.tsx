import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import "../team-styles.css"
import { Suspense } from "react"
import LogoGrid from "./logo-grid"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Growth Partners - GTM Consulting for Technical Founders",
  description:
    "Dynamic Growth Partners provides go-to-market consulting, sales acceleration, and business development for technical founders. Led by Dakota McKenzie (CEO), Trey Johnson (Operating Partner), and Ben Cappellacci (Deployment Advisor). Over 25% of clients raise Tier-1 venture rounds.",
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
    "Ben Cappellacci", // Added
    "startup growth",
    "venture capital preparation",
    "deployment advisory", // Added
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
        url: "https://dynamic.vc/og-team.jpg",
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
    images: ["https://dynamic.vc/og-team.jpg"],
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
      logo: {
        "@type": "ImageObject",
        url: "https://dynamic.vc/logo.png",
        width: 400,
        height: 400,
      },
      description:
        "Growth partnership firm providing go-to-market consulting, sales acceleration, and business development for technical founders building developer tools and B2B SaaS",
      foundingDate: "2023",
      industry: ["Business Consulting", "Sales Consulting", "Go-to-Market Strategy"],
      areaServed: "Global",
      employee: [
        // Updated employee list
        { "@id": "https://dynamic.vc/team/#dakota-mckenzie" },
        { "@id": "https://dynamic.vc/team/#trey-johnson" },
        { "@id": "https://dynamic.vc/team/#ben-cappellacci" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General Inquiries",
        url: "https://dynamic.vc/contact",
        availableLanguage: "English",
      },
      knowsAbout: [
        "Go-to-Market Strategy",
        "Sales Acceleration",
        "Product-Led Growth",
        "Technical Founders",
        "Developer Tools",
        "B2B SaaS",
        "Startup Growth",
        "Sales Process Optimization",
        "Open Source Strategy",
        "Venture Capital Preparation",
        "Deployment Advisory",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://dynamic.vc/team/#dakota-mckenzie",
      name: "Dakota McKenzie",
      jobTitle: "CEO", // Updated title
      worksFor: { "@id": "https://dynamic.vc/team/#organization" },
      url: "https://linkedin.com/in/dakotajmckenzie",
      image: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg",
        width: 400,
        height: 400,
      },
      description:
        "CEO of Dynamic Growth Partners. Former GTM leader at Databricks, Segment, Sumo Logic, and Demandware. Former investor at Unusual Ventures.",
      alumniOf: [
        { "@type": "Organization", name: "Databricks" },
        { "@type": "Organization", name: "Segment" },
        { "@type": "Organization", name: "Unusual Ventures" },
      ],
      knowsAbout: ["Go-to-Market Strategy", "Sales Acceleration", "Venture Capital", "B2B SaaS", "Developer Tools"],
      sameAs: ["https://linkedin.com/in/dakotajmckenzie"],
    },
    {
      "@type": "Person",
      "@id": "https://dynamic.vc/team/#trey-johnson",
      name: "Trey Johnson",
      jobTitle: "Operating Partner", // Updated title
      worksFor: { "@id": "https://dynamic.vc/team/#organization" },
      url: "https://www.linkedin.com/in/trey-j-07156924/",
      image: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trey-EPgexA01iWSJgBZzf8NZQUyuSh0R4y.jpeg",
        width: 400,
        height: 400,
      },
      description:
        "Operating Partner of Dynamic Growth Partners specializing in sales operations and business development.",
      knowsAbout: ["Sales Operations", "Business Development", "Go-to-Market Strategy", "Technical Founders"],
      sameAs: ["https://www.linkedin.com/in/trey-j-07156924/"],
    },
    {
      // New Person schema for Ben
      "@type": "Person",
      "@id": "https://dynamic.vc/team/#ben-cappellacci",
      name: "Ben Cappellacci",
      jobTitle: "Deployment Advisor",
      worksFor: { "@id": "https://dynamic.vc/team/#organization" },
      url: "https://www.linkedin.com/in/bencappellacci/",
      image: {
        "@type": "ImageObject",
        url: "/images/ben-cappellacci.jpeg", // Local path for Ben's image
        width: 400, // Assuming similar dimensions
        height: 400,
      },
      description: "Deployment Advisor at Dynamic Growth Partners, focusing on technical implementation and strategy.",
      knowsAbout: ["Deployment Strategy", "Technical Advisory", "Cloud Infrastructure", "DevOps"],
      sameAs: ["https://www.linkedin.com/in/bencappellacci/"],
    },
    {
      "@type": "FAQPage", // This FAQ section is from v110
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Dynamic Growth Partners provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dynamic Growth Partners provides go-to-market consulting, sales process optimization, product-led growth optimization, hiring and recruiting, pricing strategy, and sales management for technical founders building developer tools and B2B SaaS.",
          },
        },
        {
          "@type": "Question",
          name: "Who are the founders of Dynamic Growth Partners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dynamic Growth Partners is led by Dakota McKenzie and Trey Johnson. Dakota has extensive GTM experience at companies like Databricks, Segment, and was an investor at Unusual Ventures.",
          },
        },
        {
          "@type": "Question",
          name: "What types of companies does Dynamic Growth Partners work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with technical founders building developer tools, infrastructure software, and B2B SaaS platforms. Over 25% of our clients have gone on to raise Tier-1 venture rounds.",
          },
        },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Hero Section (v110 style) */}
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 lg:mb-8">
              Dynamic Growth Partners
            </h1>
            <div className="max-w-[800px] mx-auto mt-6 lg:mt-8">
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 tracking-wide">
                We support technical Founders and their teams pre-seed to pre-IPO in accelerating growth and hitting
                fundraising milestones faster by applying best practices and learnings from hands-on execution alongside
                the best GTM and Product leaders in the world.
              </p>
            </div>
          </header>

          {/* Team Section - Adapted for 3 members */}
          <section className="mb-12" aria-labelledby="team">
            <div className="w-full h-px bg-gray-900 mb-10" />
            <h2 id="team" className="sr-only">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 max-w-5xl mx-auto">
              {/* Dakota McKenzie */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 relative mb-4 team-photo-container">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                    alt="Dakota McKenzie - CEO of Dynamic Growth Partners"
                    fill
                    priority
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 224px, 256px"
                  />
                </div>
                <Link
                  href="http://linkedin.com/in/dakotajmckenzie"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide"
                >
                  <h3>Dakota McKenzie</h3>
                </Link>
                <p className="text-sm text-gray-400">CEO</p>
              </div>

              {/* Trey Johnson */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 relative mb-4 team-photo-container">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trey-EPgexA01iWSJgBZzf8NZQUyuSh0R4y.jpeg"
                    alt="Trey Johnson - Operating Partner at Dynamic Growth Partners"
                    fill
                    priority
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 224px, 256px"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/trey-j-07156924/"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide"
                >
                  <h3>Trey Johnson</h3>
                </Link>
                <p className="text-sm text-gray-400">Operating Partner</p>
              </div>

              {/* Ben Cappellacci */}
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 sm:w-64 sm:h-64 relative mb-4 team-photo-container">
                  <Image
                    src="/images/ben-cappellacci.jpeg"
                    alt="Ben Cappellacci - Deployment Advisor at Dynamic Growth Partners"
                    fill
                    priority
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 224px, 256px"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/bencappellacci/"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide"
                >
                  <h3>Ben Cappellacci</h3>
                </Link>
                <p className="text-sm text-gray-400">Deployment Advisor</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-gray-200 space-y-4 leading-relaxed text-sm sm:text-base">
              <p>
                We support founding teams looking to accelerate their business and achieve fundraising milestones faster
                through the best practices and learnings from world-class companies. Our experience includes working for
                firms led by Midas-list investors, operating at world-class GTM teams from pre-$1m in ARR to $1.5B ARR,
                and being in the seat with founders on their journey from $0-100M+ ARR prior to raising their next
                fundraising rounds from Tier-1 investors.
              </p>
              <p>
                We're the go-to partner for technical founders who want to turn product excellence into commercial
                outcomes — over 25% of our clients have gone on to raise Tier-1 venture rounds, and know how and when to
                deploy the right tools to ensure you're making the right strides towards product-market fit and building
                the best GTM team possible.
              </p>
            </div>
          </section>

          {/* Areas of Focus Section (v110 style) */}
          <section className="mb-12" aria-labelledby="services">
            <div className="w-full h-px bg-gray-900 mb-10" />
            <div className="max-w-4xl mx-auto">
              <h2
                id="services"
                className="text-2xl sm:text-3xl font-medium text-center mb-8"
                style={{ color: "#ABBDBD" }}
              >
                Areas of Focus
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Sales Process & Repeatability</h3>
                    <p className="text-sm sm:text-base text-gray-200">
                      Conducting comprehensive reviews of current opportunities and guiding through existing sales
                      processes to find repeatability.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Open Source + PLG Optimization</h3>
                    <p className="mb-4 text-sm sm:text-base text-gray-200">
                      Uncover the key motivations and reasons why your top users leverage your open source project and
                      what are they key levers to conversion.
                    </p>
                    <p className="text-sm sm:text-base text-gray-200">
                      Understand the adoption path of top-of-funnel users leveraging your self-service product to
                      acknowledge what levers are required to justify a purchase (or upgrades).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">User / Buyer Journey</h3>
                    <p className="text-sm sm:text-base text-gray-200">
                      Ensuring a solid user/buyer journey to help navigate tougher "bottoms up" sales cycles.
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Sales Management</h3>
                    <p className="mb-4 text-sm sm:text-base text-gray-200">
                      Coaching and partnering with sales leadership
                    </p>
                    <p className="mb-4 text-sm sm:text-base text-gray-200">
                      Conducting pipeline and deal reviews with AEs
                    </p>
                    <p className="text-sm sm:text-base text-gray-200">
                      Managing Account Executives on full-sales cycles
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Pipeline Focus</h3>
                    <p className="text-sm sm:text-base text-gray-200">
                      Exercises to test and building pipeline (outbound and leveraging inbound for faster wins).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Build the right product</h3>
                    <p className="mb-4 text-sm sm:text-base text-gray-200">
                      Collecting product feedback to identify current and future roadmap opportunities
                    </p>
                    <p className="text-sm sm:text-base text-gray-200">
                      Look for ways to identify what your developer community needs to be successful through discovery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section (v110 style) */}
          <section className="mb-12" aria-labelledby="experience">
            <div className="w-full h-px bg-gray-900 mb-10" />
            <div className="max-w-4xl mx-auto">
              <h2
                id="experience"
                className="text-2xl sm:text-3xl font-medium text-center mb-8"
                style={{ color: "#ABBDBD" }}
              >
                Experience
              </h2>
              <p className="mb-8 text-sm sm:text-base text-gray-200 leading-relaxed">
                We have worked at a range of SaaS companies in the earlier stages of growth based on our drive to build
                and grow new functions. We are inspired by building alongside world-class founders and teams.
              </p>
              <Suspense
                fallback={
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
                    {Array(25)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 flex items-center justify-center logo-container animate-pulse bg-gray-800 rounded-md"
                        ></div>
                      ))}
                  </div>
                }
              >
                <LogoGrid />
              </Suspense>
            </div>
          </section>

          {/* Contact Section (v110 style) */}
          <section className="text-center py-6" aria-labelledby="contact">
            <div className="w-full h-px bg-gray-900 mb-8" />
            <div className="max-w-[800px] mx-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-black bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300 min-w-[220px] mb-6"
              >
                Book an intro call
              </Link>
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
