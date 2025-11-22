'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Search, MapPin, Phone, CheckCircle, Star, TrendingUp, Users, Building, Award, Heart } from 'lucide-react'
import Link from 'next/link'
import { getPopularCities } from '@/lib/cityData'

export default function Home() {
  const popularCities = getPopularCities(12)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Assisted Living Near You
          </h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white border-2 border-gray-300 rounded-full shadow-sm p-2 flex items-center hover:border-primary transition-colors">
              <input
                type="text"
                placeholder="Enter city or zip code"
                className="flex-1 px-4 text-gray-900 outline-none bg-transparent"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Your Search, Your Way */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your search, your way
              </h2>
              <p className="text-gray-700 mb-6">
                Find the best senior living care that meets your needs with expert guidance every step of the way.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full font-semibold transition-colors text-left shadow-md">
                Search communities near you
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full font-semibold transition-colors text-left shadow-md">
                Get personalized help from an advisor
              </button>
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full font-semibold transition-colors text-left shadow-md">
                Compare senior living options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Free Service Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How our free service works
            </h2>
            <p className="text-gray-600 text-lg">
              We're dedicated to finding the best senior living options for you and your loved ones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Share your needs</h3>
              <p className="text-gray-600">
                Tell us about your care requirements, budget, and preferences
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get expert guidance</h3>
              <p className="text-gray-600">
                Our advisors will match you with the best communities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tour and decide</h3>
              <p className="text-gray-600">
                Schedule tours and find the perfect place to call home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-12 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Does your loved one need care urgently?
          </h2>
          <p className="text-gray-700 mb-6">
            Our advisors are ready to help you find immediate placement options.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg inline-flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Get immediate assistance
          </button>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get the support you need every step of the way
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalized matching</h3>
              <p className="text-gray-700 text-sm">
                We'll connect you with communities that meet your specific needs and preferences
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert advisors</h3>
              <p className="text-gray-700 text-sm">
                Get guidance from our team of senior living specialists available 24/7
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Verified communities</h3>
              <p className="text-gray-700 text-sm">
                All facilities are licensed, inspected, and verified for quality care standards
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Local expertise</h3>
              <p className="text-gray-700 text-sm">
                We know the communities in your area and can help you find the perfect fit
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted reviews</h3>
              <p className="text-gray-700 text-sm">
                Read authentic reviews from families who've toured and lived in these communities
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ongoing support</h3>
              <p className="text-gray-700 text-sm">
                We're here to help even after you've found the perfect community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - National Network */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              National network of communities
            </h2>
            <p className="text-gray-700 text-lg">
              Access thousands of verified senior living communities across America
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">11k+</div>
              <div className="text-gray-600">Senior living communities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">2k+</div>
              <div className="text-gray-600">Cities and towns</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">300k+</div>
              <div className="text-gray-600">Families helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Better Informed */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Being better informed means making better decisions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">400+</div>
              <div className="text-gray-600">Expert advisors nationwide</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">7M+</div>
              <div className="text-gray-600">Community reviews</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Years of experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What families say about Care Connect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Care Connect made finding the perfect assisted living community for my mother so easy. Their advisor was incredibly helpful and patient."
              </p>
              <p className="font-semibold text-gray-900">- Sarah M.</p>
              <p className="text-sm text-gray-600">Phoenix, AZ</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The service is completely free and saved us so much time. We found a wonderful community within days!"
              </p>
              <p className="font-semibold text-gray-900">- Michael R.</p>
              <p className="text-sm text-gray-600">Austin, TX</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Our advisor understood exactly what we needed and matched us with the perfect place. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">- Jennifer L.</p>
              <p className="text-sm text-gray-600">Seattle, WA</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Read more reviews
            </button>
          </div>
        </div>
      </section>

      {/* Reviews and Awards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Reviews and award winners
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Care Connect is recognized as a trusted resource for families seeking senior living options. Our commitment to quality and transparency has earned us numerous accolades.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-semibold text-gray-900">Industry Leader</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="font-semibold text-gray-900">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-primary" />
              <span className="font-semibold text-gray-900">Trusted by 300k+ Families</span>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start your search for assisted living
          </h2>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
            Search
          </button>
        </div>
      </section>

      {/* Care Type Selector */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Which senior living care type is the best fit for you?
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/assisted-living"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Assisted Living
            </Link>
            <Link
              href="/independent-living"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Independent Living
            </Link>
            <Link
              href="/memory-care"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Memory Care
            </Link>
            <Link
              href="/nursing-homes"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Nursing Homes
            </Link>
          </div>

          <div className="bg-cream rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Questions about senior living?
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Our advisors can help you understand the differences between care types and find the best option for your loved one.
            </p>
            <div className="text-center">
              <a
                href="tel:8005552273"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (800) 555-CARE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore assisted living by location
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Assisted Living in {city.city}, {city.stateAbbrev}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {city.facilityCount} communities
                </p>
                <p className="text-sm text-primary font-semibold">
                  View communities →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
