'use client'

import { CityData } from '@/lib/cityData'
import { Building2, DollarSign, Star, TrendingDown } from 'lucide-react'

interface CityStatsProps {
  cityData: CityData
}

export default function CityStats({ cityData }: CityStatsProps) {
  const nationalAverage = 4500
  const vsNational = Math.round(((cityData.avgCostLow - nationalAverage) / nationalAverage) * 100)

  return (
    <section className="bg-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{cityData.facilityCount}</p>
            <p className="text-sm text-gray-600 mt-1">Assisted Living Facilities</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              ${cityData.avgCostLow.toLocaleString()}-{(cityData.avgCostHigh / 1000).toFixed(1)}k
            </p>
            <p className="text-sm text-gray-600 mt-1">Average Cost/Month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <p className="text-3xl font-bold text-gray-900">4.3</p>
            <p className="text-sm text-gray-600 mt-1">Average Rating</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <TrendingDown className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {vsNational > 0 ? '+' : ''}{vsNational}%
            </p>
            <p className="text-sm text-gray-600 mt-1">vs. National Average</p>
          </div>
        </div>
      </div>
    </section>
  )
}
