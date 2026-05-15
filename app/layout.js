import "./globals.css";

const CAL_LINK = "https://cal.eu/michel-fox-berens/30min";

export const metadata = {
  metadataBase: new URL("https://fox-berens.com"),
  title: "Fox Berens Operations | Agents IA qui passent votre audit interne. FINMA, GDPR.",
  description:
    "Pas un POC de plus. Des agents IA qui passent votre prochain audit interne. 24 ans d'IT ops critiques Bloomberg, appliqués aux workflows régulés en Suisse romande et France.",
  openGraph: {
    title: "Agents IA qui passent votre audit interne",
    description:
      "24 ans IT ops Bloomberg, spécialisé workflows régulés FR/CH. Audit, build, maintenance sous contrainte FINMA et GDPR.",
    url: "https://fox-berens.com",
    siteName: "Fox Berens Operations",
    images: [{ url: "/og/og-image.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agents IA qui passent votre audit interne",
    description:
      "24 ans IT ops Bloomberg, spécialisé workflows régulés FR/CH. Sous contrainte FINMA et GDPR.",
    images: ["/og/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function BadgeMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className="shrink-0" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 42 L32 18 L42 42 Z" fill="currentColor" />
      <path d="M28 38 L32 28 L36 38 Z" fill="#0A0E1A" />
    </svg>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-dark/80 border-b border-dark-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 text-accent">
          <BadgeMark size={32} />
          <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-light tracking-tight whitespace-nowrap">
            Fox Berens
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="/#engagement-model" className="hover:text-light transition-colors">Offres</a>
          <a href="/#about" className="hover:text-light transition-colors">À propos</a>
          <a href="/#faq" className="hover:text-light transition-colors">FAQ</a>
        </div>

        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-dark font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Réserver un appel discovery
        </a>

        <MobileMenu />
      </nav>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label htmlFor="mobile-menu" className="cursor-pointer text-light p-2" aria-label="Ouvrir le menu">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </label>
      <div className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300">
        <label htmlFor="mobile-menu" className="absolute top-4 right-4 cursor-pointer text-light p-2" aria-label="Fermer le menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </label>
        <a href="/#engagement-model" className="text-2xl font-semibold text-light hover:text-accent transition-colors">Offres</a>
        <a href="/#about" className="text-2xl font-semibold text-light hover:text-accent transition-colors">À propos</a>
        <a href="/#faq" className="text-2xl font-semibold text-light hover:text-accent transition-colors">FAQ</a>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-dark font-semibold px-8 py-3 rounded-lg text-lg"
        >
          Réserver un appel discovery
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 text-accent">
              <BadgeMark size={36} />
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-light tracking-tight">
                Fox Berens
              </span>
            </a>
            <p className="mt-4 text-muted text-sm max-w-md leading-relaxed">
              Fox Berens Operations. Agents IA pour opérations finance régulée FR/CH.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-light mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="/#engagement-model" className="hover:text-light transition-colors">Offres</a>
              <a href="/#about" className="hover:text-light transition-colors">À propos</a>
              <a href="/#faq" className="hover:text-light transition-colors">FAQ</a>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-light transition-colors">
                Réserver un appel
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-light mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="mailto:michel@fox-berens.com" className="hover:text-accent transition-colors">
                michel@fox-berens.com
              </a>
              <p>Ferney-Voltaire, France</p>
              <p>Grand Genève</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-muted/80">
            Sous contrainte FINMA, GDPR, et exigences d'audit interne.
          </p>
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Fox Berens Operations. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
