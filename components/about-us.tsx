import { Users, Home, Award } from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Family-Run Business
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Trusted Garage Rentals Across Leeds
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                Garages Leeds is a trusted, family-run business specializing in lock-up garage rentals across Leeds and
                West Yorkshire. With years of experience in the local property market, we understand what our customers
                need.
              </p>
              <p className="leading-relaxed">
                Whether you're looking for a garage to rent near you for vehicle storage, extra space for belongings, or
                a secure unit for your business, we offer flexible, affordable solutions tailored to your requirements.
              </p>
              <p className="leading-relaxed">
                Our garages for rent in Leeds are located in convenient areas with excellent access, ensuring you can
                always reach your storage when you need it.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">100+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Garages Available</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/secure-garage-door-leeds.jpg"
                  alt="Secure garage in Leeds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/garage-lock-security.jpg"
                  alt="Garage security lock"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/garage-storage-unit.jpg"
                  alt="Garage storage unit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/leeds-garage-rental.jpg"
                  alt="Leeds garage for rent"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
