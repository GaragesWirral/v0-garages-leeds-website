"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function QuickEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
   
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "171ae48c-ae7b-4b76-a2e1-0af60ee2cc3b",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })
     
      const result = await response.json()
      if (result.success) {
        alert("Thank you! We'll be in touch within 24 hours.")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        alert("Something went wrong. Please try again or call us directly.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again or call us directly.")
    }
  }

  return (
    <section id="enquiry" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get Your Free Quote Today</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Fill out the form below and we'll get back to you within 24 hours with available garages in Leeds.
            </p>
          </div>
          <div className="bg-secondary/50 p-8 lg:p-12 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What are you looking for?</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                Request a Quote
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted about garage rentals in Leeds.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
