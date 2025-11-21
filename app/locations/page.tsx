'use client'

import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Import the locations data (you can make this dynamic later)
const locations = [
  { zipCode: '92173', city: 'San Ysidro', slug: '92173-san-ysidro', neighborhoods: ['San Ysidro', 'Border area'] },
  { zipCode: '92102', city: 'Downtown San Diego', slug: '92102-downtown-san-diego', neighborhoods: ['Downtown', 'East Village', 'Marina District'] },
  { zipCode: '92104', city: 'North Park', slug: '92104-north-park', neighborhoods: ['North Park', 'City Heights'] },
  { zipCode: '92105', city: 'City Heights', slug: '92105-city-heights', neighborhoods: ['City Heights', 'Rolando'] },
  { zipCode: '92113', city: 'Southeast San Diego', slug: '92113-southeast-san-diego', neighborhoods: ['Logan Heights', 'Barrio Logan'] },
  { zipCode: '92115', city: 'College Area', slug: '92115-college-area', neighborhoods: ['College Area', 'Rolando Village'] },
  { zipCode: '92118', city: 'Coronado', slug: '92118-coronado', neighborhoods: ['Coronado', 'Imperial Beach'] },
  { zipCode: '92135', city: 'Naval Base San Diego', slug: '92135-naval-base', neighborhoods: ['Naval Base', '32nd Street'] },
  { zipCode: '92136', city: 'Naval Air Station', slug: '92136-naval-air-station', neighborhoods: ['Naval Air Station North Island'] },
  { zipCode: '92155', city: 'Marine Corps Base', slug: '92155-marine-corps', neighborhoods: ['Marine Corps Recruit Depot'] },
  { zipCode: '91977', city: 'Spring Valley', slug: '91977-spring-valley', neighborhoods: ['Spring Valley', 'Casa de Oro'] },
  { zipCode: '91978', city: 'Spring Valley East', slug: '91978-spring-valley-east', neighborhoods: ['Spring Valley East'] },
  { zipCode: '92114', city: 'Encanto', slug: '92114-encanto', neighborhoods: ['Encanto', 'Valencia Park', 'Emerald Hills'] },
  { zipCode: '91915', city: 'Chula Vista East', slug: '91915-chula-vista-east', neighborhoods: ['Eastlake', 'Rolling Hills Ranch'] },
  { zipCode: '92139', city: 'Otay Mesa', slug: '92139-otay-mesa', neighborhoods: ['Otay Mesa', 'Otay Ranch'] },
  { zipCode: '91950', city: 'National City', slug: '91950-national-city', neighborhoods: ['National City', 'Paradise Hills'] },
  { zipCode: '91902', city: 'Bonita', slug: '91902-bonita', neighborhoods: ['Bonita', 'Sunnyside'] },
  { zipCode: '91910', city: 'Chula Vista West', slug: '91910-chula-vista-west', neighborhoods: ['West Chula Vista', 'Castle Park'] },
  { zipCode: '91911', city: 'Chula Vista Central', slug: '91911-chula-vista-central', neighborhoods: ['Central Chula Vista', 'Telegraph Canyon'] },
  { zipCode: '91913', city: 'Chula Vista South', slug: '91913-chula-vista-south', neighborhoods: ['South Chula Vista', 'Montgomery'] },
  { zipCode: '91914', city: 'Chula Vista East', slug: '91914-chula-vista-east', neighborhoods: ['East Chula Vista', 'Eastlake Greens'] },
  { zipCode: '91932', city: 'Imperial Beach', slug: '91932-imperial-beach', neighborhoods: ['Imperial Beach', 'Palm City'] },
  { zipCode: '91941', city: 'La Presa', slug: '91941-la-presa', neighborhoods: ['La Presa', 'Rancho San Diego'] },
  { zipCode: '91945', city: 'Lemon Grove', slug: '91945-lemon-grove', neighborhoods: ['Lemon Grove', 'Mount Helix'] },
  { zipCode: '92154', city: 'San Diego South', slug: '92154-san-diego-south', neighborhoods: ['Nestor', 'Egger Highlands', 'Ocean View Hills'] },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl lg:text-2xl text-primary-light mb-8">
              Premium in-home senior care across {locations.length} locations in San Diego County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6195550123" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                (619) 555-0123
              </a>
              <a href="mailto:care@yoursite.com" className="bg-primary-light text-primary px-8 py-4 rounded-full font-semibold hover:bg-white transition-all inline-flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">{locations.length}</div>
              <div className="text-gray-600 font-medium">Service Areas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Availability</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label">ALL LOCATIONS</p>
            <h2 className="section-heading">Find Senior Care Near You</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Click on your area to learn more about our services in your neighborhood
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.zipCode}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/locations/${location.slug}`}
                  className="card group cursor-pointer h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {location.city}
                      </div>
                      <div className="text-primary font-semibold">
                        Zip Code: {location.zipCode}
                      </div>
                    </div>
                    <div className="bg-primary-light p-3 rounded-xl group-hover:bg-primary transition-colors">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Neighborhoods:</div>
                    <div className="flex flex-wrap gap-2">
                      {location.neighborhoods.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
                    View services in this area
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light/20 to-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Don't See Your Area Listed?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We're always expanding! Contact us to see if we serve your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6195550123"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                href="#contact"
                className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
