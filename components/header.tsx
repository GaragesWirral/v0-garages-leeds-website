"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              GL
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-foreground">Garages Leeds</div>
              <div className="text-xs text-muted-foreground">Lock-Up Garage Rentals</div>
            </div>
          </Link>

          {/* Desktop Phone Number */}
          <div className="hidden lg:flex items-center gap-2 text-primary font-semibold text-lg">
            <Phone className="w-5 h-5" />
            <a href="tel:07519667044">07519 667044</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="lg" asChild>
              <a href="#enquiry">Get a Quote</a>
            </Button>
            <Button size="lg" asChild>
              <a href="tel:07519667044">Call Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <a href="tel:07519667044" className="flex items-center gap-2 text-primary font-semibold text-lg py-2">
                <Phone className="w-5 h-5" />
                07519 667044
              </a>
              <Button size="lg" className="w-full" asChild>
                <a href="#enquiry">Get a Quote</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
                <a href="tel:07519667044">Call Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
