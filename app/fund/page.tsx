import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Fund() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Dakota's Profile */}
          <div className="mb-12">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                alt="Dakota McKenzie"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#ABBDBD" }}>
              Dakota McKenzie
            </h1>
            <p className="text-xl text-gray-300 mb-12">General Partner, Dynamic</p>
          </div>

          {/* Past Company Logos */}
          <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
            <div className="h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=48&width=120&query=Databricks logo"
                alt="Databricks"
                width={120}
                height={48}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=48&width=120&query=Segment logo"
                alt="Segment"
                width={120}
                height={48}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=48&width=120&query=Unusual Ventures logo"
                alt="Unusual Ventures"
                width={120}
                height={48}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=48&width=120&query=Sumo Logic logo"
                alt="Sumo Logic"
                width={120}
                height={48}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=48&width=120&query=Demandware logo"
                alt="Demandware"
                width={120}
                height={48}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Main Headlines */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight">
              Founding teams at companies work with Dynamic to accelerate their company-building efforts from pre-seed
              onward.
            </h2>
            <p className="text-xl sm:text-2xl font-bold mb-16">
              We prioritize long-term partnerships and obsess over your business.
            </p>
          </div>
        </div>

        {/* Fund Investments Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16" style={{ color: "#ABBDBD" }}>
            Fund Investments to Date
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center h-20 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=60&width=120&query=Infisical logo"
                alt="Infisical"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-20 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=60&width=120&query=Flightcrew logo"
                alt="Flightcrew"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-20 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=60&width=120&query=Judgment Labs logo"
                alt="Judgment Labs"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-20 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=60&width=120&query=Gist Security logo"
                alt="Gist Security"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Personal Equity Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: "#ABBDBD" }}>
            Personal Equity
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Select personal investments prior to or outside the Fund structure.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Thatch logo"
                alt="Thatch"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Clay logo"
                alt="Clay"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Malachyte logo"
                alt="Malachyte"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Zuplo logo"
                alt="Zuplo"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Metaview logo"
                alt="Metaview"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Airplane logo"
                alt="Airplane"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Metaphor logo"
                alt="Metaphor"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Liveblocks logo"
                alt="Liveblocks"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Heyday logo"
                alt="Heyday"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Nango logo"
                alt="Nango"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Dock logo"
                alt="Dock"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Dopt logo"
                alt="Dopt"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=HumanSignal logo"
                alt="HumanSignal"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Decipher logo"
                alt="Decipher"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=48&width=96&query=Modern Technical Fund logo"
                alt="Modern Technical Fund"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Founders seeking investment or prospective LPs can email us{" "}
            <Link
              href="mailto:dakota@dynamicgrowth.partners"
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
            >
              here
            </Link>
            .
          </p>
          <Link href="/" className="group text-lg inline-block">
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
