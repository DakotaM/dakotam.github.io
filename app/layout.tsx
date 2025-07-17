import "./globals.css"
import { Inter, Nunito_Sans } from "next/font/google"
import type React from "react"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })
const nunitoSans = Nunito_Sans({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
    template: "%s | Dynamic",
  },
  description:
    "Dynamic provides venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS. Led by Dakota McKenzie.",
  keywords: [
    "venture capital",
    "technical founders",
    "developer tools",
    "B2B SaaS",
    "startup funding",
    "growth partners",
    "GTM expertise",
    "Dynamic Fund",
    "Dakota McKenzie",
    "pre-seed funding",
    "seed funding",
    "series A",
    "infrastructure investing",
    "sales acceleration",
    "technical startup funding",
  ],
  authors: [{ name: "Dynamic", url: "https://dynamic.vc" }],
  creator: "Dynamic",
  publisher: "Dynamic",
  metadataBase: new URL("https://dynamic.vc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dynamic.vc",
    siteName: "Dynamic",
    title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
    description:
      "We provide venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dynamic - Venture Capital & Growth Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic - Venture Capital & Growth Partners for Technical Founders",
    description:
      "We provide venture capital funding and growth partnership for technical founders building developer tools, infrastructure, and B2B SaaS.",
    images: ["/og-image.png"],
    creator: "@dakotajmckenzie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dynamic.vc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
      </head>
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
