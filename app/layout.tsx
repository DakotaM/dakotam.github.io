import "./globals.css"
import { Inter, Nunito_Sans } from "next/font/google"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Script from "next/script"

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
  generator: "v0.app",
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
        <Suspense fallback={<div className="min-h-screen bg-surface"></div>}>{children}</Suspense>
        <Analytics />
        <Script id="reb2b-tracking" strategy="afterInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = {loaded: true};
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
            }("4O7Z0HJ1DVNX");
          `}
        </Script>
      </body>
    </html>
  )
}

export { nunitoSans }
