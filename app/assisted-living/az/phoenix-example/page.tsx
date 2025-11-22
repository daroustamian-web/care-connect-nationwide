import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PhoenixCityHero from '@/components/city/phoenix/PhoenixCityHero'
import PhoenixDeepContent from '@/components/city/phoenix/PhoenixDeepContent'
import PhoenixNeighborhoods from '@/components/city/phoenix/PhoenixNeighborhoods'
import PhoenixCostBreakdown from '@/components/city/phoenix/PhoenixCostBreakdown'
import CityFAQ from '@/components/city/CityFAQ'
import CityCTA from '@/components/city/CityCTA'

// Hard-coded Phoenix data for the example
const phoenixData = {
  city: 'Phoenix',
  state: 'Arizona',
  stateAbbrev: 'AZ',
  slug: 'phoenix',
  population: 1680992,
  seniorPopulation: 245000,
  searchVolume: 3600,
  avgCostLow: 3800,
  avgCostHigh: 5200,
  facilityCount: 89,
  county: 'Maricopa County',
  description: "Phoenix, Arizona's largest city and the 5th largest in the United States, offers excellent senior living options with warm weather year-round.",
  neighborhoods: ['Scottsdale', 'Paradise Valley', 'Tempe', 'Mesa', 'Glendale']
}

export const metadata: Metadata = {
  title: 'Assisted Living in Phoenix, AZ | Compare 89+ Facilities (2025) - Care Connect',
  description: 'Find the best assisted living in Phoenix, Arizona. Compare 89 facilities, costs ($3,800-$5,200/month), reviews, and neighborhoods. Free expert guidance for Phoenix families.',
  keywords: [
    'assisted living phoenix',
    'phoenix assisted living',
    'senior living phoenix az',
    'assisted living facilities phoenix',
    'phoenix az assisted living cost',
    'best assisted living phoenix',
    'scottsdale assisted living',
    'mesa assisted living',
    'phoenix memory care'
  ],
}

export default function PhoenixExamplePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero with Lead Form */}
        <PhoenixCityHero cityData={phoenixData} />

        {/* Deep Content Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <PhoenixDeepContent cityData={phoenixData} />
          </div>
        </section>

        {/* Neighborhoods */}
        <PhoenixNeighborhoods cityData={phoenixData} />

        {/* Cost Breakdown */}
        <PhoenixCostBreakdown cityData={phoenixData} />

        {/* FAQ Section */}
        <CityFAQ cityData={phoenixData} />

        {/* Final CTA */}
        <CityCTA cityData={phoenixData} />
      </main>
      <Footer />
    </>
  )
}
