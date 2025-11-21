'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Search, MapPin, DollarSign, Star, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { getPopularCities, getAffordableCities } from '@/lib/cityData'

export default function Home() {
  const popularCities = getPopularCities(12)
  const affordableCities = getAffordableCities(6)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find the Perfect Assisted Living Community
          </h1>
          <p className="text-xl md:text-2xl text-primary-light mb-12 max-w-3xl mx-auto">
            Compare facilities, costs, and reviews across the United States. Free expert guidance for families.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-2xl p-4 flex items-center">
              <Search className="w-6 h-6 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Enter city or zip code..."
                className="flex-1 text-gray-900 text-lg outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors ml-2">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">5,600+</div>
              <div className="text-primary-light">Verified Facilities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">84+</div>
              <div className="text-primary-light">Cities Covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">150K+</div>
              <div className="text-primary-light">Families Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Cities for Assisted Living
            </h2>
            <p className="text-lg text-gray-600">
              Explore top-rated communities in major metros across America
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}`}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {city.city}, {city.stateAbbrev}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{city.facilityCount} Facilities</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      ${city.avgCostLow.toLocaleString()} - ${city.avgCostHigh.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 mr-2 flex-shrink-0 text-yellow-400 fill-current" />
                    <span className="text-sm">Top-rated communities</span>
                  </div>
                </div>
                <div className="flex items-center text-primary font-semibold">
                  <span>View Communities</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/assisted-living"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Cities
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Care Connect Works
            </h2>
            <p className="text-lg text-gray-600">
              Finding the perfect assisted living community is easy with our free service
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tell Us Your Needs</h3>
              <p className="text-gray-600">
                Share your location, budget, and care requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compare Options</h3>
              <p className="text-gray-600">
                Review facilities, pricing, amenities, and reviews
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Tours</h3>
              <p className="text-gray-600">
                Visit your top choices and meet the staff
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make Your Choice</h3>
              <p className="text-gray-600">
                Move in with confidence and peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Cities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Affordable Cities
            </h2>
            <p className="text-lg text-gray-600">
              Quality assisted living at budget-friendly prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {affordableCities.map((city) => (
              <Link
                key={city.slug}
                href={`/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}`}
                className="bg-green-50 border-2 border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {city.city}, {city.stateAbbrev}
                  </h3>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    AFFORDABLE
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 flex-shrink-0 text-green-600" />
                    <span className="text-sm font-semibold">
                      Starting at ${city.avgCostLow.toLocaleString()}/month
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{city.facilityCount} Communities</span>
                  </div>
                </div>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Explore Options</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Care Connect */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Care Connect?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free Service</h3>
              <p className="text-gray-600">
                No hidden fees, no obligations. Our service is completely free for families.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Facilities</h3>
              <p className="text-gray-600">
                All communities are licensed, inspected, and verified for quality care.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Our advisors help you navigate options and make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600">
                Access to 5,600+ facilities across 84 major cities in the United States.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Reviews</h3>
              <p className="text-gray-600">
                Read authentic reviews from families who've toured and lived in these communities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Get personalized recommendations within 24 hours of your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find the Perfect Community?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Start your search today. Free consultation, no obligations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-300 shadow-lg">
              Get Started Free
            </button>
            <a
              href="tel:8005552273"
              className="flex items-center bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (800) 555-CARE
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-light">
            Available 24/7 | Average response time: 8 minutes
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
