import Image from "next/image"
import Link from "next/link"
import { nunitoSans } from "../layout"
import "../team-styles.css"
import { Suspense } from "react"
import LogoGrid from "./logo-grid"

// Simplified approach with proper Suspense boundaries
export default function Page() {
  return (
    <div className={`min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 ${nunitoSans.className}`}>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 border-b border-gray-700 pb-4">
          Dynamic Growth Partners
        </h1>

        <div className="flex flex-col sm:flex-row justify-center sm:gap-8 md:gap-16 mb-8 sm:mb-12 space-y-8 sm:space-y-0">
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
            <Link href="http://linkedin.com/in/dakotajmckenzie" className="text-lg sm:text-xl hover:underline">
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
            <Link href="https://www.linkedin.com/in/trey-j-07156924/" className="text-lg sm:text-xl hover:underline">
              Trey Johnson
            </Link>
          </div>
        </div>

        <p className="mb-6 text-sm sm:text-base md:text-lg">
          We support founding teams looking to accelerate their current sales efforts to the next level or build their
          first GTM motion from the ground up. Our experience includes working for firms led by Midas-list investors,
          operating at world-class GTM teams from pre-$1m in ARR to $1.5B ARR, and being in the seat with founders on
          their journey from $0-100M+ ARR prior to raising their next fundraising rounds from Tier-1 investors.
        </p>

        <p className="mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
          Our goal is to be the de-facto firm to complement the strengths of technical founders, and ramp them faster
          through expertise and repeat patterns we see on a day-to-day basis. We are{" "}
          <strong>not a playbook firm,</strong> but know how and when to deploy the right tools to ensure you're making
          the <em>right</em> strides towards product-market fit and building the best GTM team possible.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Areas of Focus</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Sales Process & Repeatability</h3>
              <p className="text-sm sm:text-base">
                Conducting comprehensive reviews of current opportunities and guiding through existing sales processes
                to find repeatability.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Open Source + PLG Optimization</h3>
              <p className="mb-4 text-sm sm:text-base">
                Uncover the key motivations and reasons why your top users leverage your open source project and what
                are they key levers to conversion.
              </p>
              <p className="text-sm sm:text-base">
                Understand the adoption path of top-of-funnel users leveraging your self-service product to acknowledge
                what levers are required to justify a purchase (or upgrades).
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">User / Buyer Journey</h3>
              <p className="text-sm sm:text-base">
                Ensuring a solid user/buyer journey to help navigate tougher "bottoms up" sales cycles.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Hiring and Recruiting</h3>
              <p className="text-sm sm:text-base">
                Conducting interviews and recruiting at all levels (SDR to VP of Sales)
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Finding high potential revenue</h3>
              <p className="text-sm sm:text-base">
                Identifying expansion or conversion paths with initial customers/users.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Pricing</h3>
              <p className="text-sm sm:text-base">
                Make it easy to buy from.™️ (Self-Service {"->"} Strategic Enterprise $1M+). Optimizing and refining
                pricing models through data and buyer feedback.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Sales Management</h3>
              <p className="mb-4 text-sm sm:text-base">Coaching and partnering with sales leadership</p>
              <p className="mb-4 text-sm sm:text-base">Conducting pipeline and deal reviews with AEs</p>
              <p className="text-sm sm:text-base">Managing Account Executives on full-sales cycles</p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Pipeline Focus</h3>
              <p className="text-sm sm:text-base">
                Exercises to test and building pipeline (outbound and leveraging inbound for faster wins).
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Optimize Selling</h3>
              <p className="text-sm sm:text-base">
                Providing coaching and support to founders on discovery, leveraging roadmap to drive deals, their
                expertise to win markets and beat competitors.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">ICP Development</h3>
              <p className="text-sm sm:text-base">
                Developing Ideal Customer Profile (ICP), customer conversations, learning what, how, why to build things
                that generate revenue (current and future state)
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Implementing sales systems</h3>
              <p className="text-sm sm:text-base">
                Ensuring the right solutions are in place for sales growth and enablement
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-300">Build the right product</h3>
              <p className="mb-4 text-sm sm:text-base">
                Collecting product feedback to identify current and future roadmap opportunities
              </p>
              <p className="text-sm sm:text-base">
                Look for ways to identify what your developer community needs to be successful through discovery
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-6 border-b border-gray-700 pb-2">Experience</h2>

        <p className="mb-8 text-sm sm:text-base md:text-lg">
          We have worked at a range of SaaS companies in the earlier stages of growth based on our drive to build and
          grow new functions. We are inspired by building alongside world-class founders and teams.
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

        <div className="mt-16 mb-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-base font-medium text-black bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300 min-w-[220px]"
          >
            Book an intro call
          </Link>
        </div>

        <footer className="text-center text-sm text-gray-600 pb-8">
          <p>© {new Date().getFullYear()} Dynamic Growth Partners</p>
        </footer>
      </main>
    </div>
  )
}
