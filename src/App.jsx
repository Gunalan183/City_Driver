import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickBooking from './components/QuickBooking'
import Vehicles from './components/Vehicles'
import Services from './components/Services'
import Destinations from './components/Destinations'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import MobileBottomBar from './components/MobileBottomBar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickBooking />
        <Vehicles />
        <Services />
        <Destinations />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </>
  )
}
