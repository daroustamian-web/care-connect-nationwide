'use client'

import { CityData } from '@/lib/cityData'
import { Sun, Thermometer, MapPin, DollarSign, TrendingUp, Users, Heart, Shield, Building2, Bus, Palmtree, Activity, Coffee, Award, Cross, GraduationCap, Home } from 'lucide-react'

interface PhoenixDeepContentProps {
  cityData: CityData
}

export default function PhoenixDeepContent({ cityData }: PhoenixDeepContentProps) {
  return (
    <div className="space-y-16">
      {/* Why Phoenix for Seniors */}
      <section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Phoenix is Perfect for Senior Living
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Phoenix, Arizona has emerged as one of America's premier retirement destinations, and for good reason. With over <strong>245,000 seniors aged 65+</strong> calling the Valley home, Phoenix offers an unbeatable combination of year-round sunshine, world-class healthcare, affordable living costs, and vibrant active adult communities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Phoenix metropolitan area, including Scottsdale, Tempe, Mesa, and Glendale, is home to <strong>{cityData.facilityCount} licensed assisted living facilities</strong>, giving families extensive options to find the perfect fit. Whether you're looking for luxury resort-style communities in North Scottsdale, budget-friendly options in Mesa, or specialized memory care in central Phoenix, the Valley has it all.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">330+ Days of Sunshine</h3>
              <p className="text-gray-700">
                Phoenix receives more sunshine than almost any other major US city. The warm, dry climate is ideal for seniors with arthritis and respiratory conditions. Winter temperatures average a comfortable 65-70°F, perfect for year-round outdoor activities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Cross className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">World-Class Healthcare</h3>
              <p className="text-gray-700">
                Home to Mayo Clinic, Banner Health, HonorHealth, and Dignity Health, Phoenix offers some of the nation's best medical care. The city has over 30 major hospitals and hundreds of senior-specialized clinics within minutes of most communities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Cost of Living</h3>
              <p className="text-gray-700">
                Compared to California and other Sun Belt states, Phoenix offers 15-30% lower assisted living costs. The average of ${cityData.avgCostLow.toLocaleString()}-${cityData.avgCostHigh.toLocaleString()}/month is significantly below coastal cities, and Arizona has no estate tax or inheritance tax.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Activity className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Active Lifestyle</h3>
              <p className="text-gray-700">
                With countless golf courses, hiking trails, cultural attractions, and active adult communities, Phoenix seniors enjoy an incredibly active lifestyle. The Desert Botanical Garden, Phoenix Art Museum, and spring training baseball draw residents year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phoenix Senior Demographics */}
      <section className="bg-cream -mx-8 px-8 py-12 rounded-lg">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Senior Living Statistics in Phoenix
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Understanding Phoenix's senior population helps illustrate why the city has become such a retirement haven:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="w-10 h-10 text-primary mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">245,000+</div>
              <div className="text-gray-600">Seniors (65+) in Phoenix</div>
              <div className="text-sm text-gray-500 mt-2">14.6% of total population</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">32%</div>
              <div className="text-gray-600">Growth since 2010</div>
              <div className="text-sm text-gray-500 mt-2">One of fastest-growing senior populations</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Home className="w-10 h-10 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{cityData.facilityCount}</div>
              <div className="text-gray-600">Assisted Living Facilities</div>
              <div className="text-sm text-gray-500 mt-2">Licensed and regulated by ADHS</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Phoenix Metro Statistics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Demographics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Total Population:</strong> 1.68 million (5th largest US city)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Metro Population:</strong> 4.9 million (10th largest metro)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Median Age:</strong> 34.2 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Life Expectancy:</strong> 79.1 years</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Senior Care Market</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Assisted Living:</strong> {cityData.facilityCount} facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Memory Care:</strong> 120+ specialized units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Independent Living:</strong> 200+ communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Skilled Nursing:</strong> 75+ facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Weather */}
      <section>
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Phoenix Climate: Ideal for Year-Round Senior Living
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Phoenix's desert climate is one of its biggest draws for seniors. While summers are hot (averaging 105°F in July), the <strong>dry heat is far more tolerable</strong> than humid climates, and most assisted living facilities feature climate-controlled environments with pools and air-conditioned common areas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The real magic happens from <strong>October through May</strong>, when Phoenix transforms into paradise. Winter temperatures average 65-75°F during the day and 45-55°F at night—absolutely perfect for outdoor activities, golf, hiking, and enjoying the beautiful Sonoran Desert landscape.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Monthly Weather Overview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-2">WINTER (Dec-Feb)</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">65-70°F</div>
                <div className="text-gray-700">Sunny, comfortable, outdoor activities daily</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-2">SPRING/FALL (Mar-May, Sep-Nov)</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">75-95°F</div>
                <div className="text-gray-700">Perfect weather, peak activity season</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-2">SUMMER (Jun-Aug)</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">105-115°F</div>
                <div className="text-gray-700">Indoor activities, pool time, AC comfort</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Heart className="w-6 h-6 text-primary mr-2" />
              Health Benefits of Phoenix's Dry Climate
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span><strong>Arthritis Relief:</strong> Many seniors report reduced joint pain and stiffness in the dry desert climate compared to humid environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span><strong>Respiratory Health:</strong> Low humidity and minimal pollen in winter months benefit those with asthma, COPD, and allergies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span><strong>Vitamin D:</strong> 330+ sunny days mean natural vitamin D production year-round, supporting bone health and mood</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">✓</span>
                <span><strong>Outdoor Activity:</strong> 8-9 months of perfect weather encourages daily walking, golf, and social activities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Healthcare Infrastructure */}
      <section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Phoenix Healthcare: World-Class Medical Care for Seniors
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Access to quality healthcare is a top priority for seniors and their families. Phoenix excels in this area, ranking as one of the <strong>top 10 cities in the nation for senior healthcare</strong> according to U.S. News & World Report. The Valley is home to nationally-ranked hospitals, cutting-edge medical research, and thousands of specialized senior care physicians.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Cross className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mayo Clinic Phoenix</h3>
              <p className="text-gray-700 mb-4">
                One of the world's premier medical centers, Mayo Clinic Phoenix specializes in cancer care, neurology, cardiology, and geriatric medicine. Ranked #1 in Arizona and Top 20 nationally.
              </p>
              <div className="text-sm text-gray-600">
                📍 5777 E Mayo Blvd, Phoenix, AZ 85054
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Cross className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Banner Health System</h3>
              <p className="text-gray-700 mb-4">
                Arizona's largest nonprofit healthcare system with 13 hospitals in the Phoenix area. Specializes in senior emergency care, stroke treatment, and orthopedics.
              </p>
              <div className="text-sm text-gray-600">
                Multiple locations across Phoenix metro
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Cross className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">HonorHealth</h3>
              <p className="text-gray-700 mb-4">
                Five-hospital system serving North Phoenix and Scottsdale. Known for excellence in senior orthopedics, heart care, and cancer treatment. Multiple outpatient clinics.
              </p>
              <div className="text-sm text-gray-600">
                Primary locations in Scottsdale, Deer Valley
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <Cross className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dignity Health</h3>
              <p className="text-gray-700 mb-4">
                Network of 7 hospitals including St. Joseph's Hospital & Medical Center, one of the region's top Level 1 trauma centers and neurological institutes.
              </p>
              <div className="text-sm text-gray-600">
                Locations throughout Phoenix metro
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Specialized Senior Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• 50+ geriatric care physicians</li>
                <li>• 30+ memory care specialists</li>
                <li>• 100+ senior physical therapy centers</li>
                <li>• Barrow Neurological Institute (world-renowned)</li>
              </ul>
              <ul className="space-y-2">
                <li>• Phoenix VA Healthcare System</li>
                <li>• University of Arizona College of Medicine</li>
                <li>• 200+ assisted living on-site clinics</li>
                <li>• Mobile senior health services available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
