'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { LocaleSwitcher } from './LocaleSwitcher'

export function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'fr'

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/pricing`, label: t('pricing') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href={`/${locale}`} className="text-xl font-bold text-foreground">
          LeadForge<span className="text-primary">AI</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <a
            href={`/${locale}/dashboard`}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t('signup')}
          </a>
        </div>
      </div>
    </header>
  )
}
