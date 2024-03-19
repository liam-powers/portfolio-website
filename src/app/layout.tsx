import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import NavLinks from './components/NavLinks'
import Footer from './components/Footer'

const jb = Merriweather({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Bass Harbor',
  description: 'Bass Harbor | Find your dream instrument',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PRIVATE_GA_TRACKING_ID} />
      <body className={jb.className}>
        <NavLinks />
        {children}
      </body>
      <Footer />
    </html>
  )
}
