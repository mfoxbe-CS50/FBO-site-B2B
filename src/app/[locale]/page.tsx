import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function LandingPage() {
  const t = useTranslations()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t('hero.subtitle')}</p>
          <div className="mt-10 flex gap-4">
            <a
              href="#"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#"
              className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
