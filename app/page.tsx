import HeroSection from "@/components/hero-section"
import WhatYouLearnSection from "@/components/what-you-learn-section"
import AuthorSection from "@/components/author-section"
import TestimonialsSection from "@/components/testimonials-section"
import SneakPeekSection from "@/components/sneak-peek-section"
import BonusSection from "@/components/bonus-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatYouLearnSection />
      <AuthorSection />
      <TestimonialsSection />
      <SneakPeekSection />
      <BonusSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
