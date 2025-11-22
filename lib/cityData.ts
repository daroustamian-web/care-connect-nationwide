import citiesData from '@/data/cities.json'
import facilitiesData from '@/data/facilities.json'

export interface CityData {
  city: string
  state: string
  stateAbbrev: string
  slug: string
  population: number
  seniorPopulation: number
  searchVolume: number
  avgCostLow: number
  avgCostHigh: number
  facilityCount: number
  county: string
  description: string
  neighborhoods: string[]
}

export interface FacilityAddress {
  street: string
  city: string
  state: string
  zip: string
  neighborhood: string
}

export interface FacilityCoordinates {
  lat: number
  lng: number
}

export interface FacilityPricing {
  low: number
  high: number
  currency: string
  period: string
}

export interface Facility {
  id: string
  name: string
  address: FacilityAddress
  coordinates: FacilityCoordinates
  phone: string
  email: string
  website: string
  rating: number
  reviewCount: number
  pricing: FacilityPricing
  careLevels: string[]
  amenities: string[]
  bedCount: number
  staffToResidentRatio: string
  yearEstablished: number
  licenseNumber: string
  acceptsMedicaid: boolean
  acceptsMedicare: boolean
  petPolicy: string
  description: string
  citySlug: string
  stateAbbrev: string
  lastUpdated: string
}

export function getAllCities(): CityData[] {
  return citiesData as CityData[]
}

export function getCityData(stateParam: string, citySlug: string): CityData | null {
  const cities = getAllCities()
  const stateAbbrev = stateParam.toUpperCase()

  const city = cities.find(
    (c) => c.slug === citySlug && c.stateAbbrev.toUpperCase() === stateAbbrev
  )

  return city || null
}

export function getCitiesByState(stateAbbrev: string): CityData[] {
  const cities = getAllCities()
  return cities.filter((c) => c.stateAbbrev.toUpperCase() === stateAbbrev.toUpperCase())
}

export function getRelatedCities(cityData: CityData, limit: number = 6): CityData[] {
  const cities = getAllCities()

  // Get cities from same state, excluding current city
  const sameState = cities.filter(
    (c) => c.stateAbbrev === cityData.stateAbbrev && c.slug !== cityData.slug
  )

  // Get cities with similar costs from different states
  const similarCost = cities.filter(
    (c) =>
      c.slug !== cityData.slug &&
      c.stateAbbrev !== cityData.stateAbbrev &&
      Math.abs(c.avgCostLow - cityData.avgCostLow) < 500
  )

  // Combine and limit
  const related = [...sameState.slice(0, 4), ...similarCost.slice(0, 2)]
  return related.slice(0, limit)
}

export function getPopularCities(limit: number = 10): CityData[] {
  const cities = getAllCities()
  return cities
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, limit)
}

export function getAffordableCities(limit: number = 10): CityData[] {
  const cities = getAllCities()
  return cities
    .sort((a, b) => a.avgCostLow - b.avgCostLow)
    .slice(0, limit)
}

export function getAllStates(): { name: string; abbrev: string; cityCount: number }[] {
  const cities = getAllCities()
  const statesMap = new Map<string, { name: string; count: number }>()

  cities.forEach((city) => {
    if (statesMap.has(city.stateAbbrev)) {
      const existing = statesMap.get(city.stateAbbrev)!
      existing.count++
    } else {
      statesMap.set(city.stateAbbrev, {
        name: city.state,
        count: 1,
      })
    }
  })

  const states = Array.from(statesMap.entries()).map(([abbrev, data]) => ({
    name: data.name,
    abbrev,
    cityCount: data.count,
  }))

  return states.sort((a, b) => b.cityCount - a.cityCount)
}

// Facility query functions

export function getAllFacilities(): Facility[] {
  return facilitiesData as Facility[]
}

export function getFacilitiesByCity(citySlug: string, limit?: number): Facility[] {
  const facilities = getAllFacilities().filter((f) => f.citySlug === citySlug)
  return limit ? facilities.slice(0, limit) : facilities
}

