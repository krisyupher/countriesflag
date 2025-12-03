import './globals.scss'
import Header from './components/Header/Header'

export const metadata = {
  title: 'Countries & Flags',
  description: 'Explore countries and their information around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
