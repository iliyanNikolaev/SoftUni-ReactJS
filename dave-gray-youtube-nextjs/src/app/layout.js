import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='navbar'>
        <Link href='/' className="nav-link">Home</Link>
          <Link href='/about' className="nav-link">About</Link>
          <Link href='/fetching' className="nav-link">Fetching</Link>
        </nav>

        {children}
      </body>
    </html>
  )
}
