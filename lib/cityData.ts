import citiesData from '@/data/cities.json'

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
