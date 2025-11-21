'use client'

import { CityData } from '@/lib/cityData'
import { getRelatedCities } from '@/lib/cityData'
import Link from 'next/link'
import { MapPin, DollarSign, ArrowRight } from 'lucide-react'

interface RelatedCitiesProps {
  cityData: CityData
}

export default function RelatedCities({ cityData }: RelatedCitiesProps) {
  const relatedCities = getRelatedCities(cityData, 6)

  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Assisted Living in Nearby Cities
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore assisted living options in other {cityData.state} communities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCities.map((city) => (
            <Link
              key={city.slug}
              href={`/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {city.city}, {city.stateAbbrev}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{city.facilityCount} Assisted Living Facilities</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">
                    ${city.avgCostLow.toLocaleString()} - ${city.avgCostHigh.toLocaleString()}/mo
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {city.description}
              </p>

              <div className="flex items-center text-primary font-semibold">
                <span>View {city.city}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/assisted-living"
            className="inline-block bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View All Cities
          </Link>
        </div>
      </div>
    </section>
  )
}
