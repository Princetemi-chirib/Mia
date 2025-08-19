import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mia Malkova - Personal Tour Booking',
  description: 'Book your exclusive experience with Mia Malkova. Private engagements, social appearances, and luxury companionship worldwide.',
  keywords: 'Mia Malkova, tour, booking, companionship, luxury, private engagements',
  authors: [{ name: 'Mia Malkova' }],
  openGraph: {
    title: 'Mia Malkova - Personal Tour Booking',
    description: 'Book your exclusive experience with Mia Malkova. Private engagements, social appearances, and luxury companionship worldwide.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
