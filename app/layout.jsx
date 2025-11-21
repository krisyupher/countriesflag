import './globals.css'
import { CountriesProvider } from './context/CountriesContext'
import Header from './components/Header'

export const metadata = {
  title: 'Countries & Flags',
  description: 'Explore countries and their information around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CountriesProvider>
          <Header />
          {children}
        </CountriesProvider>
      </body>
    </html>
  )
}
