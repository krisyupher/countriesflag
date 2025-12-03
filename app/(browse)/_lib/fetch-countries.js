/**
 * Server-side data fetching utility for countries
 * Extracted from CountriesContext for use in Server Components
 */

export async function fetchAllCountries() {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,flag,nativeName,population,capital,region,cca3',
    {
      next: { revalidate: 3600 } // Cache for 1 hour in production
    }
  )

  if (!response.ok) throw new Error('Failed to fetch countries')

  const data = await response.json()

  const normalized = data.map(country => ({
    name: country.name?.common || '',
    numericCode: country.cca3 || '',
    flag: country.flag || '',
    nativeName: country.nativeName ? Object.values(country.nativeName)[0]?.common || '' : '',
    population: country.population || 0,
    capital: Array.isArray(country.capital) ? country.capital[0] || '' : '',
    region: country.region || ''
  }))

  return normalized
}
