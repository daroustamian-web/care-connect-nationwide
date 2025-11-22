'use client'

import { CityData } from '@/lib/cityData'
import { Phone, Mail, Download, CheckCircle, MapPin, DollarSign, TrendingUp, Users, Sun, Heart, Shield, Star, Clock, Award, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface LeadFormProps {
  cityData: CityData
  variant: 'hero' | 'inline' | 'sidebar'
  title?: string
}

function LeadForm({ cityData, variant, title }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: 'immediate',
    careLevel: 'assisted-living'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Send to webhook/email service
    console.log('Lead submitted:', { ...formData, city: cityData.city, state: cityData.state })

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-300 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-700 mb-4">
          We'll contact you within 2 hours with personalized recommendations for {cityData.city}.
        </p>
        <p className="text-sm text-gray-600">
          Or call us now at <a href="tel:8005552273" className="text-primary font-bold">(800) 555-CARE</a>
        </p>
      </div>
    )
  }

  const formClasses = variant === 'hero'
    ? 'bg-cream rounded-lg shadow-md p-8 border border-gray-200'
    : variant === 'sidebar'
    ? 'bg-cream border border-gray-200 rounded-lg p-6 sticky top-24'
    : 'bg-cream rounded-lg shadow-sm p-6 border border-gray-200'

  return (
    <div className={formClasses}>
      <div className="text-center mb-6">
        {variant === 'sidebar' && (
          <div className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
            FREE CONSULTATION
          </div>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {title || `Find Assisted Living in ${cityData.city}`}
        </h3>
        <p className="text-gray-600">
          Get personalized recommendations in under 2 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            When do you need care?
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="immediate">Immediately</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="planning">Just researching</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Level of care needed
          </label>
          <select
            value={formData.careLevel}
            onChange={(e) => setFormData({...formData, careLevel: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="independent">Independent Living</option>
            <option value="assisted-living">Assisted Living</option>
            <option value="memory-care">Memory Care</option>
            <option value="nursing">Skilled Nursing</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-full transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
        </button>

        <p className="text-xs text-center text-gray-500">
          ✓ No cost, no obligation • ✓ Response within 2 hours • ✓ 150K+ families helped
        </p>
      </form>
    </div>
  )
}

interface PhoenixCityHeroProps {
  cityData: CityData
}

export default function PhoenixCityHero({ cityData }: PhoenixCityHeroProps) {
  return (
    <>
      {/* Hero Section with Lead Form */}
      <section className="relative bg-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                #1 Resource for Senior Living in Arizona
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Assisted Living in Phoenix, Arizona
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Compare {cityData.facilityCount}+ communities, prices, and reviews. Free expert guidance for Phoenix families.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">{cityData.facilityCount}</div>
                  <div className="text-sm text-gray-600">Facilities</div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">${(cityData.avgCostLow/1000).toFixed(1)}k</div>
                  <div className="text-sm text-gray-600">Avg Cost/Mo</div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary mb-1">330+</div>
                  <div className="text-sm text-gray-600">Sunny Days</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center text-gray-700 text-sm">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  <span>BBB A+ Rated</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  <span>Verified Reviews</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  <span>150K+ Families</span>
                </div>
              </div>
            </div>

            {/* Right: Lead Form */}
            <div>
              <LeadForm cityData={cityData} variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">4.8/5.0</div>
              <div className="text-sm text-gray-600">Google Rating</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100% Free</div>
              <div className="text-sm text-gray-600">No Hidden Fees</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-gray-900">&lt;2 Hours</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
