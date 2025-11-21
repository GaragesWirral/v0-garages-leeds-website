export function MapSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Find Garages Near You in Leeds
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We have garage locations throughout Leeds and West Yorkshire. Find a lock-up garage to rent near you.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.4246757678826!2d-1.6194430536227902!3d53.807511797642015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795f321f88b3f9%3A0x6729978e353423d7!2s80%20Aston%20Terrace%2C%20Leeds%20LS13%202EB%2C%20UK!5e1!3m2!1sen!2ses!4v1763752791743!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Garages Leeds Location Map 80 Aston Terrace"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Can't find a garage to rent near you? Contact us to discuss available locations.
            </p>
            <a href="tel:07519667044" className="inline-flex items-center text-primary font-semibold hover:underline">
              Call us on 07519 667044
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
