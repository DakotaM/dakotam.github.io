import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Fund() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className} antialiased`}>
      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-40">
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-16">
              Dynamic Fund
            </h1>
            <div
              className="absolute -bottom-2 left-0 right-0 h-0.5 opacity-80"
              style={{ backgroundColor: "#ABBDBD" }}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mt-16">
            <p className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-gray-100 tracking-wide">
              Founding teams work with Dynamic to accelerate company-building from pre-seed onward.
            </p>
            <p className="text-lg sm:text-xl font-medium text-gray-200 tracking-wide">
              We prioritize long-term partnerships and obsess over your business.
            </p>
          </div>
        </section>

        {/* Fund Investments Section */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4" style={{ color: "#ABBDBD" }}>
              Fund Investments to Date
            </h2>
            <div className="w-24 h-px bg-gray-800 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <div className="group flex items-center justify-center h-24 transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png"
                  alt="Infisical"
                  width={120}
                  height={60}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-24 transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z7q6qYrQwigaIDJ1qd8qYZbFzIeLjl.png"
                  alt="Flightcrew"
                  width={120}
                  height={60}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-24 transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=60&width=120&query=Judgment Labs logo"
                  alt="Judgment Labs"
                  width={120}
                  height={60}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="group flex items-center justify-center h-24 transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=60&width=120&query=Gist Security logo"
                  alt="Gist Security"
                  width={120}
                  height={60}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Dakota Section */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4" style={{ color: "#ABBDBD" }}>
              General Partner
            </h2>
            <div className="w-24 h-px bg-gray-800 mx-auto mt-8" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-1 ring-gray-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                  alt="Dakota McKenzie"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <h3 className="text-2xl font-medium text-white mb-2 tracking-wide">Dakota McKenzie</h3>
              <p className="text-lg text-gray-400 tracking-wide">General Partner, Dynamic</p>
            </div>

            {/* Past Experience Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5eHEnzgCHQldzuCGOOmfQPYHYeArEM.png"
                  alt="Databricks"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png"
                  alt="Segment"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/placeholder.svg?height=40&width=100&query=Unusual Ventures logo"
                  alt="Unusual Ventures"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/placeholder.svg?height=40&width=100&query=Sumo Logic logo"
                  alt="Sumo Logic"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/placeholder.svg?height=40&width=100&query=Demandware logo"
                  alt="Demandware"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Personal Equity Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4" style={{ color: "#ABBDBD" }}>
              Personal Equity
            </h2>
            <p className="text-sm text-gray-500 mt-6 tracking-wide">
              Select personal investments made prior to or outside the Fund structure.
            </p>
            <div className="w-24 h-px bg-gray-800 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
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
              { src: "/placeholder.svg?height=50&width=90&query=Dock logo", alt: "Dock" },
              { src: "/placeholder.svg?height=50&width=90&query=Malachyte logo", alt: "Malachyte" },
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
              { src: "/placeholder.svg?height=50&width=90&query=Heyday logo", alt: "Heyday.xyz" },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9xDL7IAgUhXm1YQteFuCI6nCUIWbV.png",
                alt: "Dopt",
              },
              { src: "/placeholder.svg?height=50&width=90&query=Airplane logo", alt: "Airplane" },
            ].map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center h-20 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={90}
                    height={50}
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 mb-12 tracking-wide">
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
              className="group inline-flex items-center text-lg text-gray-400 hover:text-white transition-colors duration-300"
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
