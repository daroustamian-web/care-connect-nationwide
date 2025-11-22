'use client'

import { useState, useMemo } from 'react'
import { CityData, Facility, getFacilitiesByCity } from '@/lib/cityData'
import { MapPin, DollarSign, Star, Heart, Phone, Mail } from 'lucide-react'

interface FacilityListingsProps {
  cityData: CityData
}

// Facility images (using Unsplash placeholder images)
const facilityImages = [
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800',
  'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800',
  'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
  'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
]

export default function FacilityListings({ cityData }: FacilityListingsProps) {
  const [priceRange, setPriceRange] = useState<string>('any')
  const [careLevel, setCareLevel] = useState<string>('all')
  const [neighborhood, setNeighborhood] = useState<string>('all')
  const [amenity, setAmenity] = useState<string>('all')
  const [displayLimit, setDisplayLimit] = useState(9)

  // Get all facilities for this city
  const allFacilities = getFacilitiesByCity(cityData.slug)

  // Filter facilities based on selected criteria
  const filteredFacilities = useMemo(() => {
    let filtered = [...allFacilities]

    // Filter by price range
    if (priceRange !== 'any') {
      const [min, max] = priceRange.split('-').map(Number)
      filtered = filtered.filter((f) => {
        if (max) {
          return f.pricing.low >= min && f.pricing.high <= max
        } else {
          return f.pricing.low >= min
        }
      })
    }

    // Filter by care level
    if (careLevel !== 'all') {
      filtered = filtered.filter((f) => f.careLevels.includes(careLevel))
    }

    // Filter by neighborhood
    if (neighborhood !== 'all') {
      filtered = filtered.filter((f) => f.address.neighborhood === neighborhood)
    }

    // Filter by amenity
    if (amenity !== 'all') {
      filtered = filtered.filter((f) => f.amenities.includes(amenity))
    }

    // Sort by rating (highest first)
    filtered.sort((a, b) => b.rating - a.rating)

    return filtered
  }, [allFacilities, priceRange, careLevel, neighborhood, amenity])

  const displayedFacilities = filteredFacilities.slice(0, displayLimit)

  // Get unique amenities across all facilities in this city
  const allAmenities = useMemo(() => {
    const amenitySet = new Set<string>()
    allFacilities.forEach((f) => {
      f.amenities.forEach((a) => amenitySet.add(a))
    })
    return Array.from(amenitySet).sort()
  }, [allFacilities])

  const handleLoadMore = () => {
    setDisplayLimit((prev) => prev + 9)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {allFacilities.length} Assisted Living Communities in {cityData.city}
          </h2>
          <p className="text-lg text-gray-600">
            {filteredFacilities.length === allFacilities.length
              ? `Browse all ${allFacilities.length} facilities`
              : `Showing ${filteredFacilities.length} of ${allFacilities.length} facilities`}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="any">Any Price</option>
                <option value="0-3000">Under $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-7000">$5,000 - $7,000</option>
                <option value="7000-999999">$7,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Care Level</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={careLevel}
                onChange={(e) => setCareLevel(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Independent Living">Independent Living</option>
                <option value="Assisted Living">Assisted Living</option>
                <option value="Memory Care">Memory Care</option>
                <option value="Skilled Nursing">Skilled Nursing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Neighborhood</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              >
                <option value="all">All Areas</option>
                {cityData.neighborhoods.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={amenity}
                onChange={(e) => setAmenity(e.target.value)}
              >
                <option value="all">All Amenities</option>
                {allAmenities.slice(0, 20).map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Facility Cards */}
        {displayedFacilities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No facilities match your filters. Try adjusting your criteria.</p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {displayedFacilities.map((facility, index) => (
                <div key={facility.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={facilityImages[index % facilityImages.length]}
                        alt={facility.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${i < Math.floor(facility.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-700 font-semibold">{facility.rating}</span>
                            <span className="text-gray-500">({facility.reviewCount.toLocaleString()} reviews)</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                            <span className="text-sm">{facility.address.street}, {facility.address.neighborhood}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-2 space-x-3">
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-1" />
                              <span className="text-sm">{facility.phone}</span>
                            </div>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline space-x-2 mb-2">
                          <DollarSign className="w-5 h-5 text-gray-600" />
                          <span className="text-2xl font-bold text-gray-900">
                            ${facility.pricing.low.toLocaleString()} - ${facility.pricing.high.toLocaleString()}
                          </span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                          {facility.careLevels.map((level, i) => (
                            <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {level}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {facility.amenities.slice(0, 5).map((amenity, i) => (
                          <span key={i} className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                            ✓ {amenity}
                          </span>
                        ))}
                        {facility.amenities.length > 5 && (
                          <span className="text-primary-dark px-3 py-1 text-sm font-medium">
                            +{facility.amenities.length - 5} more
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                          Schedule Tour
                        </button>
                        <button className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
                          View Details
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                          Compare
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {displayedFacilities.length < filteredFacilities.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Load More Facilities ({filteredFacilities.length - displayedFacilities.length} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
