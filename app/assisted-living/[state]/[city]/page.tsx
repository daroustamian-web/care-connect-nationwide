import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CityHero from '@/components/city/CityHero'
import CityStats from '@/components/city/CityStats'
import FacilityListings from '@/components/city/FacilityListings'
import LocalGuide from '@/components/city/LocalGuide'
import CityFAQ from '@/components/city/CityFAQ'
import CityCTA from '@/components/city/CityCTA'
import RelatedCities from '@/components/city/RelatedCities'
import { getCityData, getAllCities } from '@/lib/cityData'

interface PageProps {
  params: {
    state: string
    city: string
  }
}

export async function generateStaticParams() {
  const cities = getAllCities()

  return cities.map((city) => ({
    state: city.stateAbbrev.toLowerCase(),
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityData = getCityData(params.state, params.city)

  if (!cityData) {
    return {
      title: 'City Not Found',
    }
  }

  const title = `Assisted Living in ${cityData.city}, ${cityData.stateAbbrev} | Compare ${cityData.facilityCount}+ Facilities (2025)`
  const description = `Find the best assisted living in ${cityData.city}, ${cityData.state}. Compare ${cityData.facilityCount} facilities, costs ($${cityData.avgCostLow.toLocaleString()}-$${cityData.avgCostHigh.toLocaleString()}/month), reviews, and amenities. Free expert guidance.`

  return {
    title,
    description,
    keywords: [
      `assisted living ${cityData.city.toLowerCase()}`,
      `senior living ${cityData.city.toLowerCase()} ${cityData.stateAbbrev.toLowerCase()}`,
      `assisted living facilities ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} assisted living cost`,
      `best assisted living ${cityData.city.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://careconnectinc.com/assisted-living/${params.state}/${params.city}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://careconnectinc.com/assisted-living/${params.state}/${params.city}`,
    },
  }
}

export default function CityPage({ params }: PageProps) {
  const cityData = getCityData(params.state, params.city)

  if (!cityData) {
    notFound()
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Assisted Living in ${cityData.city}, ${cityData.state}`,
    description: cityData.description,
    url: `https://careconnectinc.com/assisted-living/${params.state}/${params.city}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://careconnectinc.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Assisted Living',
          item: 'https://careconnectinc.com/assisted-living',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: cityData.state,
          item: `https://careconnectinc.com/assisted-living/${params.state}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: cityData.city,
          item: `https://careconnectinc.com/assisted-living/${params.state}/${params.city}`,
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <CityHero cityData={cityData} />
        <CityStats cityData={cityData} />
        <FacilityListings cityData={cityData} />
        <LocalGuide cityData={cityData} />
        <CityFAQ cityData={cityData} />
        <RelatedCities cityData={cityData} />
        <CityCTA cityData={cityData} />
        <Footer />
      </main>
    </>
  )
}
