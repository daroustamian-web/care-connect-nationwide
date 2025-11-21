'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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

export default function BookingSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">BOOKING</p>
          <h2 className="section-heading">Book an On-Site or Virtual Appointment</h2>
          <p className="text-xl text-gray-700">
            Schedule your free, no-obligation care consultation today. We'll discuss your family's
            unique needs and create a custom care plan that works for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-light p-3 rounded-xl group-hover:bg-primary transition-colors">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
