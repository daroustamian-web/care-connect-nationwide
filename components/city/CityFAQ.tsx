'use client'

import { CityData } from '@/lib/cityData'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CityFAQProps {
  cityData: CityData
}

interface FAQItem {
  question: string
  answer: string
}

export default function CityFAQ({ cityData }: CityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: `How much does assisted living cost in ${cityData.city}?`,
      answer: `The average cost of assisted living in ${cityData.city} ranges from $${cityData.avgCostLow.toLocaleString()} to $${cityData.avgCostHigh.toLocaleString()} per month. Costs vary based on the level of care needed, room type (private vs. shared), location within ${cityData.city}, and facility amenities. Some communities may offer all-inclusive pricing while others charge à la carte for additional services.`,
    },
    {
      question: `How many assisted living facilities are in ${cityData.city}?`,
      answer: `${cityData.city} has approximately ${cityData.facilityCount} licensed assisted living facilities, ranging from small residential homes to large communities with hundreds of residents. These facilities are distributed across neighborhoods including ${cityData.neighborhoods.slice(0, 3).join(', ')}, and more.`,
    },
    {
      question: `Does ${cityData.state} Medicaid cover assisted living?`,
      answer: `${cityData.state} Medicaid may cover some assisted living costs through waiver programs, but coverage is limited and subject to eligibility requirements based on income and assets. Not all facilities in ${cityData.city} accept Medicaid. We recommend contacting facilities directly to ask about their Medicaid acceptance policies and speaking with a ${cityData.state} Medicaid specialist about your eligibility.`,
    },
    {
      question: `What's the best area in ${cityData.city} for assisted living?`,
      answer: `The best area depends on your priorities. ${cityData.neighborhoods[0]} offers ${cityData.neighborhoods.length > 3 ? 'convenient access to amenities' : 'a great community atmosphere'}, while ${cityData.neighborhoods[1]} may provide ${cityData.neighborhoods.length > 3 ? 'a quieter setting' : 'excellent facilities'}. Consider proximity to family, healthcare facilities, and your loved one's preferences when choosing a location.`,
    },
    {
      question: `Can someone with dementia live in assisted living in ${cityData.city}?`,
      answer: `It depends on the stage of dementia. Early-stage dementia can often be managed in traditional assisted living, but moderate-to-advanced dementia typically requires memory care, which provides specialized support and secure environments. Many facilities in ${cityData.city} offer dedicated memory care wings or units with trained staff and appropriate programming.`,
    },
    {
      question: `Do assisted living facilities in ${cityData.city} allow pets?`,
      answer: `Many assisted living communities in ${cityData.city} are pet-friendly, though policies vary by facility. Some allow cats and small dogs, while others may have restrictions on size, breed, or number of pets. There may be additional pet fees or deposits. Always confirm the pet policy before making a decision.`,
    },
    {
      question: `How do I pay for assisted living in ${cityData.city}?`,
      answer: `Payment options include private pay (savings, retirement accounts), long-term care insurance, Veterans benefits (Aid & Attendance program), ${cityData.state} Medicaid for those who qualify, reverse mortgages, and life insurance conversions. Many ${cityData.city} facilities offer multiple payment options and can help you navigate financial planning.`,
    },
    {
      question: `What should I look for when touring assisted living in ${cityData.city}?`,
      answer: `Key things to observe: staff interaction with residents, cleanliness and maintenance, meal quality (try to visit during lunch or dinner), activity programming, safety features, resident engagement and happiness, staff-to-resident ratios, and the overall atmosphere. Ask about licensing, inspection reports, and staff training. Bring a checklist and visit multiple times at different hours.`,
    },
  ]

  // Generate JSON-LD for FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Common questions about assisted living in {cityData.city}, {cityData.stateAbbrev}
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Speak with an Expert
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
