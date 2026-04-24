export const metadata = {
  title: "A propos | Fox Berens Operations",
  description: "Decouvrez Fox Berens Operations : 24 ans d'experience IT en services financiers, combine a l'IA pour la generation de leads B2B.",
  openGraph: {
    title: "A propos | Fox Berens Operations",
    description: "24 ans d'IT en finance + IA = votre avantage competitif en prospection B2B.",
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
};

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              L'expertise IT au service de votre <span className="gradient-text">croissance B2B</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Fox Berens Operations nait d'un constat simple : les PME du Grand Geneve meritent les memes outils de prospection que les grandes entreprises. L'IA rend cela possible.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-64 shrink-0">
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-accent/20 via-cyan/10 to-violet/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-dark-border font-[family-name:var(--font-heading)]">MFB</span>
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <h3 className="text-lg font-bold text-light">Michel Fox Berens</h3>
                  <p className="text-sm text-accent">Fondateur</p>
                </div>
              </div>
              <div className="flex-1 space-y-4 text-muted leading-relaxed">
                <p>
                  24 ans d'experience en operations IT dans les services financiers, dont une large partie chez Bloomberg a Londres, ou j'ai gere des equipes et des infrastructures critiques a l'echelle EMEA.
                </p>
                <p>
                  Trilingue francais, anglais et portugais, j'ai travaille a travers l'Europe, le Moyen-Orient et l'Afrique. Cette experience m'a appris une chose : les meilleures solutions combinent rigueur operationnelle et innovation technologique.
                </p>
                <p>
                  Installe a Ferney-Voltaire, a la croisee de la France et de la Suisse, j'ai fonde Fox Berens Operations pour mettre l'IA et l'automatisation au service des PME locales. Mon objectif : donner aux petites et moyennes entreprises du Grand Geneve les outils de prospection qui etaient jusqu'ici reserves aux grands groupes.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {["IT Operations", "EMEA", "Bloomberg", "Services financiers", "IA & Automatisation", "Trilingue FR/EN/PT"].map((tag) => (
                    <span key={tag} className="text-xs bg-dark px-3 py-1.5 rounded-full border border-dark-border text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FBO */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi <span className="gradient-text">Fox Berens</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Rigueur operationnelle",
                desc: "24 ans en production IT pour les marches financiers. On ne laisse rien au hasard : chaque processus est documente, monitore et optimise.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "IA pragmatique",
                desc: "Pas de buzzwords. On deploie l'IA la ou elle apporte une valeur mesurable : scoring, personnalisation, automatisation des taches repetitives.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Ancrage local",
                desc: "Base a Ferney-Voltaire, on connait le tissu economique du Grand Geneve, ses codes et ses acteurs. Votre partenaire est a 30 minutes, pas a 3 fuseaux horaires.",
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
              },
              {
                title: "Transparence totale",
                desc: "Reporting clair, KPIs partages, pas de boite noire. Vous savez exactement ce qu'on fait, pourquoi, et quels resultats ca genere.",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
            ].map((item, i) => (
              <div key={i} className="gradient-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-dark flex items-center justify-center mb-4">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-light mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Notre <span className="gradient-text">stack technologique</span>
          </h2>
          <p className="text-center text-muted mb-12 max-w-xl mx-auto">
            Des outils de pointe, assembles pour maximiser l'efficacite de chaque etape de votre prospection.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Apollo.io", cat: "Donnees" },
              { name: "Instantly", cat: "Email" },
              { name: "Expandi", cat: "LinkedIn" },
              { name: "Make.com", cat: "Automatisation" },
              { name: "HubSpot", cat: "CRM" },
              { name: "Voiceflow", cat: "Chatbot" },
              { name: "n8n", cat: "Workflows" },
              { name: "Claude AI", cat: "LLM" },
              { name: "Airtable", cat: "Base de donnees" },
              { name: "Notion", cat: "Documentation" },
              { name: "Vercel", cat: "Hebergement" },
              { name: "Next.js", cat: "Frontend" },
            ].map((tool, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-4 text-center hover:border-accent/30 transition-colors">
                <p className="text-sm font-medium text-light">{tool.name}</p>
                <p className="text-[10px] text-muted mt-1">{tool.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
