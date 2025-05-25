import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Fund() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
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
              Dynamic invests in the best Technical Founders looking to accelerate growth from pre-seed onward.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-400 tracking-wide">
              We prioritize long-term partnerships and obsess over your business.
            </p>
          </div>
        </section>

        {/* Fund Investments Section */}
        <section className="mb-12">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-8" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="group flex items-center justify-center h-12 sm:h-14 lg:h-16 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png"
                  alt="Infisical"
                  width={90}
                  height={45}
                  className="h-12 sm:h-14 lg:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-12 sm:h-14 lg:h-16 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z7q6qYrQwigaIDJ1qd8qYZbFzIeLjl.png"
                  alt="Flightcrew"
                  width={90}
                  height={45}
                  className="h-12 sm:h-14 lg:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-12 sm:h-14 lg:h-16 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/judgment-labs-logo.png"
                  alt="Judgment Labs"
                  width={90}
                  height={45}
                  className="h-12 sm:h-14 lg:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-12 sm:h-14 lg:h-16 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/gist-logo.png"
                  alt="Gist"
                  width={90}
                  height={45}
                  className="h-12 sm:h-14 lg:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Dakota Section (Full Width) */}
        <section className="mb-12">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-10" />

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Dakota's Photo */}
            <div className="w-24 sm:w-28 h-24 sm:h-28 mb-4 rounded-full overflow-hidden ring-1 ring-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                alt="Dakota McKenzie"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Name and Title */}
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-1 tracking-wide">Dakota McKenzie</h3>
            <p className="text-base sm:text-lg tracking-wide mb-4" style={{ color: "#ABBDBD" }}>
              General Partner, Dynamic
            </p>

            {/* Past Experience Logos - Horizontal Row */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 mb-6">
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/databricks-new-logo.png"
                  alt="Databricks"
                  width={75}
                  height={30}
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png"
                  alt="Segment"
                  width={75}
                  height={30}
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/unusual-ventures-new-logo.png"
                  alt="Unusual Ventures"
                  width={75}
                  height={30}
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/sumo-logic-new-logo.png"
                  alt="Sumo Logic"
                  width={75}
                  height={30}
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/images/demandware-new-logo.png"
                  alt="Demandware"
                  width={75}
                  height={30}
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
            </div>

            {/* Full Width Bio */}
            <div className="mt-6 text-gray-200 space-y-4 leading-relaxed text-sm sm:text-base w-full max-w-4xl">
              <p className="text-left">
                Dakota supports founding teams at companies like{" "}
                <span className="text-white font-medium">Clay (Sequoia)</span>,{" "}
                <span className="text-white font-medium">Thatch (Index)</span>,{" "}
                <span className="text-white font-medium">WorkOS (Greenoaks)</span>, and{" "}
                <span className="text-white font-medium">Plain (Index)</span> to accelerate their current sales efforts
                to the next level or build their first GTM motion from the ground up.
              </p>
              <p className="text-left">
                His experience includes working for firms led by Midas-list investors{" "}
                <span className="text-white font-medium">(Unusual Ventures)</span>, operating for world-class GTM teams
                from pre-$1M to $150M+ ARR, and being in the seat with founders on their journey from $0-100M ARR prior
                to raising subsequent rounds from Tier-1 investors.
              </p>
              <p className="text-left">
                Before running his firm, Dakota was on early GTM teams of companies like{" "}
                <span className="text-white font-medium">Demandware (IPO/Acq)</span>,{" "}
                <span className="text-white font-medium">Sumo Logic (IPO)</span>,{" "}
                <span className="text-white font-medium">Databricks</span>, and{" "}
                <span className="text-white font-medium">Segment (Acq)</span>.
              </p>
            </div>

            {/* Personal Investments Section - Now part of the same section */}
            <div className="mt-12 w-full max-w-5xl">
              {/* Personal Investments Heading */}
              <h2 className="text-lg sm:text-xl font-medium text-center mb-6" style={{ color: "#ABBDBD" }}>
                Personal Investments
              </h2>

              {/* Personal Investments Logo Grid */}
              <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  {
                    src: "/images/thatch-logo.png",
                    alt: "Thatch",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U95kAn6sHfQv98gCN2C0DyDHbkAB6R.png",
                    alt: "Clay",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A55jqUZYS4ibLSfKQjLK8as4yddq28.png",
                    alt: "Liveblocks",
                  },
                  { src: "/images/dock-logo.png", alt: "Dock" },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOHeIJcBXUpUXmU4mkB64jtp3BRaOH.png",
                    alt: "Nango",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zXC8K7Jq5We5pbkRW6LBafhIe2Jv8B.png",
                    alt: "Zuplo",
                  },
                  {
                    src: "/safetycli-logo.svg",
                    alt: "SafetyCLI",
                  },
                  { src: "/images/heyday-logo.png", alt: "Heyday" },
                  { src: "/images/mtf-logo.png", alt: "MTF.vc" },
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
        <section className="text-center py-6">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-8" />

          <div className="max-w-[800px] mx-auto">
            <p className="text-base sm:text-lg text-gray-400 mb-6 tracking-wide">
              Founders seeking investment or prospective LPs can email us{" "}
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
  )
}
