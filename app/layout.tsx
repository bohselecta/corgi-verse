import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Corgi-verse Software - Build Playfully. Ship Powerfully.',
  description: 'Corgi-verse creates colorful, privacy-first tools for creators and teams. Local engines, shareable experiences, zero cloud lock-in.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
