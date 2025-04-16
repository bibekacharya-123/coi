import HeroSection from "@/components/home/hero-section"
import VideoSection from "@/components/home/video-section"
import ServicesSection from "@/components/home/services-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import PartnersSection from "@/components/home/partners-section"
import StatsSection from "@/components/home/stats-section"
import NewsSection from "@/components/home/news-section"
import CTASection from "@/components/home/cta-section"
import NewsletterSection from "@/components/home/newsletter-section"
import JoinCommunitySection from "@/components/home/join-community-section"
import ServicesShowcaseSection from "@/components/home/services-showcase-section"
import GetInvolvedSection from "@/components/home/get-involved-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ServicesShowcaseSection />
      <StatsSection />
      <GetInvolvedSection />
      <TestimonialsSection />
      <NewsSection />
      <JoinCommunitySection />
      <PartnersSection />
      <NewsletterSection />
      <CTASection />
    </>
  )
}
