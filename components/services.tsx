import { Building2, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Building2,
    title: "Lock-Up Garages for Rent",
    description:
      "Secure lock-up garages to rent in Leeds. Perfect for vehicle storage, motorcycles, or extra storage space. Available across multiple locations in West Yorkshire.",
    features: ["24/7 Access", "Secure Locks", "Various Sizes", "Affordable Rates"],
  },
  {
    icon: Zap,
    title: "Large Units with Electricity",
    description:
      "Need power? We offer larger garage units with electricity supply, ideal for workshops, hobby spaces, or businesses requiring secure storage with power.",
    features: ["Electric Supply", "Spacious Units", "Workshop Ready", "Business Friendly"],
  },
  {
    icon: DollarSign,
    title: "We Buy Garages",
    description:
      "Do you own a garage in Leeds that you want to sell? We purchase garages across the area. Get in touch for a no-obligation valuation.",
    features: ["Quick Sale", "Fair Prices", "No Fees", "Hassle-Free"],
  },
]

export function Services() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From standard garages to rent in Leeds to large units with electricity, we have a solution for every storage
            need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/50 to-white p-8 rounded-2xl border border-border hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="#enquiry">Learn More</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
