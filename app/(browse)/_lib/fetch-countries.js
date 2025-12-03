/**
 * Server-side data fetching utility for countries
 * Uses Countries Now API - https://countriesnow.space/api/v0.1/countries
 */

export async function fetchAllCountries() {
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries',
      {
        next: { revalidate: 3600 } // Cache for 1 hour in production
      }
    )

    if (!response.ok) throw new Error('Failed to fetch countries')

    const data = await response.json()

    // Countries Now API returns data in a different structure
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid API response structure')
    }

    const normalized = data.data.map(country => ({
      name: country.name || '',
      numericCode: country.iso3 || '',
      flag: country.flag || '🏳️', // Fallback emoji flag if not available
      nativeName: country.name || '',
      population: country.population || 0,
      capital: country.capital || '',
      region: country.region || ''
    }))

    return normalized
  } catch (error) {
    console.error('Error fetching countries from Countries Now API:', error)
    throw new Error('Failed to fetch countries. Please try again later.')
  }
}
