'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { getPopularCities } from '@/lib/cityData'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const cities = getPopularCities(40)

  // Split cities into 4 columns
  const columnSize = Math.ceil(cities.length / 4)
  const cityColumns = [
    cities.slice(0, columnSize),
    cities.slice(columnSize, columnSize * 2),
    cities.slice(columnSize * 2, columnSize * 3),
    cities.slice(columnSize * 3),
  ]

  return (
    <footer className="bg-navy text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition-colors">
                  Press & media
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Senior living guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cost-calculator" className="hover:text-white transition-colors">
                  Cost calculator
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Senior Living */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Senior living</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/assisted-living" className="hover:text-white transition-colors">
                  Assisted living
                </Link>
              </li>
              <li>
                <Link href="/memory-care" className="hover:text-white transition-colors">
                  Memory care
                </Link>
              </li>
              <li>
                <Link href="/independent-living" className="hover:text-white transition-colors">
                  Independent living
                </Link>
              </li>
              <li>
                <Link href="/nursing-homes" className="hover:text-white transition-colors">
                  Nursing homes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact us</h3>
            <p className="text-sm mb-4">
              Speak with a senior living advisor
            </p>
            <a
              href="tel:8005552273"
              className="text-white font-bold text-xl hover:text-primary transition-colors block mb-4"
            >
              (800) 555-CARE
            </a>
            <p className="text-xs text-gray-400">Available 24/7</p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* City Listings */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-6">Explore assisted living by location</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            {cityColumns.map((column, colIndex) => (
              <div key={colIndex} className="space-y-3">
                {column.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}`}
                    className="text-sm hover:text-white transition-colors block"
                  >
                    Assisted Living in {city.city}, {city.stateAbbrev}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/locations"
              className="text-primary hover:text-primary-light font-semibold text-sm transition-colors"
            >
              View all locations →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
            <p className="text-gray-400 text-xs">
              © {currentYear} Care Connect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
