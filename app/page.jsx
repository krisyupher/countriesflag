'use client'

import { useCountries } from './context/CountriesContext'
import SearchBar from './components/SearchBar'
import CountryCard from './components/CountryCard'
import styles from './page.module.css'

export default function Home() {
  const { filteredList, isLoading, error } = useCountries()

  if (isLoading) {
    return (
      <main className={styles.main}>
        <div className={styles.loading}>Loading countries...</div>
      </main>
    )
  }

  if (error) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>Error: {error}</div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SearchBar />

        {filteredList.length === 0 ? (
          <div className={styles.noResults}>
            No countries found. Try adjusting your search or filter.
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredList.map(country => (
              <CountryCard key={country.numericCode} country={country} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
