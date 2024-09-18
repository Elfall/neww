import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance & Edu App',
  description: 'Manage your finances and education',
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
