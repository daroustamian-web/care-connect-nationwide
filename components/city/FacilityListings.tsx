'use client'

import { CityData } from '@/lib/cityData'
import { MapPin, DollarSign, Star, Heart, Users, Shield } from 'lucide-react'

interface FacilityListingsProps {
  cityData: CityData
}

// Sample facility data - in production this would come from a database
const generateSampleFacilities = (cityData: CityData) => {
  const facilities = [
    {
      name: `Sunrise Senior Living - ${cityData.city}`,
      rating: 4.7,
      reviews: 234,
      distance: '2.3 miles from downtown',
      costLow: cityData.avgCostLow + 400,
      costHigh: cityData.avgCostHigh + 1400,
      amenities: ['Memory Care', 'Pet-Friendly', '24/7 Nursing'],
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800',
    },
    {
      name: `Brookdale ${cityData.city}`,
      rating: 4.5,
      reviews: 189,
      distance: '3.1 miles from downtown',
      costLow: cityData.avgCostLow - 200,
      costHigh: cityData.avgCostHigh - 400,
      amenities: ['Independent Living', 'Fitness Center', 'Restaurant'],
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800',
    },
    {
      name: `Atria ${cityData.neighborhoods[0]}`,
      rating: 4.6,
      reviews: 156,
      distance: '1.8 miles from downtown',
      costLow: cityData.avgCostLow + 200,
      costHigh: cityData.avgCostHigh + 600,
      amenities: ['Luxury Dining', 'Pool', 'Spa Services'],
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
    },
  ]

  return facilities
}

export default function FacilityListings({ cityData }: FacilityListingsProps) {
  const facilities = generateSampleFacilities(cityData)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Assisted Living Communities in {cityData.city}
          </h2>
          <p className="text-lg text-gray-600">
            Compare top-rated facilities, schedule tours, and find the perfect fit
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                <option>Any Price</option>
                <option>Under $3,000</option>
                <option>$3,000 - $5,000</option>
                <option>$5,000 - $7,000</option>
                <option>$7,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Care Level</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                <option>All Types</option>
                <option>Independent Living</option>
                <option>Assisted Living</option>
                <option>Memory Care</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Neighborhood</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                <option>All Areas</option>
                {cityData.neighborhoods.map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                <option>All Amenities</option>
                <option>Pet-Friendly</option>
                <option>Memory Care</option>
                <option>Private Rooms</option>
              </select>
            </div>
          </div>
        </div>

        {/* Facility Cards */}
        <div className="space-y-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
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
                        <span className="text-gray-500">({facility.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{facility.distance}</span>
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
                        ${facility.costLow.toLocaleString()} - ${facility.costHigh.toLocaleString()}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {facility.amenities.map((amenity, i) => (
                      <span key={i} className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                        ✓ {amenity}
                      </span>
                    ))}
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

        <div className="text-center mt-8">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Load More Facilities
          </button>
        </div>
      </div>
    </section>
  )
}
