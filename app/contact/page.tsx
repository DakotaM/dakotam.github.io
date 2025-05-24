import Link from "next/link"
import { nunitoSans } from "../layout"
import ContactFormWrapper from "./client-wrapper"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Dynamic
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className={`${nunitoSans.className} text-4xl sm:text-5xl font-bold tracking-tight`}>Talk with us</h1>
        </div>

        <ContactFormWrapper />
      </div>
    </div>
  )
}
