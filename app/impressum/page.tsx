import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function Impressum() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-white backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold">ROOT</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-secondary hover:bg-primary/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Impressum</h1>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Legal information and company details
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Angaben gemäß § 5 TMG</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>ROOT Cleaning Services</p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Kontakt</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Telefon: +49 (0) 123 456789</p>
                    <p>E-Mail: info@root-cleaning.de</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Vertreten durch</h2>
                  <p className="text-muted-foreground">Max Mustermann</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Umsatzsteuer-ID</h2>
                  <p className="text-muted-foreground">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                  <p className="text-muted-foreground">DE 123456789</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Handelsregister</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Eintragung im Handelsregister.</p>
                    <p>Registergericht: Amtsgericht Musterstadt</p>
                    <p>Registernummer: HRB 12345</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Max Mustermann</p>
                    <p>Musterstraße 123</p>
                    <p>12345 Musterstadt</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Streitschlichtung</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:text-secondary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
                    <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Haftung für Inhalte</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Haftung für Links</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                    <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-primary">Urheberrecht</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                    <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-secondary" />
              <span className="text-xl font-bold">ROOT</span>
            </div>
            <p className="text-sm text-white/80">© {new Date().getFullYear()} ROOT Cleaning Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 