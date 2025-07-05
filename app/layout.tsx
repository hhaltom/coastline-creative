<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coastline Creative - Creative Solutions That Make Waves',
  description: 'We craft exceptional digital experiences that help your brand stand out. From brand identity to web development, we\'re your creative partner.',
  keywords: 'creative agency, web development, brand identity, digital marketing, design',
  authors: [{ name: 'Coastline Creative' }],
  openGraph: {
    title: 'Coastline Creative - Creative Solutions That Make Waves',
    description: 'We craft exceptional digital experiences that help your brand stand out.',
    url: 'https://coastlinecreative.com',
    siteName: 'Coastline Creative',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Coastline Creative',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coastline Creative - Creative Solutions That Make Waves',
    description: 'We craft exceptional digital experiences that help your brand stand out.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
