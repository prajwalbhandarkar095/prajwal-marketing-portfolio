import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prajwal Marketing Portfolio',
  description: 'B2B AI Marketing Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
