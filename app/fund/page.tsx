import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Fund() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-24">
          {/* Dakota's Profile */}
          <div className="mb-16">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dakota-z20aTzzEzkNBMRmrT4VaqQN5xSjDNv.jpeg"
                alt="Dakota McKenzie"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#ABBDBD" }}>
              Dakota McKenzie
            </h1>
            <p className="text-lg text-gray-300 mb-12">General Partner, Dynamic</p>
          </div>

          {/* Past Company Logos */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 mb-16 flex-wrap">
            <div className="h-10 sm:h-12 flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5eHEnzgCHQldzuCGOOmfQPYHYeArEM.png"
                alt="Databricks"
                width={100}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-10 sm:h-12 flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png"
                alt="Segment"
                width={100}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-10 sm:h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=100&query=Unusual Ventures logo"
                alt="Unusual Ventures"
                width={100}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-10 sm:h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=100&query=Sumo Logic logo"
                alt="Sumo Logic"
                width={100}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="h-10 sm:h-12 flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=100&query=Demandware logo"
                alt="Demandware"
                width={100}
                height={40}
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Main Headlines */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 leading-tight text-white">
              Founding teams work with Dynamic to accelerate their company-building efforts from pre-seed onward.
            </h2>
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              We prioritize long-term partnerships and obsess over your business.
            </p>
          </div>
        </div>

        {/* Fund Investments Section */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: "#ABBDBD" }}>
            Fund Investments to Date
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center h-16 sm:h-20 p-4 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png"
                alt="Infisical"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20 p-4 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z7q6qYrQwigaIDJ1qd8qYZbFzIeLjl.png"
                alt="Flightcrew"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20 p-4 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=40&width=80&query=Judgment Labs logo"
                alt="Judgment Labs"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20 p-4 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=40&width=80&query=Gist Security logo"
                alt="Gist Security"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Personal Equity Section */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4" style={{ color: "#ABBDBD" }}>
            Personal Equity
          </h2>
          <p className="text-center text-gray-400 mb-12 text-sm sm:text-base">
            Select personal investments prior to or outside the Fund structure.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QSmzCfZV6Ndw2a0rJthhZuJMKCIXgj.png"
                alt="Thatch"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U95kAn6sHfQv98gCN2C0DyDHbkAB6R.png"
                alt="Clay"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Malachyte logo"
                alt="Malachyte"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zXC8K7Jq5We5pbkRW6LBafhIe2Jv8B.png"
                alt="Zuplo"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yqnZLfK3KaHvOz62iPsP77t1qdLqZ2.png"
                alt="Metaview"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Airplane logo"
                alt="Airplane"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Metaphor logo"
                alt="Metaphor"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A55jqUZYS4ibLSfKQjLK8as4yddq28.png"
                alt="Liveblocks"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Heyday logo"
                alt="Heyday"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOHeIJcBXUpUXmU4mkB64jtp3BRaOH.png"
                alt="Nango"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Dock logo"
                alt="Dock"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9xDL7IAgUhXm1YQteFuCI6nCUIWbV.png"
                alt="Dopt"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XqYDodZTYxd7vD1XADRO3lzcnTG1f4.png"
                alt="HumanSignal"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Decipher logo"
                alt="Decipher"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-14 sm:h-16 p-3 rounded-lg bg-gray-900/20 hover:bg-gray-800/40 transition-all duration-300 hover:scale-105">
              <Image
                src="/placeholder.svg?height=35&width=70&query=Modern Technical Fund logo"
                alt="Modern Technical Fund"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Founders seeking investment or prospective LPs can email us{" "}
            <Link
              href="mailto:dakota@dynamicgrowth.partners"
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
            >
              here
            </Link>
            .
          </p>
          <Link href="/" className="group text-base sm:text-lg inline-block">
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
