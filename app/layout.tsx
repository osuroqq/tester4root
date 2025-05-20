import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'ROOT Cleaning Services',
  description: 'Professional cleaning services for homes and businesses',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
