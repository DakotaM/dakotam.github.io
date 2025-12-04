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

  const logos: Logo[] = [
    // Row 1
    {
      src: "/images/databricks-new-logo.png",
      alt: "Databricks logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/segment-logo.jpg",
      alt: "Twilio Segment logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/mintlify-logo.jpg",
      alt: "Mintlify logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/clay-logo.jpg",
      alt: "Clay logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/infisical-logo.jpg",
      alt: "Infisical logo",
      width: 100,
      height: 50,
    },
    // Row 2
    {
      src: "/images/datameer-logo.jpg",
      alt: "Datameer logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/workos-logo.jpg",
      alt: "WorkOS logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/plain-new-logo.png",
      alt: "Plain logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/thatch-logo.png",
      alt: "Thatch logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/granola-logo.jpg",
      alt: "Granola logo",
      width: 100,
      height: 50,
    },
    // Row 3
    {
      src: "/images/framer-logo.png",
      alt: "Framer logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/flightcrew-new-logo.png",
      alt: "Flightcrew logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/radial-logo.jpg",
      alt: "Radial logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/nango-logo.jpg",
      alt: "Nango logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/metaview-new-logo.png",
      alt: "Metaview logo",
      width: 100,
      height: 50,
    },
    // Row 4
    {
      src: "/images/themednet-logo.jpg",
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
      src: "/images/opslevel-logo.jpg",
      alt: "OpsLevel logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/metronome-logo.jpg",
      alt: "Metronome logo",
      width: 100,
      height: 50,
    },
    // Row 5
    {
      src: "/images/restate-logo.jpg",
      alt: "Restate logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/koddi-logo.png",
      alt: "Koddi logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/paradime-logo.png",
      alt: "Paradime logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/ambrook-logo.png",
      alt: "Ambrook logo",
      width: 100,
      height: 50,
    },
    {
      src: "/images/steep-logo.png",
      alt: "Steep logo",
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
