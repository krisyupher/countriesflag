'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './page.module.css'

export default function CountryDetail({ params }) {
  const router = useRouter()
  const [country, setCountry] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { name } = params

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        )
        if (!response.ok) throw new Error('Country not found')

        const data = await response.json()
        const countryData = data[0]

        const normalized = {
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

        setCountry(normalized)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching country:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountry()
  }, [name])

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← Back
          </Link>
          <div className={styles.loading}>Loading country details...</div>
        </div>
      </main>
    )
  }

  if (error || !country) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← Back
          </Link>
          <div className={styles.error}>
            Error: {error || 'Country not found'}
          </div>
        </div>
      </main>
    )
  }

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
