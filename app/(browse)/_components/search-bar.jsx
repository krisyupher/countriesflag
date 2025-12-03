'use client'

import { useState } from 'react'
import styles from './search-bar.module.scss'

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function SearchBar({ onSearchChange, onRegionChange }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    onSearchChange(term)
  }

  const handleRegionChange = (e) => {
    const region = e.target.value
    onRegionChange(region === 'All' ? '' : region)
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
