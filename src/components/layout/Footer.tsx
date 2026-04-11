import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-xl font-bold text-foreground">
              LeadForge<span className="text-primary">AI</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{t('description')}</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">{t('product')}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">{t('company')}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">{t('legal')}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  {t('terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LeadForge AI. {t('copyright')}
        </div>
      </div>
    </footer>
  )
}
