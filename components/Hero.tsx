'use client'

import { Phone, Mail, MapPin, Play, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const contactCards = [
  {
    icon: Phone,
    title: 'Call us',
    info: '(619) 555-0123',
    linkText: 'Give us a call',
    linkHref: 'tel:6195550123',
  },
  {
    icon: Mail,
    title: 'Email us',
    info: 'care@yoursite.com',
    linkText: 'Send us an email',
    linkHref: 'mailto:care@yoursite.com',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    info: 'San Diego County',
    linkText: 'View our locations',
    linkHref: '#contact',
  },
]

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-cream to-cream" />
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">SENIOR CARE SERVICES</p>
            <h1 className="section-heading">
              Give Your Parents the Care They Deserve, and Get Your Life Back
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              Compassionate, reliable in-home senior care in San Diego County. Our highly trained
              caregivers provide the support your loved ones need, so you can get the peace of mind
              you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <button className="btn-secondary text-lg">
                <Play className="w-5 h-5" />
                Watch our video
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80"
              alt="Professional caregiver assisting happy senior at home"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="card group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-light p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <card.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-600 mb-2">{card.info}</p>
                  <Link
                    href={card.linkHref}
                    className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center gap-1 group"
                  >
                    {card.linkText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
