'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Assisted Living', href: '/assisted-living' },
    { name: 'Memory Care', href: '/memory-care' },
    { name: 'Independent Living', href: '/independent-living' },
    { name: 'Resources', href: '/resources' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Care<span className="text-primary">Connect</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <a
            href="tel:8005552273"
            className="hidden lg:flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            (800) 555-CARE
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:8005552273"
                className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                (800) 555-CARE
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
