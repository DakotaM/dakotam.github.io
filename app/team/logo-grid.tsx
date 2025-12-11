import Image from "next/image"

// Define the logo data structure
interface Logo {
  src: string
  alt: string
  width: number
  height: number
}

export default function LogoGrid() {
  const logos: Logo[] = [
    // Row 1
    {
      src: "/images/databricks-new-logo.png",
      alt: "Databricks - Data and AI platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/segment-logo.png",
      alt: "Twilio Segment - Customer data platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/mintlify-logo.png",
      alt: "Mintlify - Documentation platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/clay-logo.png",
      alt: "Clay - Data enrichment platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/infisical-logo.png",
      alt: "Infisical - Secret management platform",
      width: 100,
      height: 50,
    },
    // Row 2
    {
      src: "/images/datameer-logo.png",
      alt: "Datameer - Data transformation platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/workos-logo.png",
      alt: "WorkOS - Enterprise authentication platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/plain-new-logo.png",
      alt: "Plain - Customer support platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/thatch-logo.png",
      alt: "Thatch - Health benefits platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/granola-logo.png",
      alt: "Granola - AI meeting notes",
      width: 100,
      height: 50,
    },
    // Row 3
    {
      src: "/images/framer-logo.png",
      alt: "Framer - Website builder platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/flightcrew-new-logo.png",
      alt: "Flightcrew - Aviation technology platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/radial-logo.png",
      alt: "Radial - Technology platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/nango-logo.png",
      alt: "Nango - Integration platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/metaview-new-logo.png",
      alt: "Metaview - AI interview notes",
      width: 100,
      height: 50,
    },
    // Row 4
    {
      src: "/images/themednet-logo.png",
      alt: "theMednet - Healthcare platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/crew-only-logo.png",
      alt: "CrewAI - AI agent framework",
      width: 85,
      height: 42,
    },
    {
      src: "/images/gradient-labs-logo.png",
      alt: "Gradient Labs - AI technology platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/opslevel-logo.png",
      alt: "OpsLevel - Developer portal platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/metronome-logo.png",
      alt: "Metronome - Usage-based billing platform",
      width: 100,
      height: 50,
    },
    // Row 5
    {
      src: "/images/restate-logo.png",
      alt: "Restate - Durable execution platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/koddi-logo.png",
      alt: "Koddi - Digital advertising platform",
      width: 85,
      height: 42,
    },
    {
      src: "/images/paradime-logo.png",
      alt: "Paradime - Analytics engineering platform",
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
      src: "/images/steep-logo.png",
      alt: "Steep - Technology platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/north-pole-security-logo.png",
      alt: "North Pole Security - Security platform",
      width: 100,
      height: 50,
    },
    // Cleric logo added here
    {
      src: "/images/cleric-logo.png",
      alt: "Cleric - AI SRE teammate",
      width: 100,
      height: 50,
    },
    {
      src: "/images/malachyte-logo.png",
      alt: "Malachyte - Technology platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/safety-logo.png",
      alt: "Safety - Security platform",
      width: 100,
      height: 50,
    },
    {
      src: "/images/ours-privacy-logo.png",
      alt: "Ours Privacy - Privacy platform",
      width: 100,
      height: 50,
    },
  ]

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
      {logos.map((logo, index) => (
        <div key={index} className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 flex items-center justify-center logo-container">
          <Image
            src={logo.src || "/placeholder.svg"}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain logo-image mix-blend-lighten"
            loading={index < 10 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
          />
        </div>
      ))}
    </div>
  )
}
