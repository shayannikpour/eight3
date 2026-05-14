import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav/Nav'
import { Footer } from '@/components/footer/Footer'
import { AgeGate } from '@/components/age-gate/AgeGate'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s · Eight3',
    default: 'Eight3 — a quieter way to arrive',
  },
  description: 'EIGHT3 — a quieter way to arrive. Premium dab pens in five matte colors.',
  openGraph: {
    title: 'Eight3',
    description: 'EIGHT3 — a quieter way to arrive. Premium dab pens in five matte colors.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Eight3' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <AgeGate />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
