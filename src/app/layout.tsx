import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jb = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liam Powers Portfolio',
  description: 'Liam Powers | Personal Portfolio | Software Engineer, Musician, Student at Northwestern University | Created with React/Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jb.className}>{children}</body>
    </html>
  )
}
