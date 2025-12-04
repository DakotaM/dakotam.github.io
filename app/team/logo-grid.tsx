"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// Define the logo data structure
interface Logo {
  src: string
  alt: string
  width: number
  height: number
}

export default function LogoGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set visible after component mounts to enable lazy loading
    setIsVisible(true)
  }, [])

  // All logos data with proper dimensions
  const logos: Logo[] = [
    {
      src: "/images/image.png",
      alt: "Databricks logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Segment logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Mintlify logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Clay logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Infisical logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Datameer logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/screenshot-202025-04-01-20at-209.png",
      alt: "WorkOS logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Plain logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Thatch logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Granola logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/framer-logo.png",
      alt: "Framer logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Flightcrew logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Radial logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Nango logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "Metaview logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/image.png",
      alt: "The Mednet logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/crew-only-logo.png",
      alt: "CrewAI logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/gradient-labs-logo.png",
      alt: "Gradient Labs logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/screenshot-202025-04-01-20at-208.png",
      alt: "OpsLevel logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/screenshot-202025-04-01-20at-208.png",
      alt: "Metronome logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/screenshot-202025-04-01-20at-209.png",
      alt: "Restate logo",
      width: 100,
      height: 50,
    },
    // New logos
    {
      src: "/images/koddi-logo.png",
      alt: "Koddi - Digital advertising platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/ambrook-logo.png",
      alt: "Ambrook - Financial platform for farms",
      width: 100,
      height: 50,
    },
    {
      src: "/images/paradime-updated-logo.png",
      alt: "Paradime - Analytics engineering platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/steep-logo.png",
      alt: "Steep - Technology platform",
      width: 100,
      height: 50,
    },
  ]

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
      {logos.map((logo, index) => (
        <div key={index} className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 flex items-center justify-center logo-container">
          {isVisible && (
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain logo-image"
              style={{ borderRadius: "6px" }}
              loading={index < 10 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
            />
          )}
        </div>
      ))}
    </div>
  )
}
