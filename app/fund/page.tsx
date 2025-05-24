import Link from "next/link"
import { nunitoSans } from "../layout"

export default function Fund() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl text-center px-4">
        <h1 className={`${nunitoSans.className} text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12`}>
          Dynamic Fund
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          Investing in early stage technical Founders. Founders seeking investment or prospective LPs can email us{" "}
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
    </main>
  )
}
