'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const benefits = [
  'Your parents stay safe and happy in their own home',
  'Professional, vetted caregivers you can trust',
  'Be their child again, not just their caregiver',
  'Customized care plans for your family\'s needs',
  'Peace of mind knowing they\'re in good hands',
]

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Caregiver helping senior with daily activities at home"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="section-label">OUR PROMISE</p>
            <h2 className="section-heading">
              You Don't Have to Do This Alone. We're Here to Help.
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Imagine a life where your parents are safe, happy, and thriving in the comfort of
                their own home. Imagine having the freedom to be their son or daughter again, not
                just their caregiver. Imagine peace of mind.
              </p>
              <p>
                That's what we provide. We offer compassionate, professional in-home care services
                that are tailored to your family's unique needs. Our highly trained and vetted
                caregivers provide the support your parents need, so you can get the break you
                deserve.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary-light p-1 rounded-full mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-800 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="#contact" className="btn-primary">
              Get Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
