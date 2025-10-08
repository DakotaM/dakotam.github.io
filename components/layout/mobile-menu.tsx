"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-header border-b border-white/8 py-6 px-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/team"
              className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Growth Partners
            </Link>
            <Link
              href="/fund"
              className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Fund
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
