import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import "../team-styles.css"
import type { Metadata } from "next"
import { Suspense } from "react"
import LogoGrid from "./logo-grid"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Growth Partners - GTM Consulting for Technical Founders",
  description:
    "Dynamic Growth Partners provides go-to-market consulting, sales acceleration, and business development for technical founders. Led by Dakota McKenzie (CEO), Trey Johnson (Operating Partner), Mike Haylon (Operating Partner), Ben Cappellacci (FDE Advisor), and Cindy Boulous (Executive Assistant). Over 25% of clients raise Tier-1 venture rounds.",
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
    "Mike Haylon", // Added
    "Ben Cappellacci",
    "Cindy Boulous",
    "startup growth",
    "venture capital preparation",
    "deployment advisory",
  ],
  openGraph: {
    title: "Dynamic Growth Partners - GTM Consulting Team",
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
        { "@id": "https://dynamic.vc/team/#mike-haylon" }, // Added
        { "@id": "https://dynamic.vc/team/#ben-cappellacci" },
        { "@id": "https://dynamic.vc/team/#cindy-boulous" },
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
        url: "/images/dakota.jpeg",
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
        url: "/images/trey.jpeg",
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
      jobTitle: "FDE Advisor", // Updated title
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
      // New Person schema for Cindy
      "@type": "Person",
      "@id": "https://dynamic.vc/team/#cindy-boulous",
      name: "Cindy Boulous",
      jobTitle: "Executive Assistant",
      worksFor: { "@id": "https://dynamic.vc/team/#organization" },
      image: {
        "@type": "ImageObject",
        url: "/images/cindy-boulous.jpeg",
        width: 400,
        height: 400,
      },
      description: "Executive Assistant at Dynamic Growth Partners, supporting team operations and administration.",
      knowsAbout: ["Executive Support", "Operations Management", "Administrative Services", "Team Coordination"],
      sameAs: ["https://www.linkedin.com/in/cindyboulous/"],
    },
    {
      "@type": "Person",
      "@id": "https://dynamic.vc/team/#mike-haylon",
      name: "Mike Haylon",
      jobTitle: "Operating Partner",
      worksFor: { "@id": "https://dynamic.vc/team/#organization" },
      image: {
        "@type": "ImageObject",
        url: "/images/mike-haylon.png",
        width: 400,
        height: 400,
      },
      description:
        "Operating Partner at Dynamic Growth Partners, specializing in go-to-market strategy and business development.",
      knowsAbout: ["Go-to-Market Strategy", "Business Development", "Sales Operations", "Technical Founders"],
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Hero Section (v110 style) */}
          <header className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 lg:mb-6">
              Dynamic Growth Partners
            </h1>
            <div className="max-w-[800px] mx-auto mt-4 lg:mt-6 space-y-3">
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 tracking-wide">
                Dynamic Growth Partners is focused on Founder-led company building and modern organizational design. We
                work exclusively with technical Founders ranging from pre-seed through pre-IPO to help them grow faster,
                execute better, and raise capital more effectively.
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-400 tracking-wide">
                Our approach is grounded in hands-on execution, and shaped by working alongside the best GTM and Product
                leaders in the world. Whether you're building from zero or scaling toward repeatability, we help
                translate product excellence into commercial outcomes. To date, over 50% of our clients have raised Tier
                1 venture rounds since partnering with Dynamic.
              </p>
            </div>
          </header>

          {/* Team Section - Adapted for 5 members */}
          <section className="mb-8" aria-labelledby="team">
            <div className="w-full h-px bg-gray-900 mb-6" />
            <h2 id="team" className="sr-only">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 max-w-6xl mx-auto">
              {/* Dakota McKenzie */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-36 lg:h-36 relative mb-3 team-photo-container">
                  <Image
                    src="/images/dakota.jpeg"
                    alt="Dakota McKenzie - CEO of Dynamic Growth Partners"
                    fill
                    priority
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 144px"
                  />
                </div>
                <Link
                  href="http://linkedin.com/in/dakotajmckenzie"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide whitespace-nowrap"
                >
                  <h3>Dakota McKenzie</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-400">CEO</p>
              </div>

              {/* Trey Johnson */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-36 lg:h-36 relative mb-3 team-photo-container">
                  <Image
                    src="/images/trey.jpeg"
                    alt="Trey Johnson - Operating Partner at Dynamic Growth Partners"
                    fill
                    priority
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 144px"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/trey-j-07156924/"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide whitespace-nowrap"
                >
                  <h3>Trey Johnson</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-400">Operating Partner</p>
              </div>

              {/* Mike Haylon */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-36 lg:h-36 relative mb-3 team-photo-container">
                  <Image
                    src="/images/mike-haylon.png"
                    alt="Mike Haylon - Operating Partner at Dynamic Growth Partners"
                    fill
                    loading="eager"
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 144px"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/mikehaylon/"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide whitespace-nowrap"
                >
                  <h3>Mike Haylon</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-400">Operating Partner</p>
              </div>

              {/* Ben Cappellacci */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-36 lg:h-36 relative mb-3 team-photo-container">
                  <Image
                    src="/images/ben-cappellacci.jpeg"
                    alt="Ben Cappellacci - FDE Advisor at Dynamic Growth Partners"
                    fill
                    loading="lazy"
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 144px"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/bencappellacci/"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide whitespace-nowrap"
                >
                  <h3>Ben Cappellacci</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-400">FDE Advisor</p>
              </div>

              {/* Cindy Boulous */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-36 lg:h-36 relative mb-3 team-photo-container">
                  <Image
                    src="/images/cindy-boulous.jpeg"
                    alt="Cindy Boulous - Executive Assistant at Dynamic Growth Partners"
                    fill
                    loading="lazy"
                    className="object-cover team-photo"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 144px"
                  />
                </div>
                <Link
                  href="https://www.linkedin.com/in/cindyboulous/"
                  className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide whitespace-nowrap"
                >
                  <h3>Cindy Boulous</h3>
                </Link>
                <p className="text-xs sm:text-sm text-gray-400">Executive Assistant</p>
              </div>
            </div>
          </section>

          {/* Experience Section (v110 style) */}
          <section className="mb-8" aria-labelledby="experience">
            <div className="w-full h-px bg-gray-900 mb-6" />
            <div className="max-w-4xl mx-auto">
              <h2
                id="experience"
                className="text-xl sm:text-2xl font-medium text-center mb-6"
                style={{ color: "#ABBDBD" }}
              >
                Our Partners
              </h2>
              <Suspense
                fallback={
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 items-center justify-items-center">
                    {Array(25)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-20 sm:w-24 md:w-28 h-12 sm:h-16 flex items-center justify-center logo-container animate-pulse bg-gray-800 rounded-md"
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
          <section className="text-center py-4" aria-labelledby="contact">
            <div className="w-full h-px bg-gray-900 mb-6" />
            <div className="max-w-[800px] mx-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-black bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300 min-w-[220px] mb-4"
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
