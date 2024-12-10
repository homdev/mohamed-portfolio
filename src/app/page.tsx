import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Container principal */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <Hero />
        <AboutSection />
      </div>
    </main>
  )
}