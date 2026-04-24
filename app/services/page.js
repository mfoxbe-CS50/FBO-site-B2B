export const metadata = {
  title: "Services | Fox Berens Operations",
  description: "Decouvrez nos 4 formules de generation de leads B2B : audit, lead gen manage, chatbot IA et performance. Pour les PME du Grand Geneve.",
  openGraph: {
    title: "Services | Fox Berens Operations",
    description: "4 formules pour accelerer votre acquisition client B2B avec l'IA.",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    tier: "01",
    name: "Audit & Setup",
    tagline: "Comprendre avant d'agir",
    price: "2 000 a 4 000 CHF",
    priceNote: "Projet one-shot",
    desc: "On commence par un diagnostic complet de votre pipeline commercial actuel. Ou perdez-vous des leads ? Quels canaux sont sous-exploites ? Quels outils manquent ? A l'issue, vous recevez une feuille de route IA personnalisee avec des recommandations actionnables.",
    includes: [
      "Audit de votre pipeline commercial existant",
      "Analyse de votre stack actuel (CRM, emailing, site web)",
      "Benchmark de vos concurrents en prospection",
      "Feuille de route IA avec priorites et budget",
      "Atelier de restitution de 2 heures",
    ],
    color: "accent",
  },
  {
    tier: "02",
    name: "Lead Gen Manage",
    tagline: "Votre machine a leads, cle en main",
    price: "4 000 CHF/mois",
    priceNote: "Engagement 3 mois minimum",
    desc: "On prend en charge l'integralite de votre prospection sortante. Scraping de donnees, enrichissement, sequences d'outreach multicanal (email, LinkedIn, telephone) et scoring predictif. Vous recevez des leads qualifies prets a convertir.",
    includes: [
      "Scraping et enrichissement de donnees ciblees",
      "Sequences d'outreach multicanal automatisees",
      "Scoring predictif par IA pour prioriser les leads",
      "Reporting hebdomadaire avec KPIs cles",
      "Optimisation continue des sequences",
      "Integration avec votre CRM existant",
    ],
    color: "cyan",
    featured: true,
  },
  {
    tier: "03",
    name: "Chatbot IA",
    tagline: "Un commercial qui ne dort jamais",
    price: "3 000 CHF setup",
    priceNote: "+ 500 CHF/mois maintenance",
    desc: "Un agent conversationnel IA deploye sur votre site web qui qualifie les visiteurs, repond a leurs questions et capture leurs coordonnees. Il travaille 24/7, y compris le week-end et les jours feries.",
    includes: [
      "Conception et entrainement de l'agent IA",
      "Integration sur votre site web existant",
      "Personnalisation du ton et des reponses",
      "Qualification automatique des leads",
      "Notifications en temps reel",
      "Tableau de bord de suivi des conversations",
    ],
    color: "violet",
  },
  {
    tier: "04",
    name: "Performance",
    tagline: "On partage le risque",
    price: "1 500 CHF/mois + commission",
    priceNote: "Paiement au lead qualifie",
    desc: "Le modele ideal pour les entreprises qui veulent minimiser le risque. Un retainer mensuel reduit, complete par une commission sur chaque lead qualifie genere. Nos interets sont parfaitement alignes avec les votres.",
    includes: [
      "Toutes les prestations du Lead Gen Manage",
      "Retainer mensuel reduit",
      "Commission uniquement sur leads qualifies",
      "Definition conjointe des criteres de qualification",
      "Transparence totale sur les metriques",
      "Revue mensuelle de performance",
    ],
    color: "accent",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Des formules <span className="gradient-text">claires et actionnables</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Chaque formule repond a un besoin precis. Que vous debutiez en prospection B2B ou que vous cherchiez a passer a l'echelle, nous avons la solution adaptee.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`gradient-border rounded-2xl p-8 sm:p-10 ${s.featured ? "glow-accent" : ""}`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">Tier {s.tier}</span>
                    {s.featured && (
                      <span className="text-xs font-semibold bg-cyan/10 text-cyan px-2.5 py-1 rounded-full">Populaire</span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-light mb-1">{s.name}</h2>
                  <p className="text-muted text-sm mb-4">{s.tagline}</p>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                </div>
                <div className="lg:w-80 shrink-0">
                  <div className="bg-dark rounded-xl p-6 border border-dark-border">
                    <p className="text-2xl font-bold text-light mb-1">{s.price}</p>
                    <p className="text-xs text-muted mb-6">{s.priceNote}</p>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Ce qui est inclus</h4>
                    <ul className="space-y-2">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-light/80">
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5"><path d="M5 12l5-5-5-5"/></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent text-dark font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm"
                    >
                      Demander un devis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions <span className="gradient-text">frequentes</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Combien de temps avant de voir les premiers resultats ?", a: "En general, les premieres leads qualifiees arrivent dans les 2 a 4 semaines apres le lancement des campagnes. L'optimisation est continue et les resultats s'ameliorent avec le temps." },
              { q: "Est-ce que ca fonctionne pour mon secteur ?", a: "Notre approche est adaptable a tout secteur B2B. Nous avons de l'experience dans la tech, les services financiers, le conseil et l'industrie. Lors de l'appel decouverte, on evalue ensemble la faisabilite." },
              { q: "Quels outils utilisez-vous ?", a: "Nous utilisons un stack IA proprietaire combinant Apollo, Instantly, Expandi, Make.com, et des modeles de langage avances pour le scoring et la personnalisation. Le tout s'integre avec votre CRM existant." },
              { q: "Puis-je changer de formule en cours de route ?", a: "Absolument. Nos formules sont concues pour evoluer avec vos besoins. Beaucoup de clients commencent par l'Audit et passent ensuite au Lead Gen Manage." },
            ].map((faq, i) => (
              <div key={i} className="gradient-border rounded-xl p-6">
                <h3 className="font-semibold text-light mb-2">{faq.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
