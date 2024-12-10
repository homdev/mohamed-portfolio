import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutSection from "@/components/about-section"
import { VelocityScroll } from "@/components/ui/scroll-based-velocity"
import Portfolio from "@/components/portfolio-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Container principal */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Scroll Based Velocity */}
        <div className="py-6 md:py-2">
          <VelocityScroll 
            text="REACT - NEXT.JS - TYPESCRIPT - NODE.JS - REACT NATIVE - TAILWIND - " 
            default_velocity={3}
            className="font-archivo text-4xl md:text-5xl"
          />
        </div>

        <AboutSection />
        <Portfolio />
        <ProcessSection />
        <TestimonialsSection />
      </div>
    </main>
  )
}