'use client'

import { useState, useMemo } from 'react'
import SearchBar from './search-bar'
import CountryCard from './country-card'
import styles from './countries-list.module.scss'

export default function CountriesList({ countries }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  // Filter countries based on search and region
  const filteredCountries = useMemo(() => {
    let filtered = countries

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by region
    if (selectedRegion) {
      filtered = filtered.filter(country => country.region === selectedRegion)
    }

    return filtered
  }, [countries, searchTerm, selectedRegion])

  return (
    <>
      <SearchBar
        onSearchChange={setSearchTerm}
        onRegionChange={setSelectedRegion}
      />

      {filteredCountries.length === 0 ? (
        <div className={styles.noResults}>
          No countries found. Try adjusting your search or filter.
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredCountries.map(country => (
            <CountryCard key={country.numericCode} country={country} />
          ))}
        </div>
      )}
    </>
  )
}
