import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import "../team-styles.css"
import { Suspense } from "react"
import LogoGrid from "./logo-grid"

const inter = Inter({ subsets: ["latin"] })

export default function Page() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 lg:mb-8">
              Dynamic Growth Partners
            </h1>
            <div
              className="absolute -bottom-1 left-0 right-0 h-0.5 opacity-80"
              style={{ backgroundColor: "#ABBDBD" }}
            />
          </div>

          <div className="max-w-[700px] mx-auto space-y-3 lg:space-y-4 mt-6 lg:mt-8">
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 tracking-wide">
              We support founding teams looking to accelerate their business and achieve fundraising milestones faster
              through the best practices and learnings from world-class companies.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-400 tracking-wide">
              We're the go-to partner for technical founders who want to turn product excellence into commercial
              outcomes — over 25% of our clients have gone on to raise Tier-1 venture rounds.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-10" />

          <div className="flex flex-col sm:flex-row justify-center sm:gap-8 md:gap-16 mb-12 space-y-8 sm:space-y-0 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] relative mb-4 team-photo-container">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                  alt="Dakota McKenzie"
                  fill
                  priority
                  className="object-cover team-photo"
                  style={{ borderRadius: "8px" }}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 250px, 300px"
                />
              </div>
              <Link
                href="http://linkedin.com/in/dakotajmckenzie"
                className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide"
              >
                Dakota McKenzie
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] relative mb-4 team-photo-container">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trey-EPgexA01iWSJgBZzf8NZQUyuSh0R4y.jpeg"
                  alt="Trey Johnson"
                  fill
                  priority
                  className="object-cover team-photo"
                  style={{ borderRadius: "8px" }}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 250px, 300px"
                />
              </div>
              <Link
                href="https://www.linkedin.com/in/trey-j-07156924/"
                className="text-lg sm:text-xl hover:underline text-white font-medium tracking-wide"
              >
                Trey Johnson
              </Link>
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

        {/* Areas of Focus Section */}
        <section className="mb-12">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-10" />

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-medium text-center mb-8" style={{ color: "#ABBDBD" }}>
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

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Hiring and Recruiting</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Conducting interviews and recruiting at all levels (SDR to VP of Sales)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Finding high potential revenue</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Identifying expansion or conversion paths with initial customers/users.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Pricing</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Make it easy to buy from.™️ (Self-Service {"->"} Strategic Enterprise $1M+). Optimizing and refining
                    pricing models through data and buyer feedback.
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
                  <p className="text-sm sm:text-base text-gray-200">Managing Account Executives on full-sales cycles</p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Pipeline Focus</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Exercises to test and building pipeline (outbound and leveraging inbound for faster wins).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Optimize Selling</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Providing coaching and support to founders on discovery, leveraging roadmap to drive deals, their
                    expertise to win markets and beat competitors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">ICP Development</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Developing Ideal Customer Profile (ICP), customer conversations, learning what, how, why to build
                    things that generate revenue (current and future state)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-medium mb-3 text-white">Implementing sales systems</h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    Ensuring the right solutions are in place for sales growth and enablement
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

        {/* Experience Section */}
        <section className="mb-12">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-10" />

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-medium text-center mb-8" style={{ color: "#ABBDBD" }}>
              Experience
            </h2>

            <p className="mb-8 text-sm sm:text-base text-gray-200 leading-relaxed">
              We have worked at a range of SaaS companies in the earlier stages of growth based on our drive to build
              and grow new functions. We are inspired by building alongside world-class founders and teams.
            </p>

            {/* Wrap LogoGrid in Suspense */}
            <Suspense
              fallback={
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
                  {Array(25)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 flex items-center justify-center logo-container animate-pulse"
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
        <section className="text-center py-6">
          {/* Subtle divider */}
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
  )
}
