import "./globals.css"
import { Inter, Nunito_Sans } from "next/font/google"
import type React from "react"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react" // Add this import

const inter = Inter({ subsets: ["latin"] })
const nunitoSans = Nunito_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "DYNAMIC",
  description: "Dynamic Growth Partners and Fund",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div className="min-h-screen bg-black"></div>}>{children}</Suspense>
        <Script id="koala-tracking" strategy="afterInteractive">
          {`
            !function(t){var k="ko",i=(window.globalKoalaKey=window.globalKoalaKey||k);if(window[i])return;var ko=(window[i]=[]);["identify","track","removeListeners","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_2427fc378dbd5d883fdb804826144c72352c/sdk.js"),(document.body || document.head).appendChild(n)}();
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}

export { nunitoSans }
