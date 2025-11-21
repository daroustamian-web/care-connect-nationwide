'use client'

import { motion } from 'framer-motion'
import { Calendar, ClipboardList, Users, Heart } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: 'Schedule a Free Consultation',
    description:
      'Click the button below to schedule a no-obligation call with one of our care coordinators.',
  },
  {
    number: 2,
    icon: ClipboardList,
    title: 'Create a Custom Care Plan',
    description:
      'We\'ll work with you to create a personalized care plan that meets your parent\'s needs and your budget.',
  },
  {
    number: 3,
    icon: Users,
    title: 'Meet Your Caregiver',
    description:
      'We\'ll match your parent with a caregiver who is not only highly skilled but also a great personality fit.',
  },
  {
    number: 4,
    icon: Heart,
    title: 'Start Care & Get Peace of Mind',
    description:
      'Your parent starts receiving the care they need, and you can finally relax.',
  },
]

export default function HowItWorksSection() {
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
          <p className="section-label">GETTING STARTED</p>
          <h2 className="section-heading">Getting Started is Easy</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                {step.number}
              </div>

              <div className="card pt-12">
                <div className="bg-primary-light w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-primary-light" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
