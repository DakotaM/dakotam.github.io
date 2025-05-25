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
              Dynamic invests in the best Technical Founders and founding teams looking to accelerate growth from
              pre-seed onward.
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
                  src="/placeholder.svg?height=45&width=90&query=Judgment Labs logo"
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

        {/* Combined About Dakota & Personal Equity Section */}
        <section className="mb-12">
          {/* Subtle divider */}
          <div className="w-full h-px bg-gray-900 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Left Column - About Dakota */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
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
              <p className="text-base sm:text-lg tracking-wide mb-6" style={{ color: "#ABBDBD" }}>
                General Partner, Dynamic
              </p>

              {/* Past Experience Logos - Horizontal Row */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5eHEnzgCHQldzuCGOOmfQPYHYeArEM.png"
                    alt="Databricks"
                    width={50}
                    height={20}
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png"
                    alt="Segment"
                    width={50}
                    height={20}
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/placeholder.svg?height=20&width=50&query=Unusual Ventures logo"
                    alt="Unusual Ventures"
                    width={50}
                    height={20}
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/placeholder.svg?height=20&width=50&query=Sumo Logic logo"
                    alt="Sumo Logic"
                    width={50}
                    height={20}
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/placeholder.svg?height=20&width=50&query=Demandware logo"
                    alt="Demandware"
                    width={50}
                    height={20}
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Personal Equity */}
            <div>
              {/* Personal Equity Heading */}
              <h2
                className="text-xl sm:text-2xl font-medium tracking-tight mb-6 text-center md:text-left"
                style={{ color: "#ABBDBD" }}
              >
                Personal Equity
              </h2>

              {/* Personal Equity Logo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QSmzCfZV6Ndw2a0rJthhZuJMKCIXgj.png",
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
                  { src: "/placeholder.svg?height=28&width=56&query=Dock logo", alt: "Dock" },
                  { src: "/placeholder.svg?height=28&width=56&query=Malachyte logo", alt: "Malachyte" },
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
                  { src: "/placeholder.svg?height=28&width=56&query=Heyday logo", alt: "Heyday.xyz" },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9xDL7IAgUhXm1YQteFuCI6nCUIWbV.png",
                    alt: "Dopt",
                  },
                  { src: "/placeholder.svg?height=28&width=56&query=Airplane logo", alt: "Airplane" },
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

          <div className="max-w-[600px] mx-auto">
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
