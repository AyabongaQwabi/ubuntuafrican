import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Commodities from "@/components/Commodities"
import Services from "@/components/Services"
import HowWeWork from "@/components/HowWeWork"
import WhyChooseUs from "@/components/WhyChooseUs"
import Gallery from "@/components/Gallery"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Commodities />
      <Services />
      <HowWeWork />
      <WhyChooseUs />
      <Gallery />
      <CallToAction />
      <Footer />
    </main>
  )
}
