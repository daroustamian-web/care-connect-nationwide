'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">YOUR STRUGGLE</p>
            <h2 className="section-heading">
              Are You Drowning in the Demands of Caregiving?
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                You're juggling a career, your own family, and now, the full-time job of caring for
                your aging parent. The late-night calls, the constant worry, the endless to-do
                list... it's exhausting.
              </p>
              <p>
                You're not alone. Millions of adult children feel the same way. You love your
                parents, but you're stretched to your breaking point. You feel guilty for wanting
                your life back, but the stress is taking a toll on your health, your work, and your
                relationships.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80"
              alt="Concerned family member thinking about senior care options"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
