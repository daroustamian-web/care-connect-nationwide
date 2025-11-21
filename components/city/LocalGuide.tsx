'use client'

import { CityData } from '@/lib/cityData'
import { MapPin, DollarSign, Home, Heart } from 'lucide-react'

interface LocalGuideProps {
  cityData: CityData
}

export default function LocalGuide({ cityData }: LocalGuideProps) {
  const nationalAverage = 4500
  const vsNational = Math.round(((cityData.avgCostLow - nationalAverage) / nationalAverage) * 100)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Guide to Assisted Living in {cityData.city}
        </h2>

        {/* Local Overview */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-6 h-6 text-primary mr-2" />
            About {cityData.city}, {cityData.state}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {cityData.description}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With over {(cityData.seniorPopulation / 1000).toFixed(0)}K seniors aged 65 and older, {cityData.city} has developed a robust network of {cityData.facilityCount} assisted living facilities to serve the community. The city's senior care infrastructure continues to grow, offering diverse options from budget-friendly communities to luxury facilities with resort-style amenities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            {cityData.city} is located in {cityData.county}, providing easy access to healthcare facilities, cultural attractions, and family-friendly neighborhoods that make visiting loved ones convenient and enjoyable.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-6 h-6 text-primary mr-2" />
            Assisted Living Costs in {cityData.city}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            The average cost of assisted living in {cityData.city} ranges from <strong>${cityData.avgCostLow.toLocaleString()}</strong> to <strong>${cityData.avgCostHigh.toLocaleString()}</strong> per month, which is approximately <strong>{vsNational > 0 ? '+' : ''}{vsNational}%</strong> {vsNational > 0 ? 'higher' : 'lower'} than the national average of ${nationalAverage.toLocaleString()}/month.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-3">Cost Breakdown by Care Level:</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-semibold text-gray-700">Care Level</th>
                  <th className="text-right py-2 font-semibold text-gray-700">Average Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3">Independent Living</td>
                  <td className="text-right">${(cityData.avgCostLow - 600).toLocaleString()} - ${(cityData.avgCostHigh - 1400).toLocaleString()}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">Assisted Living</td>
                  <td className="text-right font-semibold text-gray-900">${cityData.avgCostLow.toLocaleString()} - ${cityData.avgCostHigh.toLocaleString()}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">Memory Care</td>
                  <td className="text-right">${(cityData.avgCostLow + 1700).toLocaleString()} - ${(cityData.avgCostHigh + 2300).toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="py-3">Skilled Nursing</td>
                  <td className="text-right">${(cityData.avgCostLow + 2900).toLocaleString()} - ${(cityData.avgCostHigh + 3800).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Factors affecting costs in {cityData.city} include location within the metro area, room type (shared vs. private), level of care required, and facility amenities. Communities in neighborhoods like {cityData.neighborhoods[0]} may have different pricing than those in {cityData.neighborhoods[cityData.neighborhoods.length - 1]}.
          </p>
        </div>

        {/* Neighborhoods */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Home className="w-6 h-6 text-primary mr-2" />
            Best Neighborhoods for Assisted Living
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {cityData.city} offers assisted living options across several desirable neighborhoods:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {cityData.neighborhoods.slice(0, 6).map((neighborhood, index) => (
              <div key={index} className="bg-primary-light rounded-lg p-4">
                <h4 className="font-bold text-primary-dark mb-2">{neighborhood}</h4>
                <p className="text-sm text-gray-700">
                  Multiple assisted living options with {index % 2 === 0 ? 'excellent amenities and close to shopping' : 'family-friendly atmosphere and healthcare access'}.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Choose */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Heart className="w-6 h-6 text-primary mr-2" />
            How to Choose Assisted Living in {cityData.city}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When selecting an assisted living community in {cityData.city}, consider these important factors:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">1. Location & Accessibility</h4>
              <p className="text-gray-700">
                Choose a facility close to family members and within easy reach of healthcare providers. Consider proximity to {cityData.county}'s major hospitals and medical centers.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">2. Cost & Financial Planning</h4>
              <p className="text-gray-700">
                Understand what's included in the base rate and what costs extra. Ask about rate increase history and financial assistance programs available in {cityData.state}.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">3. Quality & Licensing</h4>
              <p className="text-gray-700">
                Verify {cityData.state} licensing, check inspection reports, and ask about staff-to-resident ratios and caregiver training programs.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">4. Amenities & Lifestyle</h4>
              <p className="text-gray-700">
                Visit during meal times and activity hours. Observe the atmosphere, speak with current residents and families, and ensure the community matches your loved one's personality and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