export function getFacilitiesByState(stateAbbrev: string, limit?: number): Facility[] {
  const facilities = getAllFacilities().filter(
    (f) => f.stateAbbrev.toUpperCase() === stateAbbrev.toUpperCase()
  )
  return limit ? facilities.slice(0, limit) : facilities
}

export function getFacilityById(id: string): Facility | null {
  const facilities = getAllFacilities()
  return facilities.find((f) => f.id === id) || null
}

export function searchFacilities(params: {
  citySlug?: string
  stateAbbrev?: string
  priceMin?: number
  priceMax?: number
  careLevel?: string
  neighborhood?: string
  amenity?: string
  petFriendly?: boolean
  acceptsMedicaid?: boolean
  minRating?: number
  limit?: number
}): Facility[] {
  let facilities = getAllFacilities()

  if (params.citySlug) {
    facilities = facilities.filter((f) => f.citySlug === params.citySlug)
  }

  if (params.stateAbbrev) {
    facilities = facilities.filter(
      (f) => f.stateAbbrev.toUpperCase() === params.stateAbbrev!.toUpperCase()
    )
  }

  if (params.priceMin !== undefined) {
    facilities = facilities.filter((f) => f.pricing.low >= params.priceMin!)
  }

  if (params.priceMax !== undefined) {
    facilities = facilities.filter((f) => f.pricing.high <= params.priceMax!)
  }

  if (params.careLevel) {
    facilities = facilities.filter((f) => f.careLevels.includes(params.careLevel!))
  }

  if (params.neighborhood) {
    facilities = facilities.filter((f) => f.address.neighborhood === params.neighborhood)
  }

  if (params.amenity) {
    facilities = facilities.filter((f) => f.amenities.includes(params.amenity!))
  }

  if (params.petFriendly !== undefined) {
    facilities = facilities.filter((f) => f.petPolicy === 'Pet-Friendly')
  }

  if (params.acceptsMedicaid !== undefined) {
    facilities = facilities.filter((f) => f.acceptsMedicaid === params.acceptsMedicaid)
  }

  if (params.minRating !== undefined) {
    facilities = facilities.filter((f) => f.rating >= params.minRating!)
  }

  // Sort by rating (highest first) by default
  facilities.sort((a, b) => b.rating - a.rating)

  return params.limit ? facilities.slice(0, params.limit) : facilities
}

export function getTopRatedFacilities(citySlug?: string, limit: number = 10): Facility[] {
  let facilities = getAllFacilities()

  if (citySlug) {
    facilities = facilities.filter((f) => f.citySlug === citySlug)
  }

  return facilities
    .sort((a, b) => {
      // Sort by rating first, then by review count
      if (b.rating !== a.rating) {
        return b.rating - a.rating
      }
      return b.reviewCount - a.reviewCount
    })
    .slice(0, limit)
}

export function getFacilityStats(citySlug?: string) {
  let facilities = getAllFacilities()

  if (citySlug) {
    facilities = facilities.filter((f) => f.citySlug === citySlug)
  }

  const stats = {
    total: facilities.length,
    averageRating: facilities.reduce((sum, f) => sum + f.rating, 0) / facilities.length,
    totalReviews: facilities.reduce((sum, f) => sum + f.reviewCount, 0),
    priceRange: {
      min: Math.min(...facilities.map((f) => f.pricing.low)),
      max: Math.max(...facilities.map((f) => f.pricing.high)),
      average: facilities.reduce((sum, f) => sum + f.pricing.low, 0) / facilities.length,
    },
    careLevelDistribution: {} as Record<string, number>,
    acceptsMedicaid: facilities.filter((f) => f.acceptsMedicaid).length,
    acceptsMedicare: facilities.filter((f) => f.acceptsMedicare).length,
    petFriendly: facilities.filter((f) => f.petPolicy === 'Pet-Friendly').length,
  }

  // Count care levels
  facilities.forEach((f) => {
    f.careLevels.forEach((level) => {
      stats.careLevelDistribution[level] = (stats.careLevelDistribution[level] || 0) + 1
    })
  })

  return stats
}
