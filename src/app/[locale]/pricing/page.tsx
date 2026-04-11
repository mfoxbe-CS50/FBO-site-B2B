import { useTranslations } from 'next-intl'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function PricingPage() {
  const t = useTranslations()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center px-4 py-24">
        <h1 className="text-4xl font-bold tracking-tight">{t('nav.pricing')}</h1>
        <p className="mt-4 text-muted-foreground">{t('common.comingSoon')}</p>
      </main>
      <Footer />
    </div>
  )
}
