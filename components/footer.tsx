import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary font-bold">
                GL
              </div>
              <span className="text-xl font-bold">Garages Leeds</span>
            </div>
            <p className="text-white/70 mb-4 leading-relaxed">
              Providing secure, affordable lock-up garages to rent across Leeds and West Yorkshire.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#enquiry" className="hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/70">
              <li>Garages to Rent Leeds</li>
              <li>Lock-Up Garage Rentals</li>
              <li>Units with Electricity</li>
              <li>We Buy Garages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Leeds, West Yorkshire, UK</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:07519667044" className="hover:text-white transition-colors">
                  07519 667044
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
             
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Garages Leeds. All rights reserved.</p>
          <p className="mt-2">
            Garages to rent Leeds | Lock up garage to rent Leeds | Garage to rent near me | Garages for rent Leeds
          </p>
        </div>
      </div>
    </footer>
  )
}
