import "./globals.css";

export const metadata = {
  title: "Fox Berens Operations | Generation de leads B2B propulsee par l'IA",
  description: "Agence de generation de leads B2B alimentee par l'IA pour les PME du Grand Geneve et du bassin franco-suisse.",
  openGraph: {
    title: "Fox Berens Operations",
    description: "Generation de leads B2B propulsee par l'IA pour les PME du Grand Geneve.",
    url: "https://fox-berens-site.vercel.app",
    siteName: "Fox Berens Operations",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fox Berens Operations",
    description: "Generation de leads B2B propulsee par l'IA.",
    images: ["/og/home.png"],
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
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className="shrink-0">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.6"/>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M22 42 L32 18 L42 42 Z" fill="currentColor"/>
      <path d="M28 38 L32 28 L36 38 Z" fill="#0A0E1A"/>
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
          <a href="/services" className="hover:text-light transition-colors">Services</a>
          <a href="/about" className="hover:text-light transition-colors">A propos</a>
          <a href="/blog" className="hover:text-light transition-colors">Blog</a>
          <a href="/contact" className="hover:text-light transition-colors">Contact</a>
        </div>

        <a
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-dark font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Reserver un appel
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
      <label htmlFor="mobile-menu" className="cursor-pointer text-light p-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </label>
      <div className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300">
        <label htmlFor="mobile-menu" className="absolute top-4 right-4 cursor-pointer text-light p-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </label>
        <a href="/services" className="text-2xl font-semibold text-light hover:text-accent transition-colors">Services</a>
        <a href="/about" className="text-2xl font-semibold text-light hover:text-accent transition-colors">A propos</a>
        <a href="/blog" className="text-2xl font-semibold text-light hover:text-accent transition-colors">Blog</a>
        <a href="/contact" className="text-2xl font-semibold text-light hover:text-accent transition-colors">Contact</a>
        <a href="/contact" className="bg-accent text-dark font-semibold px-8 py-3 rounded-lg text-lg">Reserver un appel</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5 text-accent">
              <BadgeMark size={36} />
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-light tracking-tight">
                Fox Berens
              </span>
            </a>
            <p className="mt-3 text-muted text-sm max-w-md">
              Generation de leads B2B propulsee par l'IA pour les PME du Grand Geneve et du bassin franco-suisse.
            </p>
            <p className="mt-4 text-xs text-muted/60">Propulse par l'IA</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-light mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="/services" className="hover:text-light transition-colors">Services</a>
              <a href="/about" className="hover:text-light transition-colors">A propos</a>
              <a href="/blog" className="hover:text-light transition-colors">Blog</a>
              <a href="/contact" className="hover:text-light transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-light mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="mailto:hello@fox-berens.com" className="hover:text-accent transition-colors">hello@fox-berens.com</a>
              <p>Ferney-Voltaire, France</p>
              <p>Grand Geneve</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-dark-border text-center text-xs text-muted/60">
          &copy; {new Date().getFullYear()} Fox Berens Operations. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}
