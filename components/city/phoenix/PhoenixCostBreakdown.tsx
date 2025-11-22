'use client'

import { CityData } from '@/lib/cityData'
import { DollarSign, TrendingDown, TrendingUp, Download, Calculator, CreditCard, PiggyBank, FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react'
import { useState } from 'react'

interface PhoenixCostBreakdownProps {
  cityData: CityData
}

export default function PhoenixCostBreakdown({ cityData }: PhoenixCostBreakdownProps) {
  const [showCalculator, setShowCalculator] = useState(false)
  const [calculatorData, setCalculatorData] = useState({
    careLevel: 'assisted-living',
    roomType: 'private',
    neighborhood: 'central',
    services: [] as string[]
  })

  const calculateCost = () => {
    let baseCost = cityData.avgCostLow

    if (calculatorData.careLevel === 'memory-care') baseCost += 1700
    if (calculatorData.careLevel === 'nursing') baseCost += 2900
    if (calculatorData.roomType === 'private') baseCost += 500
    if (calculatorData.neighborhood === 'scottsdale') baseCost += 1800
    if (calculatorData.neighborhood === 'paradise-valley') baseCost += 3200

    const servicesCost = calculatorData.services.length * 300

    return baseCost + servicesCost
  }

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Phoenix Assisted Living Costs: Complete 2025 Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the true cost of assisted living in Phoenix helps you budget effectively and avoid surprises. Here's everything you need to know about pricing in the Valley.
          </p>
        </div>

        {/* National Comparison */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-12 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600 mb-2">PHOENIX AVERAGE</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ${cityData.avgCostLow.toLocaleString()}-${(cityData.avgCostHigh/1000).toFixed(1)}k
              </div>
              <div className="text-gray-700">per month</div>
            </div>

            <div className="text-center border-l border-r border-green-200">
              <div className="text-sm font-semibold text-gray-600 mb-2">VS. NATIONAL AVG</div>
              <div className="flex items-center justify-center mb-2">
                <TrendingDown className="w-8 h-8 text-green-600 mr-2" />
                <div className="text-4xl font-bold text-green-600">16%</div>
              </div>
              <div className="text-gray-700">Lower than US average</div>
            </div>

            <div className="text-center">
              <div className="text-sm font-semibold text-gray-600 mb-2">SAVINGS VS. CA</div>
              <div className="flex items-center justify-center mb-2">
                <PiggyBank className="w-8 h-8 text-green-600 mr-2" />
                <div className="text-4xl font-bold text-green-600">$1,200</div>
              </div>
              <div className="text-gray-700">per month on average</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-green-200">
            <p className="text-center text-gray-700">
              <strong>Good news for families:</strong> Phoenix assisted living costs 16% less than the national average of $5,350/month, and significantly less than California ($6,500+), making it one of the most affordable major metros for quality senior care.
            </p>
          </div>
        </div>

        {/* Detailed Cost Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-12">
          <div className="bg-primary text-white px-6 py-4">
            <h3 className="text-xl font-bold flex items-center">
              <DollarSign className="w-6 h-6 mr-2" />
              Phoenix Assisted Living Costs by Care Level (2025)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Care Level</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Monthly Range</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">What's Included</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Independent Living</div>
                    <div className="text-sm text-gray-500">Active seniors, minimal assistance</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-bold text-gray-900">$2,200-$4,800</div>
                    <div className="text-sm text-gray-500">Avg: $3,200/mo</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>✓ Private apartment</li>
                      <li>✓ Meals & housekeeping</li>
                      <li>✓ Social activities</li>
                      <li>✓ Transportation</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Healthy seniors wanting community and convenience
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 bg-yellow-50">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Assisted Living</div>
                    <div className="text-sm text-gray-500">ADL assistance needed</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-bold text-primary">${cityData.avgCostLow.toLocaleString()}-${cityData.avgCostHigh.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">Most common</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>✓ All independent living services</li>
                      <li>✓ Personal care (bathing, dressing)</li>
                      <li>✓ Medication management</li>
                      <li>✓ 24/7 staff supervision</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Seniors needing help with daily activities
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Memory Care</div>
                    <div className="text-sm text-gray-500">Alzheimer's, dementia</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-bold text-gray-900">$5,500-$7,500</div>
                    <div className="text-sm text-gray-500">Avg: $6,200/mo</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>✓ All assisted living services</li>
                      <li>✓ Secure/locked environment</li>
                      <li>✓ Specialized dementia care</li>
                      <li>✓ Cognitive programming</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Moderate to advanced memory impairment
                  </td>
                </tr>

                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Skilled Nursing</div>
                    <div className="text-sm text-gray-500">Medical care required</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-bold text-gray-900">$6,700-$9,000</div>
                    <div className="text-sm text-gray-500">Avg: $7,600/mo</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>✓ 24/7 nursing care</li>
                      <li>✓ Post-surgery recovery</li>
                      <li>✓ IV therapy, wound care</li>
                      <li>✓ Physical therapy</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Complex medical needs, rehab
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Costs Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              Typically Included in Base Rate
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Private or semi-private room</strong> - Apartment-style living</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>3 meals daily + snacks</strong> - Restaurant-style dining</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Housekeeping & laundry</strong> - Weekly service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Social activities</strong> - Daily programming</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Transportation</strong> - Doctor visits, shopping</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Utilities</strong> - Electric, water, cable, WiFi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>24/7 staff</strong> - Security and assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 font-bold">✓</span>
                <span><strong>Emergency call system</strong> - Safety monitoring</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg shadow-sm p-6 border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 text-orange-600 mr-2" />
              Potential Additional Costs
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Level 2+ care</strong> - $500-$1,500/mo for higher needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Private room upgrade</strong> - $500-$800/mo vs. shared</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Specialized therapies</strong> - $100-$400/mo (PT, OT, ST)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Incontinence care</strong> - $200-$500/mo supplies + service</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Beauty/barber</strong> - $30-$80 per visit</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Guest meals</strong> - $10-$25 per meal for visitors</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Pet fees</strong> - $25-$75/mo (if allowed)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2 font-bold">+</span>
                <span><strong>Community fee</strong> - $500-$3,000 one-time (some facilities)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CreditCard className="w-7 h-7 text-primary mr-3" />
            How to Pay for Assisted Living in Phoenix
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Primary Payment Sources</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">1. Private Pay (Most Common)</div>
                  <p className="text-sm text-gray-700">Personal savings, retirement accounts, investments, or sale of family home. Accounts for 70% of Arizona assisted living residents.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">2. Long-Term Care Insurance</div>
                  <p className="text-sm text-gray-700">Policies typically cover $3,000-$6,000/month for 3-5 years. Check if your policy covers assisted living in Arizona.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">3. VA Benefits (Veterans)</div>
                  <p className="text-sm text-gray-700">Aid & Attendance benefit provides up to $2,230/month for eligible wartime veterans. Phoenix has strong VA support.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">4. Arizona Medicaid (ALTCS)</div>
                  <p className="text-sm text-gray-700">Limited to low-income seniors ($2,000 asset limit). Only certain Phoenix facilities accept ALTCS - we can help you find them.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Creative Financing Options</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Reverse Mortgage</div>
                  <p className="text-sm text-gray-700">Convert home equity to income. Phoenix seniors average $180,000 in available equity, providing $3,000-$5,000/month.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Life Insurance Conversion</div>
                  <p className="text-sm text-gray-700">Sell or borrow against life insurance policy. Viatical settlements can provide lump sum or monthly payments.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Arizona Long-Term Care Partnership</div>
                  <p className="text-sm text-gray-700">Special insurance program allowing asset protection if you later need Medicaid coverage.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="font-semibold text-gray-900 mb-1">Family Contributions</div>
                  <p className="text-sm text-gray-700">Multiple family members contributing $500-$1,000/month each can make care affordable collectively.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-200">
            <p className="text-gray-700 text-center">
              <strong>Need help navigating payment options?</strong> Our advisors can connect you with financial planners specializing in senior care and Arizona Medicaid planning. <span className="text-primary font-bold">Call (800) 555-CARE</span> for free consultation.
            </p>
          </div>
        </div>

        {/* Download Guide CTA */}
        <div className="bg-primary text-white rounded-lg p-8 text-center shadow-sm">
          <Download className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Download Our Free Phoenix Cost Guide</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Get our comprehensive 24-page guide including facility-by-facility pricing, hidden cost checklist, financial planning worksheet, and Medicaid application guide.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all inline-flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Download Free Cost Guide (PDF)
          </button>
          <p className="text-sm mt-4 opacity-75">
            Instant download • No credit card required • Updated January 2025
          </p>
        </div>
      </div>
    </section>
  )
}
