'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Check,
  ChevronRight,
  Home,
  MapPin,
  Phone,
  Sparkles,
  SprayCanIcon as Spray,
   Users,
  Warehouse,
  AtSign,
} from "lucide-react"
import BeforeAfterSlider from "./before-after-slider"
import { useLanguage } from "./contexts/LanguageContext"
import { translations } from "./translations"
import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    }
  }
}

export default function LandingPage() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-white backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-x-20">
            <Link href="#" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-secondary" />
              <span className="text-xl font-bold">ROOT</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-secondary">
              {t.nav.services}
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-secondary">
              {t.nav.projects}
            </Link>
            <Link href="#before-after" className="text-sm font-medium hover:text-secondary">
              {t.nav.beforeAfter}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-secondary">
              {t.nav.about}
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-secondary">
              {t.nav.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-white hover:text-secondary hover:bg-primary/80"
              aria-label="Switch Language"
              onClick={toggleLanguage}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </Button>
            <Link href="#contact">
            <Button 
            className="bg-secondary text-primary hover:bg-accent">{t.hero.bookNow}</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t.hero.title}
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    {t.hero.subtitle}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg" className="bg-secondary text-primary hover:bg-accent gap-1">
                      {t.hero.bookNow} <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white text-primary hover:bg-secondary border-secondary"
                    >
                      {t.hero.ourServices}
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary" />
                  <span>{t.hero.features.eco}</span>
                  <span className="mx-2">•</span>
                  <Check className="h-4 w-4 text-secondary" />
                  <span>{t.hero.features.insured}</span>
                  <span className="mx-2">•</span>
                  <Check className="h-4 w-4 text-secondary" />
                  <span>{t.hero.features.guarantee}</span>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src="https://rb.gy/j4a1qr?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Clean home interior"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">{t.nav.services}</div>
                <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                  {t.services.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.services.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border border-secondary overflow-hidden">
                <CardHeader className="text-center">
                  <Home className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">{t.services.cards.residential.title}</CardTitle>
                  <CardDescription>
                    {t.services.cards.residential.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-secondary overflow-hidden">
                <CardHeader className="text-center">
                  <Warehouse className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">{t.services.cards.commercial.title}</CardTitle>
                  <CardDescription>
                    {t.services.cards.commercial.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-secondary overflow-hidden">
                <CardHeader className="text-center">
                  <Spray className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">{t.services.cards.deep.title}</CardTitle>
                  <CardDescription>
                    {t.services.cards.deep.description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-secondary overflow-hidden">
                <CardHeader className="text-center">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle className="text-primary">{t.services.cards.specialized.title}</CardTitle>
                  <CardDescription>
                    {t.services.cards.specialized.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">{t.nav.projects}</div>
                <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                  {t.projects.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.projects.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://rb.gy/l235c8"
                  width={400}
                  height={300}
                  alt="Clean modern kitchen after professional cleaning"
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3">
                  <h3 className="font-medium text-primary">{t.projects.items.kitchen.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.projects.items.kitchen.type}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://rb.gy/kcoqmi"
                  width={400}
                  height={300}
                  alt="Clean modern bathroom after professional cleaning"
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3">
                  <h3 className="font-medium text-primary">{t.projects.items.bathroom.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.projects.items.bathroom.type}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://rb.gy/73olzu"
                  width={400}
                  height={300}
                  alt="Post-construction cleaning"
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3">
                  <h3 className="font-medium text-primary">{t.projects.items.construction.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.projects.items.construction.type}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://rb.gy/6saqnv"
                  width={400}
                  height={300}
                  alt="Restaurant cleaning"
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3">
                  <h3 className="font-medium text-primary">{t.projects.items.restaurant.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.projects.items.restaurant.type}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://rb.gy/yn55i5"
                  width={400}
                  height={300}
                  alt="Carpet cleaning project"
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3">
                  <h3 className="font-medium text-primary">{t.projects.items.carpet.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.projects.items.carpet.type}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                    src="https://rb.gy/r7635e"
                  width={400}
                  height={300}
                  alt="Office cleaning project"
                  className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3">
                  <h3 className="font-medium text-primary">{t.projects.items.office.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.projects.items.office.type}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section id="before-after" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">{t.nav.beforeAfter}</div>
                <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
                  {t.beforeAfter.title}
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {t.beforeAfter.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12 space-y-16">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary text-center">{t.beforeAfter.items.kitchen}</h3>
                <div className="flex justify-center">
                  <BeforeAfterSlider
                    beforeImage="/placeholder.svg?height=400&width=700"
                    afterImage="/placeholder.svg?height=400&width=700"
                    beforeAlt="Kitchen before cleaning"
                    afterAlt="Kitchen after cleaning"
                    height={400}
                    width={700}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary text-center">{t.beforeAfter.items.office}</h3>
                <div className="flex justify-center">
                  <BeforeAfterSlider
                    beforeImage="/placeholder.svg?height=400&width=700"
                    afterImage="/placeholder.svg?height=400&width=700"
                    beforeAlt="Office before cleaning"
                    afterAlt="Office after cleaning"
                    height={400}
                    width={700}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary text-center">{t.beforeAfter.items.bathroom}</h3>
                <div className="flex justify-center">
                  <BeforeAfterSlider
                    beforeImage="/placeholder.svg?height=400&width=700"
                    afterImage="/placeholder.svg?height=400&width=700"
                    beforeAlt="Bathroom before cleaning"
                    afterAlt="Bathroom after cleaning"
                    height={400}
                    width={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">{t.nav.about}</div>
                  <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">{t.about.title}</h2>
                  <p className="text-muted-foreground md:text-xl">
                    {t.about.subtitle}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {t.about.story.part1}
                  </p>
                  <p className="text-muted-foreground">
                    {t.about.story.part2}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-primary">500+</span>
                      <span className="text-sm text-muted-foreground">{t.about.stats.clients}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-primary">20+</span>
                      <span className="text-sm text-muted-foreground">{t.about.stats.team}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-primary">8</span>
                      <span className="text-sm text-muted-foreground">{t.about.stats.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="ROOT cleaning team"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">{t.nav.contact}</div>
                  <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">{t.contact.title}</h2>
                  <p className="text-muted-foreground md:text-xl">
                    {t.contact.subtitle}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <Card className="border-secondary">
                  <CardHeader>
                    <CardTitle className="text-primary">{t.contact.form.title}</CardTitle>
                    <CardDescription>
                      {t.contact.form.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="min-h-[600px]">
                    <iframe
                      src="https://calendly.com/discordfarma1"
                      width="100%"
                      height="600"
                      frameBorder="0"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-y-8 md:gap-y-0 md:gap-x-16 text-center md:text-left">
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-secondary" />
                <span className="text-xl font-bold">ROOT</span>
              </div>
              <p className="text-sm text-white/80">Professional cleaning services for homes and businesses.</p>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-sm font-medium text-secondary">Services</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#projects" className="text-sm text-white/80 hover:text-secondary">
                  Residential Cleaning
                </Link>
                <Link href="#projects" className="text-sm text-white/80 hover:text-secondary">
                  Commercial Cleaning
                </Link>
                <Link href="#projects" className="text-sm text-white/80 hover:text-secondary">
                  Deep Cleaning
                </Link>
                <Link href="#projects" className="text-sm text-white/80 hover:text-secondary">
                  Window Cleaning
                </Link>
                <Link href="#projects" className="text-sm text-white/80 hover:text-secondary">
                  Carpet Cleaning
                </Link>
              </nav>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-sm font-medium text-secondary">About us</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#projects" className="text-sm text-white/80 hover:text-secondary">
                  Our projects
                </Link>
                <Link href="#about" className="text-sm text-white/80 hover:text-secondary">
                About us
                </Link>
                <Link href="#contact" className="text-sm text-white/80 hover:text-secondary">
                 Contact us
                </Link>
                <Link href="/impressum" className="text-sm text-white/80 hover:text-secondary">
                  Impressum        
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} ROOT Cleaning Services. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-secondary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-secondary">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-secondary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
