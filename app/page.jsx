import { fetchAllCountries } from './(browse)/_lib/fetch-countries'
import CountriesList from './(browse)/_components/countries-list'
import styles from './page.module.scss'

// Root page - same as browse page for static export compatibility
export default async function Home() {
  const countries = await fetchAllCountries()

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CountriesList countries={countries} />
      </div>
    </main>
  )
}
