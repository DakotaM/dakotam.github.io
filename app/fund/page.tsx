import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Fund() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-16 lg:mb-20">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-8 lg:mb-12">
              Dynamic Fund
            </h1>
            <div
              className="absolute -bottom-1 left-0 right-0 h-0.5 opacity-80"
              style={{ backgroundColor: "#ABBDBD" }}
            />
          </div>

          <div className="max-w-[700px] mx-auto space-y-4 lg:space-y-6 mt-8 lg:mt-12">
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-gray-100 tracking-wide">
              Founding teams work with Dynamic to accelerate company-building from pre-seed onward.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-200 tracking-wide">
              We prioritize long-term partnerships and obsess over your business.
            </p>
          </div>
        </section>

        {/* Fund Investments Section */}
        <section className="mb-16 lg:mb-20">
          {/* Subtle divider */}
          <div className="w-16 h-px bg-gray-800 mx-auto mb-8 lg:mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="group flex items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png"
                  alt="Infisical"
                  width={100}
                  height={50}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z7q6qYrQwigaIDJ1qd8qYZbFzIeLjl.png"
                  alt="Flightcrew"
                  width={100}
                  height={50}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=50&width=100&query=Judgment Labs logo"
                  alt="Judgment Labs"
                  width={100}
                  height={50}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-16 sm:h-20 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=50&width=100&query=Gist Security logo"
                  alt="Gist Security"
                  width={100}
                  height={50}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Combined About Dakota & Personal Equity Section */}
        <section className="mb-12 lg:mb-16">
          {/* Subtle top border for visual anchor */}
          <div className="w-full h-px bg-gray-900 mb-12 lg:mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column - About Dakota (40%) */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Dakota's Photo */}
              <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mb-4 lg:mb-6 rounded-full overflow-hidden ring-1 ring-gray-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                  alt="Dakota McKenzie"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Name and Title */}
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-1 tracking-wide">Dakota McKenzie</h3>
              <p className="text-base sm:text-lg tracking-wide mb-6 lg:mb-8" style={{ color: "#ABBDBD" }}>
                General Partner, Dynamic
              </p>

              {/* Past Experience Logos - Horizontal Row */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5eHEnzgCHQldzuCGOOmfQPYHYeArEM.png"
                    alt="Databricks"
                    width={60}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png"
                    alt="Segment"
                    width={60}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/placeholder.svg?height=24&width=60&query=Unusual Ventures logo"
                    alt="Unusual Ventures"
                    width={60}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/placeholder.svg?height=24&width=60&query=Sumo Logic logo"
                    alt="Sumo Logic"
                    width={60}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/placeholder.svg?height=24&width=60&query=Demandware logo"
                    alt="Demandware"
                    width={60}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Personal Equity (60%) */}
            <div className="lg:col-span-3">
              {/* Personal Equity Heading */}
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-6 lg:mb-8 text-center lg:text-left"
                style={{ color: "#ABBDBD" }}
              >
                Personal Equity
              </h2>

              {/* Personal Equity Logo Grid - Responsive columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
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
                  { src: "/placeholder.svg?height=32&width=64&query=Dock logo", alt: "Dock" },
                  { src: "/placeholder.svg?height=32&width=64&query=Malachyte logo", alt: "Malachyte" },
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
                  { src: "/placeholder.svg?height=32&width=64&query=Heyday logo", alt: "Heyday.xyz" },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9xDL7IAgUhXm1YQteFuCI6nCUIWbV.png",
                    alt: "Dopt",
                  },
                  { src: "/placeholder.svg?height=32&width=64&query=Airplane logo", alt: "Airplane" },
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-center h-12 sm:h-14 lg:h-16 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={64}
                        height={32}
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center py-8">
          {/* Subtle top border for visual anchor */}
          <div className="w-full h-px bg-gray-900 mb-8" />

          <div className="max-w-[600px] mx-auto">
            <p className="text-base sm:text-lg text-gray-400 mb-8 tracking-wide">
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
