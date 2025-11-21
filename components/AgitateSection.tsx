'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Heart, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: AlertCircle,
    text: 'Constant worry and anxiety',
  },
  {
    icon: TrendingDown,
    text: 'Savings dwindling from unexpected expenses',
  },
  {
    icon: Heart,
    text: 'Relationship strain with your parent',
  },
  {
    icon: Clock,
    text: 'No time for yourself or your family',
  },
]

export default function AgitateSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-light/20 to-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">THE REALITY</p>
            <h2 className="section-heading">
              It's More Than Just a Full-Time Job. It's Your Life.
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-12">
              <p>
                Every day is a tightrope walk. You're trying to be a good son or daughter, a good
                parent, a good employee... but you feel like you're failing at everything. You see
                your savings dwindle from unexpected expenses, and you wonder how much longer you
                can keep this up.
              </p>
              <p>
                Your relationship with your parent is changing. The joy and laughter are being
                replaced by tension and frustration. You're becoming a caregiver, not a child. And
                the thought of a nursing home feels like a betrayal, but you're running out of
                options.
              </p>
            </div>
          </motion.div>

          {/* Pain Points Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <point.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{point.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
