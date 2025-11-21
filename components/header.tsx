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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold text-xl">GL</div>
          <div className="text-xl font-bold">Garages Leeds</div>
        </Link>
        <p className="text-sm text-muted-foreground hidden md:block">Lock-Up Garage Rentals</p>
        
        {/* Desktop Tertiary CTA: Call for Advice */}
        <a 
          href="tel:07519667044" 
          className="hidden md:flex items-center space-x-2 text-primary hover:text-primary/80" 
          title="Speak to our team: 07519 667044 – available 9am-6pm"
        >
          <Phone className="h-5 w-5" />
          <span>Call for Advice</span>
        </a>
        
        {/* Desktop Secondary CTA: See Available Units */}
        <Button 
          asChild 
          className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600" // Using orange for energy/urgency
        >
          <Link href="#services">See Available Units</Link>
        </Button>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <a 
            href="tel:07519667044" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 mb-4" 
            title="Speak to our team: 07519 667044 – available 9am-6pm"
          >
            <Phone className="h-5 w-5" />
            <span>Call for Advice</span>
          </a>
          <Button 
            asChild 
            className="w-full bg-orange-500 hover:bg-orange-600" // Orange for secondary
          >
            <Link href="#services">See Available Units</Link>
          </Button>
        </div>
      )}
    </header>
  )
}
