import { Button } from "@/components/ui/button"
import { Phone, Mail, Shield, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-secondary via-white to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Trusted Local Garage Rentals
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Garages to Rent in Leeds
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Garages Leeds offers secure, affordable lock-up garages to rent in Leeds. Whether you need extra storage
                space or a safe place to park your vehicle, we provide the perfect solution for residents across West
                Yorkshire.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Fully Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Flexible Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <a href="#enquiry">Apply to Rent a Garage</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-14 px-8 bg-transparent" asChild>
                <a href="tel:07519667044">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 07519 667044
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Trusted by 100+ customers across Leeds</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/secure-garage-lock-up-storage-leeds.jpg"
                alt="Lock-up garage to rent in Leeds"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold text-primary">£100+</p>
              <p className="text-sm text-muted-foreground">Starting from per month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
