"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// Define the logo data structure
interface Logo {
  src: string
  alt: string
}

export default function LogoGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set visible after component mounts to enable lazy loading
    setIsVisible(true)
  }, [])

  // All logos data (reverted to v110 state - Gradient removed)
  const logos: Logo[] = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5eHEnzgCHQldzuCGOOmfQPYHYeArEM.png",
      alt: "Databricks logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n2zQYDcuoaZHXmGrIONp78DO7Q6Pxw.png",
      alt: "Segment logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZtSLtlWsOeC5Rsjnmf7h9QIskgWCJM.png",
      alt: "Mintlify logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U95kAn6sHfQv98gCN2C0DyDHbkAB6R.png",
      alt: "Clay logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-99gXgXFOh3uEuyvywS9O1BjZ2UfamZ.png",
      alt: "Infisical logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UXlPNYG1rJzahJgSnHlkrTEIaZevYR.png",
      alt: "Datameer logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-01%20at%209.19.21%E2%80%AFAM-nfEipSD9Uxh1N8Y0gfcT4JjfDVgiaK.png",
      alt: "WorkOS logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C7h9gEvTnJdRJGYvR5wyIqfcnCAq7J.png",
      alt: "Plain logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QSmzCfZV6Ndw2a0rJthhZuJMKCIXgj.png",
      alt: "Thatch logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOinFDTAwLVJk73dK0oxhV1RKzE1cR.png",
      alt: "Granola logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zXC8K7Jq5We5pbkRW6LBafhIe2Jv8B.png",
      alt: "Zuplo logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XqYDodZTYxd7vD1XADRO3lzcnTG1f4.png",
      alt: "HumanSignal logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z7q6qYrQwigaIDJ1qd8qYZbFzIeLjl.png",
      alt: "Flightcrew logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ih2Ob03UwYBL5nz72nuF29hbmEmRP8.png",
      alt: "Radial logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOHeIJcBXUpUXmU4mkB64jtp3BRaOH.png",
      alt: "Nango logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yqnZLfK3KaHvOz62iPsP77t1qdLqZ2.png",
      alt: "Metaview logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RBAC5t3Z5WM10iwIzxkMadwEwuUvx5.png",
      alt: "The Mednet logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A55jqUZYS4ibLSfKQjLK8as4yddq28.png",
      alt: "Liveblocks logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FWXa3ihMSN7ovTI3sWa0zVptR3KeJ6.png",
      alt: "Ambrook logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9xDL7IAgUhXm1YQteFuCI6nCUIWbV.png",
      alt: "DOPT logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crew_only_logo-a8bPDxvc3alLTW2ZsgjcMUmf4Fj2RX.png",
      alt: "CrewAI logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pi%20labs-z7AxhHUrM9PBOX9mhk4zka3Piwu9KZ.svg",
      alt: "Pi Labs logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-01%20at%208.44.25%E2%80%AFAM-K7ISL5OYS39OZuueksHg8AdD6bWgU2.png",
      alt: "OpsLevel logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-01%20at%208.41.45%E2%80%AFAM-fSpmAr7213YMSYgRslhAQZs2lXj2OI.png",
      alt: "Metronome logo",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-01%20at%209.14.06%E2%80%AFAM-JATZW8oYUY55VEx0a6DRsZM9tpS33i.png",
      alt: "Restate logo",
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
              width={100}
              height={50}
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
