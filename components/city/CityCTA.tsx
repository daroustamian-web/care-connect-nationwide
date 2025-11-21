'use client'

import { CityData } from '@/lib/cityData'
import { Phone, Mail, CheckCircle } from 'lucide-react'

interface CityCTAProps {
  cityData: CityData
}

export default function CityCTA({ cityData }: CityCTAProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find Your Perfect Assisted Living Community in {cityData.city} Today
        </h2>
        <p className="text-xl text-primary-light mb-8">
          We've helped 150,000+ families find the right fit. Let us help you too — completely free.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Free Personalized Recommendations</h3>
            <p className="text-primary-light text-sm">
              Based on your loved one's needs, budget, and preferred location in {cityData.city}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Expert Guidance Every Step</h3>
            <p className="text-primary-light text-sm">
              From touring facilities to understanding costs and payment options
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Compare Top Facilities</h3>
            <p className="text-primary-light text-sm">
              Side-by-side comparisons of {cityData.facilityCount}+ communities in {cityData.city}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">No Hidden Fees or Obligations</h3>
            <p className="text-primary-light text-sm">
              Our service is 100% free — we're here to help, not sell
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-300 shadow-lg w-full md:w-auto">
            Get Started — It's Free
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6">
            <a
              href="tel:8005552273"
              className="flex items-center text-white hover:text-primary-light transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">Call 24/7: (800) 555-CARE</span>
            </a>
            <span className="hidden md:inline text-primary-light">or</span>
            <a
              href="mailto:info@careconnectinc.com"
              className="flex items-center text-white hover:text-primary-light transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-semibold">Email Us</span>
            </a>
          </div>

          <p className="text-sm text-primary-light mt-6">
            Average response time: 8 minutes  |  Available 24/7  |  Serving all of {cityData.county}
          </p>
        </div>
      </div>
    </section>
  )
}
