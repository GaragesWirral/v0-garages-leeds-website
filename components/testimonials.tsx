import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Headingley, Leeds",
    rating: 5,
    text: "Fantastic service! I needed a garage to rent near me urgently and Garages Leeds found me the perfect lock-up within days. Very secure and affordable.",
  },
  {
    name: "Michael Davies",
    location: "Morley, Leeds",
    rating: 5,
    text: "Been renting a garage in Leeds from them for 2 years now. Great location, secure, and excellent value for money. Highly recommend for anyone looking for garages for rent in Leeds.",
  },
  {
    name: "Emma Wilson",
    location: "Chapel Allerton, Leeds",
    rating: 5,
    text: "Professional and friendly service. The lock-up garage I'm renting is perfect for my classic car. Peace of mind knowing it's secure and weather-protected.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what people across Leeds say about renting garages with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
