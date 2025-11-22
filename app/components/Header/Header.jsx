import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🌍 Countries & Flags
        </Link>
      </div>
    </header>
  )
}
