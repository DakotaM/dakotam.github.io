import Link from "next/link"
import { nunitoSans } from "./layout"

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-8">
      <h1
        className={`${nunitoSans.className} text-5xl sm:text-6xl md:text-8xl font-bold mb-12 md:mb-16 text-white text-center`}
      >
        DYNAMIC
      </h1>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 md:space-x-16">
        <Link href="/team" className="group text-xl sm:text-2xl text-white text-center">
          <span className="relative">
            Growth Partners
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </span>
        </Link>
        <Link href="/fund" className="group text-xl sm:text-2xl text-white text-center">
          <span className="relative">
            Fund
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </span>
        </Link>
      </div>
    </main>
  )
}
