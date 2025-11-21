import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import AgitateSection from '@/components/AgitateSection'
import SolutionSection from '@/components/SolutionSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BookingSection from '@/components/BookingSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <AgitateSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
