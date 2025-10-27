import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { VideoSection } from "@/components/video-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsCarousel />
      <VideoSection />
      <ContactSection />
      <WhatsAppFloatButton />
    </main>
  )
}
