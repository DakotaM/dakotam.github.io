"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-header border-b border-white/8" : "bg-transparent",
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          <Link href="/" className="text-lg font-bold">
            DYNAMIC
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/team" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Growth Partners
            </Link>
            <Link href="/fund" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Fund
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
