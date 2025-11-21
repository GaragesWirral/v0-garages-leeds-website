"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function StickyActions() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button size="lg" className="shadow-2xl h-14 px-6 text-base font-semibold" asChild>
        <a href="tel:07519667044">
          <Phone className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </Button>
      <Button size="lg" variant="secondary" className="shadow-2xl h-14 px-6 text-base font-semibold" asChild>
        <a href="#enquiry">
          <Mail className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Get Quote</span>
          <span className="sm:hidden">Quote</span>
        </a>
      </Button>
    </div>
  )
}
