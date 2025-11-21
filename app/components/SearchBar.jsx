'use client'

import { useState } from 'react'
import { useCountries } from '../context/CountriesContext'
import styles from './SearchBar.module.css'

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const { filterByName, filterByRegion } = useCountries()

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    filterByName(term)
  }

  const handleRegionChange = (e) => {
    const region = e.target.value
    if (region === 'All') {
      filterByRegion('')
    } else {
      filterByRegion(region)
    }
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.input}
        />
      </div>

      <select onChange={handleRegionChange} className={styles.select}>
        {REGIONS.map(region => (
          <option key={region} value={region === 'All' ? '' : region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  )
}
