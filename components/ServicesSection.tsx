'use client'

import { motion } from 'framer-motion'
import { Heart, User, Brain, Clock, Shield, Star } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Companion Care',
    description: 'Social interaction, meal preparation, light housekeeping, and more.',
  },
  {
    icon: User,
    title: 'Personal Care',
    description: 'Assistance with bathing, dressing, grooming, and mobility.',
  },
  {
    icon: Brain,
    title: 'Dementia & Alzheimer\'s Care',
    description: 'Specialized care for clients with memory loss.',
  },
  {
    icon: Clock,
    title: 'Respite Care',
    description: 'Short-term relief for family caregivers.',
  },
  {
    icon: Shield,
    title: '24-Hour Care',
    description: 'Around-the-clock care for clients who need constant support.',
  },
  {
    icon: Star,
    title: 'Veterans Care',
    description: 'Specialized care for veterans with VA benefits assistance.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-br from-cream to-primary-light/10">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">OUR SERVICES</p>
          <h2 className="section-heading">A Wide Range of Services</h2>
          <p className="text-xl text-gray-700">
            Comprehensive care tailored to your family's unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="bg-primary-light w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
