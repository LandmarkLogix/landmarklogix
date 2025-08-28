import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { MarketsSection } from "@/components/sections/markets-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"

export default function LandmarkLogixWebsite() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MarketsSection />
      <WhyChooseSection />
      <Footer />
    </main>
  )
}
