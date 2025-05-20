'use client'

import Link from "next/link"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

export default function NotFound() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-white backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">ROOT</span>
          </Link>
          <button
            className="rounded-full text-white hover:text-secondary hover:bg-primary/80 px-4 py-2"
            aria-label="Switch Language"
            onClick={toggleLanguage}
          >
            {language === 'en' ? 'DE' : 'EN'}
          </button>
        </div>
      </header>
      <main className="flex-1 bg-muted py-12 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">404 - Page Not Found</h1>
          <p className="text-muted-foreground mb-6">Sorry, the page you are looking for does not exist.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-primary text-white rounded hover:bg-primary/80 font-semibold transition">Go to Homepage</Link>
        </div>
      </main>
      <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-primary text-white mt-8">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} ROOT Cleaning Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 