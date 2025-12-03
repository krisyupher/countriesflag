import Link from 'next/link'
import { fetchAllCountries } from '../../(browse)/_lib/fetch-countries'
import styles from './page.module.scss'

// Generate static paths for all countries at build time
export async function generateStaticParams() {
  const countries = await fetchAllCountries()

  return countries.map((country) => ({
    name: country.name,
  }))
}

// Server Component - fetches country data at build time
async function fetchCountry(name) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}`,
    {
      next: { revalidate: 3600 }
    }
  )

  if (!response.ok) throw new Error('Country not found')

  const data = await response.json()
  const countryData = data[0]

  return {
    flag: countryData.flag || '',
    name: countryData.name?.common || '',
    official: countryData.name?.official || '',
    nativeName: countryData.nativeName
      ? Object.values(countryData.nativeName)[0]?.common || ''
      : '',
    population: countryData.population || 0,
    region: countryData.region || '',
    subregion: countryData.subregion || '',
    capital: Array.isArray(countryData.capital)
      ? countryData.capital[0] || ''
      : '',
    topLevelDomain: Array.isArray(countryData.tld)
      ? countryData.tld[0] || ''
      : '',
    currencies: countryData.currencies
      ? Object.values(countryData.currencies)
      : [],
    languages: countryData.languages
      ? Object.values(countryData.languages)
      : [],
    borders: countryData.borders || [],
  }
}

export default async function CountryDetailPage({ params }) {
  const { name } = params
  const country = await fetchCountry(name)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backButton}>
          ← Back
        </Link>

        <div className={styles.detailContainer}>
          <div className={styles.flagSection}>
            <span className={styles.largeFlag}>{country.flag}</span>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.title}>{country.name}</h1>
            {country.official && (
              <p className={styles.official}>{country.official}</p>
            )}

            <div className={styles.infoGrid}>
              <div className={styles.infoColumn}>
                <p>
                  <strong>Native Name:</strong> {country.nativeName || 'N/A'}
                </p>
                <p>
                  <strong>Population:</strong>{' '}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion || 'N/A'}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital || 'N/A'}
                </p>
              </div>

              <div className={styles.infoColumn}>
                <p>
                  <strong>Top Level Domain:</strong>{' '}
                  {country.topLevelDomain || 'N/A'}
                </p>
                <p>
                  <strong>Currencies:</strong>{' '}
                  {country.currencies.length > 0
                    ? country.currencies.map(curr => curr.name).join(', ')
                    : 'N/A'}
                </p>
                <p>
                  <strong>Languages:</strong>{' '}
                  {country.languages.length > 0
                    ? country.languages.join(', ')
                    : 'N/A'}
                </p>
              </div>
            </div>

            {country.borders.length > 0 && (
              <div className={styles.bordersSection}>
                <p>
                  <strong>Border Countries:</strong>
                </p>
                <div className={styles.bordersList}>
                  {country.borders.map(border => (
                    <span key={border} className={styles.borderBadge}>
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
