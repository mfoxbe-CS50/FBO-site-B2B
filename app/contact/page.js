import ContactForm from "./ContactForm";

const CAL_LINK = "https://cal.eu/michel-fox-berens/30min";

export const metadata = {
  title: "Contact | Fox Berens Operations",
  description:
    "Contactez Fox Berens Operations pour un appel discovery de 30 minutes. Agents IA pour opérations finance régulée FR/CH, sous contrainte FINMA et GDPR.",
  openGraph: {
    title: "Contact | Fox Berens Operations",
    description: "Réservez un appel discovery de 30 minutes.",
    images: [{ url: "/og/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,178,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Un appel de 30 minutes pour voir si <span className="gradient-text">on travaille ensemble.</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Pas de pitch commercial. On regarde votre workflow le plus douloureux, j'estime ce qui se ferait, et vous décidez si on va plus loin.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="gradient-border rounded-2xl p-8">
                <h2 className="text-xl font-bold text-light mb-2">Envoyer un message</h2>
                <p className="text-sm text-muted mb-6">
                  Décrivez en quelques lignes votre workflow ou votre contrainte compliance. Réponse sous 24 heures ouvrées.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Booking CTA */}
              <div className="gradient-border rounded-2xl p-8 glow-accent">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-light mb-2">Appel discovery</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  Réservez directement un créneau de 30 minutes. On regarde un de vos workflows ops et j'estime ce qui se ferait.
                </p>
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-dark font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                >
                  Réserver un créneau
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12l7-7M5 5h7v7" />
                  </svg>
                </a>
              </div>

              {/* Contact Info */}
              <div className="gradient-border rounded-2xl p-8">
                <h3 className="text-lg font-bold text-light mb-4">Coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                    <div>
                      <p className="text-sm text-light">Email</p>
                      <a href="mailto:michel@fox-berens.com" className="text-sm text-accent hover:underline">
                        michel@fox-berens.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                    <div>
                      <p className="text-sm text-light">Localisation</p>
                      <p className="text-sm text-muted">Ferney-Voltaire, France</p>
                      <p className="text-sm text-muted">Grand Genève</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <div>
                      <p className="text-sm text-light">Disponibilité</p>
                      <p className="text-sm text-muted">Lundi - Vendredi, 9h - 18h CET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="pb-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-light">Réserver directement</h2>
                <p className="mt-2 text-sm text-muted">
                  30 minutes, sans pitch. Choisissez un créneau qui vous convient.
                </p>
              </div>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                Ouvrir dans un nouvel onglet
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-dark-border bg-dark">
              <iframe
                src={CAL_LINK}
                title="Réservation appel discovery"
                loading="lazy"
                className="w-full h-[720px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
