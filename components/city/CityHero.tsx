'use client'

import { CityData } from '@/lib/cityData'
import { Phone, Mail, MapPin } from 'lucide-react'

interface CityHeroProps {
  cityData: CityData
}

export default function CityHero({ cityData }: CityHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Assisted Living in {cityData.city}, {cityData.stateAbbrev}
          </h1>
          <p className="text-xl md:text-2xl text-primary-light mb-8">
            Compare {cityData.facilityCount}+ Top-Rated Assisted Living Facilities
          </p>
          <p className="text-lg text-primary-light max-w-3xl mx-auto">
            Free consultation & personalized recommendations. Find the perfect community for your loved one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <a
            href="tel:8005552273"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-primary-light">Call Us 24/7</p>
                <p className="text-lg font-bold">(800) 555-CARE</p>
              </div>
            </div>
          </a>

          <a
            href="mailto:info@careconnectinc.com"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-primary-light">Email Us</p>
                <p className="text-lg font-bold">Get Info</p>
              </div>
            </div>
          </a>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-primary-light">Serving</p>
                <p className="text-lg font-bold">{cityData.county}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-300 shadow-lg">
            Find Facilities Near You
          </button>
          <p className="mt-4 text-sm text-primary-light">
            ✓ 150,000+ Families Helped  |  ✓ Verified Reviews  |  ✓ No Hidden Fees
          </p>
        </div>
      </div>
    </section>
  )
}
