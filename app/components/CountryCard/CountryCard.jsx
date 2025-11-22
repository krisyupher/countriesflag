import Link from 'next/link'
import styles from './CountryCard.module.scss'

export default function CountryCard({ country }) {
  return (
    <Link href={`/detalle/${country.name}`}>
      <div className={styles.card}>
        <div className={styles.flagContainer}>
          <span className={styles.flag}>{country.flag}</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{country.name}</h2>
          <div className={styles.info}>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital || 'N/A'}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
