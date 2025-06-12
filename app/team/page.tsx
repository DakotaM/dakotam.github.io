import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import "../team-styles.css"
import { Suspense } from "react"
import LogoGrid from "./logo-grid"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Growth Partners | Company Building & Growth for Technical Founders",
  description:
    "Dynamic Growth Partners helps technical founders build and scale. We offer 'Company Building' (Pre-seed to Series A) for product-GTM fit & strategic hires, and 'Company Growth' (Series A+) for scaling GTM organizations. Led by Dakota McKenzie (CEO), Trey Johnson (Operating Partner), and Ben Cappellacci (Deployment Advisor). Success with CrewAI, Clay, WorkOS.",
  keywords: [
    "company building",
    "company growth",
    "GTM strategy",
    "sales acceleration",
    "technical founders",
    "startup consulting",
    "pre-seed funding support",
    "series A preparation",
    "scaling GTM teams",
    "founder-led sales",
    "Dakota McKenzie",
    "Trey Johnson",
    "Ben Cappellacci",
    "strategic hires",
    "product positioning",
    "pricing strategy",
    "deployment advisory",
  ],
  openGraph: {
    title: "Dynamic Growth Partners | Company Building & Growth for Technical Founders",
    description:
      "Empowering technical founders from pre-seed to Series A and beyond. We specialize in building foundational GTM motions and scaling high-performing organizations.",
    url: "https://dynamic.vc/team",
    siteName: "Dynamic",
    type: "website",
    images: [
      {
        url: "https://dynamic.vc/og-team-updated.jpg",
        width: 1200,
        height: 630,
        alt: "Dynamic Growth Partners - Building and Scaling Companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Growth Partners | Company Building & Growth for Technical Founders",
    description:
      "Partnering with technical founders to build strong GTM foundations and scale their organizations for market leadership.",
    images: ["https://dynamic.vc/og-team-updated.jpg"],
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
        "Dynamic Growth Partners specializes in 'Company Building' for pre-seed to Series A technical founders, focusing on product-GTM fit and strategic hires, and 'Company Growth' for Series A+ companies, focusing on scaling GTM organizations.",
      foundingDate: "2023",
      industry: ["Business Consulting", "Go-to-Market Strategy", "Sales Training", "Startup Advisory"],
      areaServed: "Global",
      employee: [
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Growth Partnership Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Company Building (Pre-seed → Series A)",
              description:
                "Focus on building the right product and GTM motion (from positioning to pricing), and support with key strategic hires to continue to scale beyond Founder-led GTM. 25%+ of our clients raised Tier-1 Series A's last year including CrewAI, Granola, Infisical, Plain, Gradient.",
              serviceType: "Startup Consulting",
              areaServed: "Global",
              audience: {
                "@type": "Audience",
                audienceType: "Pre-seed to Series A technical founders",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Company Growth (Series A+)",
              description:
                "Focus on scaling Founder-led company building to build, train, and scale your organization around learnings and cohesive GTM focus both pre- and post-sales. A modern human-centered company design approach. Clients include Clay, Metronome, WorkOS, Metaview.",
              serviceType: "Organizational Development Consulting",
              areaServed: "Global",
              audience: {
                "@type": "Audience",
                audienceType: "Series A+ companies",
              },
            },
          },
        ],
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
        "Strategic Hiring",
        "Pricing Strategy",
        "Organizational Scaling",
        "Sales Training",
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
        "CEO of Dynamic Growth Partners. Expert in GTM strategy, sales leadership, and helping technical founders build and scale their companies.",
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
        "Operating Partner at Dynamic Growth Partners, specializing in sales operations, business development, and scaling GTM functions.",
      knowsAbout: ["Sales Operations", "Business Development", "Go-to-Market Strategy", "Startup Growth"],
      sameAs: ["https://www.linkedin.com/in/trey-j-07156924/"],
    },
    {
      "@type": "Person",
      "@id": "https://dynamic.vc/team/#ben-cappellacci", // New team member
      name: "Ben Cappellacci",
      jobTitle: "Deployment Advisor",
      worksFor: { "@id": "https://dynamic.vc/team/#organization" },
      url: "https://www.linkedin.com/in/bencappellacci/",
      image: {
        "@type": "ImageObject",
        url: "/images/ben-cappellacci.jpeg",
        width: 400,
        height: 400,
      },
      description: "Deployment Advisor at Dynamic Growth Partners, focusing on technical implementation and strategy.",
      knowsAbout: ["Deployment Strategy", "Technical Advisory", "Cloud Infrastructure", "DevOps"],
      sameAs: ["https://www.linkedin.com/in/bencappellacci/"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is 'Company Building' at Dynamic Growth Partners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our 'Company Building' service is for Pre-seed to Series A companies. We focus on establishing the right product and GTM motion, including positioning, pricing, and supporting key strategic hires to scale beyond founder-led GTM. Over 25% of these clients raised Tier-1 Series A's last year, including companies like CrewAI, Granola, and Infisical.",
          },
        },
        {
          "@type": "Question",
          name: "What is 'Company Growth' at Dynamic Growth Partners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our 'Company Growth' service is for Series A+ companies. We focus on scaling founder-led company building by helping to build, train, and scale the organization with a cohesive GTM focus for pre- and post-sales, using a modern human-centered design approach. We've supported clients like Clay, Metronome, and WorkOS in this capacity.",
          },
        },
        {
          "@type": "Question",
          name: "What types of companies does Dynamic Growth Partners work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We partner with technical founders building developer tools, infrastructure software, and B2B SaaS platforms, from pre-seed stage through Series A and beyond.",
          },
        },
        {
          "@type": "Question",
          name: "How does Dynamic Growth Partners help with GTM strategy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide hands-on support in developing and executing GTM strategies, covering everything from market positioning and pricing models to sales process optimization and building high-performing sales teams.",
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
          {/* Hero Section */}
          <header className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
              Dynamic Growth Partners
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 tracking-wide max-w-3xl mx-auto">
              We partner with technical founders to build category-defining products and scale impactful go-to-market
              organizations, from pre-seed through Series A and beyond.
            </p>
          </header>

          {/* Team Section */}
          <section className="mb-12 lg:mb-16" aria-labelledby="team-heading">
            <h2 id="team-heading" className="sr-only">
              Our Team
            </h2>
            {/* Updated grid layout for 3 team members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 max-w-5xl mx-auto">
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
                <p className="text-sm text-gray-400">CEO</p> {/* Updated title */}
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
                <p className="text-sm text-gray-400">Operating Partner</p> {/* Updated title */}
              </div>

              {/* Ben Cappellacci - New Team Member */}
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
            <div className="max-w-3xl mx-auto text-gray-300 space-y-4 leading-relaxed text-sm sm:text-base text-center">
              <p>
                Led by Dakota McKenzie and Trey Johnson, with key advisory from Ben Cappellacci, Dynamic Growth Partners
                brings decades of combined experience from the front lines of iconic technology companies and venture
                capital. We've been in your shoes as operators and investors, understanding the unique challenges and
                opportunities technical founders face.
              </p>
            </div>
          </section>

          {/* Core Offerings Introduction */}
          <section className="mb-12 lg:mb-16 text-center" aria-labelledby="core-offerings-heading">
            <div className="w-full h-px bg-gray-800 my-10" />
            <h2
              id="core-offerings-heading"
              className="text-2xl sm:text-3xl font-medium mb-8"
              style={{ color: "#ABBDBD" }}
            >
              How We Partner With You
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
              We provide tailored support across two critical stages of your company's journey: establishing a strong
              foundation and scaling for market leadership.
            </p>
          </section>

          {/* Company Building Section */}
          <section className="mb-12 lg:mb-16" aria-labelledby="company-building-heading">
            <div className="max-w-4xl mx-auto">
              <h2
                id="company-building-heading"
                className="text-2xl sm:text-3xl font-medium text-center mb-4"
                style={{ color: "#FFFFFF" }}
              >
                Company Building <span className="text-gray-400">(Pre-Seed → Series A)</span>
              </h2>
              <p className="text-center text-gray-400 mb-8 text-lg">
                Laying the groundwork for sustainable growth and market traction.
              </p>
              <div className="bg-gray-900/30 p-6 sm:p-8 rounded-lg border border-gray-800 shadow-xl">
                <p className="text-gray-200 leading-relaxed space-y-4 text-base sm:text-lg">
                  At this crucial stage, our focus is on helping you build the right product and craft a compelling
                  go-to-market motion. This includes refining your positioning, developing effective pricing strategies,
                  and making pivotal early hires to transition beyond founder-led GTM.
                  <br />
                  <br />
                  We're proud that{" "}
                  <strong>over 25% of our clients in this phase raised Tier-1 Series A rounds last year</strong>,
                  including innovative companies like{" "}
                  <strong className="text-white">CrewAI, Granola, Infisical, Plain,</strong> and{" "}
                  <strong className="text-white">Gradient</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Company Growth Section */}
          <section className="mb-12 lg:mb-16" aria-labelledby="company-growth-heading">
            <div className="max-w-4xl mx-auto">
              <h2
                id="company-growth-heading"
                className="text-2xl sm:text-3xl font-medium text-center mb-4"
                style={{ color: "#FFFFFF" }}
              >
                Company Growth <span className="text-gray-400">(Series A+)</span>
              </h2>
              <p className="text-center text-gray-400 mb-8 text-lg">
                Scaling your organization and GTM engine for enduring success.
              </p>
              <div className="bg-gray-900/30 p-6 sm:p-8 rounded-lg border border-gray-800 shadow-xl">
                <p className="text-gray-200 leading-relaxed space-y-4 text-base sm:text-lg">
                  As you move past Series A, the challenge shifts to scaling. We partner with you to evolve your
                  founder-led successes into a robust, scalable organization. Our approach involves building, training,
                  and scaling your teams around proven learnings and a cohesive GTM strategy that covers both pre- and
                  post-sales.
                  <br />
                  <br />
                  We employ a modern, human-centered company design methodology, chosen over traditional training firms.
                  We've supported the growth of leading companies such as <strong className="text-white">Clay</strong>{" "}
                  (where we onboarded and trained their first 16 GTM Engineers, including the Head of GTM Engineering),{" "}
                  <strong className="text-white">Metronome, WorkOS,</strong> and{" "}
                  <strong className="text-white">Metaview</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-12 lg:mb-16" aria-labelledby="experience-heading">
            <div className="w-full h-px bg-gray-800 my-10" />
            <div className="max-w-4xl mx-auto">
              <h2
                id="experience-heading"
                className="text-2xl sm:text-3xl font-medium text-center mb-8"
                style={{ color: "#ABBDBD" }}
              >
                Our Collective Experience
              </h2>
              <p className="mb-8 text-sm sm:text-base text-gray-300 leading-relaxed text-center">
                We've worked with and invested in a diverse range of pioneering technology companies. The logos below
                represent a part of our journey and the ecosystem we're deeply embedded in.
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

          {/* Contact Section */}
          <section className="text-center py-6" aria-labelledby="contact-heading">
            <div className="w-full h-px bg-gray-800 my-10" />
            <div className="max-w-[800px] mx-auto">
              <h2 id="contact-heading" className="text-2xl sm:text-3xl font-medium mb-6" style={{ color: "#ABBDBD" }}>
                Let's Build Together
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Ready to accelerate your company's trajectory? We're here to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-black bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300 min-w-[220px] mb-6"
              >
                Book an intro call
              </Link>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
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
