'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const CountriesContext = createContext()

export function CountriesProvider({ children }) {
  const [countryList, setCountryList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flag,nativeName,population,capital,region'
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
        setCountryList(normalized)
        setFilteredList(normalized)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching countries:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountries()
  }, [])

  const filterByName = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredList(countryList)
      return
    }
    const filtered = countryList.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredList(filtered)
  }

  const filterByRegion = (region) => {
    if (!region) {
      setFilteredList(countryList)
      return
    }
    const filtered = countryList.filter(country => country.region === region)
    setFilteredList(filtered)
  }

  const value = {
    countryList,
    filteredList,
    isLoading,
    error,
    filterByName,
    filterByRegion,
  }

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  )
}

export function useCountries() {
  const context = useContext(CountriesContext)
  if (!context) {
    throw new Error('useCountries must be used within CountriesProvider')
  }
  return context
}
