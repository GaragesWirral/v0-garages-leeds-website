import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickEnquiry } from "@/components/quick-enquiry"
import { WhyRent } from "@/components/why-rent"
import { Services } from "@/components/services"
import { MapSection } from "@/components/map-section"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyActions } from "@/components/sticky-actions"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickEnquiry />
        <WhyRent />
        <Services />
        <MapSection />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyActions />
    </div>
  )
}
