'use client'

import { CityData } from '@/lib/cityData'
import { MapPin, DollarSign, Star, Users, Home, Palmtree, Coffee, ShoppingBag, Heart, TrendingUp } from 'lucide-react'

interface PhoenixNeighborhoodsProps {
  cityData: CityData
}

export default function PhoenixNeighborhoods({ cityData }: PhoenixNeighborhoodsProps) {
  const neighborhoods = [
    {
      name: "Scottsdale",
      description: "The crown jewel of Phoenix-area senior living, Scottsdale offers luxury resort-style communities, world-class golf, upscale dining, and the highest concentration of 5-star assisted living facilities in Arizona.",
      facilities: 28,
      avgCostLow: 5200,
      avgCostHigh: 9500,
      highlights: ["Old Town Scottsdale arts district", "100+ golf courses", "Mayo Clinic nearby", "Fashion Square luxury shopping", "TPC & Troon golf communities"],
      demographics: "35% seniors, median income $85,000, upscale retirees",
      transportation: "Scottsdale Trolley, ride-share friendly, walkable Old Town",
      icon: Star,
      color: "purple"
    },
    {
      name: "Paradise Valley",
      description: "Ultra-exclusive enclave between Phoenix and Scottsdale, Paradise Valley features some of Arizona's most luxurious assisted living communities set against stunning Camelback Mountain views.",
      facilities: 8,
      avgCostLow: 6500,
      avgCostHigh: 12000,
      highlights: ["Camelback Mountain views", "Resort-style communities", "Gated security", "El Chorro Lodge", "Multi-million dollar homes nearby"],
      demographics: "40% seniors, median income $150,000+, luxury market",
      transportation: "Private car service, limited public transit, exclusive area",
      icon: Palmtree,
      color: "green"
    },
    {
      name: "Tempe",
      description: "Home to Arizona State University, Tempe offers a vibrant mix of affordable assisted living, cultural activities, and easy access to Sky Harbor Airport. Popular with active seniors who want an engaged community.",
      facilities: 15,
      avgCostLow: 3400,
      avgCostHigh: 5800,
      highlights: ["ASU Lifelong Learning programs", "Tempe Town Lake", "Mill Avenue shops & dining", "Sky Harbor 10 min away", "Light rail access"],
      demographics: "22% seniors, diverse, active lifestyle focus",
      transportation: "Valley Metro Light Rail, extensive bus routes, bike-friendly",
      icon: Coffee,
      color: "blue"
    },
    {
      name: "Mesa",
      description: "Arizona's third-largest city offers excellent value with quality assisted living at 20-30% below Scottsdale prices. Large senior population with established communities and extensive amenities.",
      facilities: 22,
      avgCostLow: 3200,
      avgCostHigh: 5200,
      highlights: ["Red Mountain area popular", "Spring training baseball", "Superstition Mountains access", "Mesa Arts Center", "Affordable golf communities"],
      demographics: "28% seniors, large LDS community, family-oriented",
      transportation: "Bus system, senior shuttle services, car-dependent",
      icon: Home,
      color: "orange"
    },
    {
      name: "North Phoenix / Deer Valley",
      description: "Rapidly growing area with newer assisted living facilities, master-planned communities, and easy access to outdoor recreation. Popular with families relocating parents nearby.",
      facilities: 18,
      avgCostLow: 3800,
      avgCostHigh: 6200,
      highlights: ["Newer construction (post-2010)", "Deer Valley Airport", "Cave Creek nearby", "Outlet malls", "Desert Ridge community"],
      demographics: "25% seniors, growing families, suburban feel",
      transportation: "Car-oriented, limited public transit, senior shuttles",
      icon: Users,
      color: "indigo"
    },
    {
      name: "Glendale / Arrowhead",
      description: "Northwest Valley location near Luke Air Force Base and sporting venues. Mix of mid-range assisted living with strong military veteran services and affordable options.",
      facilities: 14,
      avgCostLow: 3400,
      avgCostHigh: 5500,
      highlights: ["State Farm Stadium", "Westgate Entertainment", "Wildlife World Zoo", "Military-friendly", "Arrowhead Ranch golf"],
      demographics: "24% seniors, military retirees, middle-class",
      transportation: "Bus routes, veteran shuttle services, park-and-ride",
      icon: ShoppingBag,
      color: "red"
    }
  ]


  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Phoenix Neighborhoods: Where to Find Assisted Living
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each Phoenix-area neighborhood offers unique advantages for senior living. From luxury Scottsdale to affordable Mesa, find the perfect community that matches your lifestyle and budget.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="space-y-8">
          {neighborhoods.map((neighborhood, index) => {
            const Icon = neighborhood.icon
            const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-cream'
            return (
              <div key={index} className={`${bgColor} border border-gray-200 rounded-lg p-8 shadow-sm`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Icon className="w-10 h-10 text-primary mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{neighborhood.name}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Home className="w-4 h-4 mr-1" />
                          {neighborhood.facilities} Facilities
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          ${neighborhood.avgCostLow.toLocaleString()}-${neighborhood.avgCostHigh.toLocaleString()}/mo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {neighborhood.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      Top Highlights
                    </h4>
                    <ul className="space-y-2">
                      {neighborhood.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-primary" />
                        Demographics
                      </h4>
                      <p className="text-gray-700 text-sm">{neighborhood.demographics}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                        Transportation
                      </h4>
                      <p className="text-gray-700 text-sm">{neighborhood.transportation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-bold">Quick Comparison: Phoenix Area Neighborhoods</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Neighborhood</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Facilities</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Cost Range</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Scottsdale</td>
                  <td className="px-6 py-4 text-gray-700">28</td>
                  <td className="px-6 py-4 text-gray-700">$5,200-$9,500</td>
                  <td className="px-6 py-4 text-gray-700">Luxury, golf, upscale dining</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Paradise Valley</td>
                  <td className="px-6 py-4 text-gray-700">8</td>
                  <td className="px-6 py-4 text-gray-700">$6,500-$12,000</td>
                  <td className="px-6 py-4 text-gray-700">Ultra-luxury, privacy, views</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Tempe</td>
                  <td className="px-6 py-4 text-gray-700">15</td>
                  <td className="px-6 py-4 text-gray-700">$3,400-$5,800</td>
                  <td className="px-6 py-4 text-gray-700">Active lifestyle, transit access</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Mesa</td>
                  <td className="px-6 py-4 text-gray-700">22</td>
                  <td className="px-6 py-4 text-gray-700">$3,200-$5,200</td>
                  <td className="px-6 py-4 text-gray-700">Best value, large senior population</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">North Phoenix</td>
                  <td className="px-6 py-4 text-gray-700">18</td>
                  <td className="px-6 py-4 text-gray-700">$3,800-$6,200</td>
                  <td className="px-6 py-4 text-gray-700">Newer facilities, family nearby</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Glendale</td>
                  <td className="px-6 py-4 text-gray-700">14</td>
                  <td className="px-6 py-4 text-gray-700">$3,400-$5,500</td>
                  <td className="px-6 py-4 text-gray-700">Veterans, sports fans, mid-range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pro Tip Box */}
        <div className="mt-8 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
          <div className="flex items-start">
            <Heart className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Tip: Choosing the Right Neighborhood</h4>
              <p className="text-gray-700 mb-3">
                When selecting a Phoenix neighborhood for assisted living, consider:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• <strong>Proximity to family:</strong> How often will loved ones visit?</li>
                <li>• <strong>Healthcare access:</strong> Distance to preferred hospitals and specialists</li>
                <li>• <strong>Lifestyle match:</strong> Golf vs. arts vs. quiet retreat</li>
                <li>• <strong>Budget:</strong> Scottsdale can be 2-3x more than Mesa</li>
                <li>• <strong>Climate zones:</strong> North Phoenix runs 5-10°F cooler in summer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
