import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Senior Care Services in San Diego County | In-Home Care',
  description: 'Compassionate, reliable in-home senior care in San Diego County. Our highly trained caregivers provide the support your loved ones need, so you can get the peace of mind you deserve.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
