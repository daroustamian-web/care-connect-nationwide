'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Care <span className="text-primary">Connect</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Find the perfect assisted living community for your loved ones. Compare facilities, costs, and reviews across the United States. Free expert guidance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/assisted-living" className="hover:text-primary transition-colors">
                  Find Assisted Living
                </Link>
              </li>
              <li>
                <Link href="/cost-calculator" className="hover:text-primary transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Resources & Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Care Types */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Care Types</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/assisted-living" className="hover:text-primary transition-colors">
                  Assisted Living
                </Link>
              </li>
              <li>
                <Link href="/memory-care" className="hover:text-primary transition-colors">
                  Memory Care
                </Link>
              </li>
              <li>
                <Link href="/independent-living" className="hover:text-primary transition-colors">
                  Independent Living
                </Link>
              </li>
              <li>
                <Link href="/nursing-homes" className="hover:text-primary transition-colors">
                  Nursing Homes
                </Link>
              </li>
              <li>
                <Link href="/senior-apartments" className="hover:text-primary transition-colors">
                  Senior Apartments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call us 24/7</p>
                  <a href="tel:8005552273" className="hover:text-primary transition-colors">
                    (800) 555-CARE
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email us</p>
                  <a
                    href="mailto:info@careconnectinc.com"
                    className="hover:text-primary transition-colors"
                  >
                    info@careconnectinc.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Serving</p>
                  <p>Communities Nationwide</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Care Connect. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
