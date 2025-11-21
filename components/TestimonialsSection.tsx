'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I was at my wit\'s end before I found them. My mom has dementia and it was just too much for me to handle on my own. The caregiver they sent is a godsend. My mom is happier, and I can finally sleep at night.',
    author: 'Sarah K.',
    location: 'Chula Vista, CA',
  },
  {
    quote:
      'My dad is so stubborn and refused help from anyone. But the caregiver won him over. She\'s patient, kind, and he actually looks forward to her visits. It\'s taken so much pressure off of me.',
    author: 'David L.',
    location: 'La Mesa, CA',
  },
  {
    quote:
      'The care coordinators really listened to our needs and found the perfect match for my mother. She has mobility issues and needs someone patient and gentle. We couldn\'t be happier with the service.',
    author: 'Maria G.',
    location: 'National City, CA',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-br from-primary-light/20 to-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="section-heading">What Families in San Diego Are Saying</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <Quote className="w-12 h-12 text-primary-light mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
