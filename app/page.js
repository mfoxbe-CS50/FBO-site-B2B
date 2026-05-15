import { Fragment } from "react";

const CAL_LINK = "https://cal.eu/michel-fox-berens/30min";

function CTAButton({ children = "Réserver un appel discovery (30 min)", className = "" }) {
  return (
    <a
      href={CAL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-accent text-dark font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors text-base ${className}`}
    >
      {children}
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12l7-7M5 5h7v7" />
      </svg>
    </a>
  );
}

function Arrow({ direction = "right" }) {
  if (direction === "down") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60" aria-hidden="true">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,178,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Agents IA pour opérations finance régulée
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Pas un POC de plus.{" "}
              <span className="gradient-text">Des agents IA qui passent votre prochain audit interne.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
              24 ans d'IT ops critiques Bloomberg, aujourd'hui appliqués aux workflows régulés FR/CH. Sous contrainte FINMA et GDPR, livré on-site Romandie.
            </p>
            <div className="mt-10">
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Problème */}
      <section className="py-20 bg-dark-light border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Le problème n'est plus l'IA.{" "}
              <span className="gradient-text">C'est l'intégration sous contrainte.</span>
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Les solutions IA généralistes ne tiennent pas face aux exigences d'audit, de traçabilité et de souveraineté des données qui structurent votre métier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Vos équipes ops passent 20 à 40 heures par mois et par analyste sur des tâches qui devraient être automatisées.",
                body: "Reporting client multi-custodian en fin de mois. Réconciliation manuelle de positions. Onboarding KYC ralenti par la collecte documentaire. Le manuel coûte du temps senior et introduit du risque opérationnel.",
              },
              {
                title: "Les outils SaaS IA grand public ne passent pas votre compliance.",
                body: "Envoyer des données client sous juridiction US, sans contrôle sur le modèle, sans piste d'audit exploitable, sans isolation tenant. Votre Head of Compliance dit non, et il a raison.",
              },
              {
                title: "Les consultants IA généralistes ne connaissent pas vos workflows.",
                body: "Vous payez des semaines de discovery pour expliquer ce qu'est une réconciliation custodian, un suitability check, ou une déclaration FINMA. Vous voulez quelqu'un qui parle votre métier dès l'appel discovery.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col">
                <span className="text-xs font-mono text-accent mb-4">0{i + 1}</span>
                <h3 className="text-base font-semibold text-light mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Ce que je construis <span className="gradient-text">pour vous.</span>
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Des agents IA spécifiques à vos processus, déployés dans vos systèmes, sous votre contrôle. Pas de plateforme externe, pas de boîte noire, pas de dépendance fournisseur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Verticalisé régulé",
                body: "Spécialisé sur les workflows ops finance régulée FR/CH. Pas de pivot horizontal, pas de catalogue générique.",
              },
              {
                title: "Sous contrainte compliance",
                body: "Architecture compatible FINMA, GDPR, et exigences d'audit interne. Traçabilité complète des décisions agent, logs immuables, isolation tenant.",
              },
              {
                title: "Vous restez propriétaire",
                body: "Le code, les modèles, les données restent chez vous ou sur l'infra de votre choix. Pas de lock-in. Pas de licence par siège.",
              },
            ].map((p, i) => (
              <div key={i} className="gradient-border rounded-xl p-6 flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-mono text-sm">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-light mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Workflow (Inputs → Agents → Outputs) */}
      <section className="py-20 bg-dark-light border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Comment les agents <span className="gradient-text">s'intègrent.</span>
            </h2>
          </div>

          {(() => {
            const columns = [
              {
                title: "Inputs",
                items: [
                  "Excel et CSV (positions, transactions, exports)",
                  "PDF (relevés custodian, contrats, KYC docs)",
                  "Email (instructions client, communications custodian)",
                  "API et bases SQL (core banking, CRM, données marché)",
                  "Documents scannés (OCR)",
                ],
              },
              {
                title: "Agents IA",
                items: [
                  "Extraction et normalisation",
                  "Réconciliation automatique",
                  "Génération de reporting",
                  "Détection d'anomalies et alertes",
                  "Routage et workflow d'approbation",
                  "Audit log complet",
                ],
                accent: true,
              },
              {
                title: "Outputs",
                items: [
                  "Rapports client PDF brandés",
                  "Saisies ERP ou core banking",
                  "Dashboards live",
                  "Alertes Slack ou email",
                  "Workflows d'approbation tracés",
                  "Exports régulateur",
                ],
              },
            ];
            return (
              <>
                <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4">
                  {columns.map((col, i) => (
                    <Fragment key={col.title}>
                      <div
                        className={`rounded-xl p-6 border ${
                          col.accent
                            ? "bg-dark-card border-accent/40 glow-accent"
                            : "bg-dark border-dark-border"
                        }`}
                      >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">{col.title}</h3>
                        <ul className="space-y-2.5">
                          {col.items.map((item) => (
                            <li key={item} className="text-sm text-light/85 leading-snug flex items-start gap-2">
                              <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {i < columns.length - 1 && (
                        <div className="flex items-center justify-center">
                          <Arrow direction="right" />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>

                <div className="lg:hidden flex flex-col gap-4">
                  {columns.map((col, i, arr) => (
              <div key={col.title} className="flex flex-col items-center gap-3">
                <div
                  className={`w-full rounded-xl p-6 border ${
                    col.accent
                      ? "bg-dark-card border-accent/40 glow-accent"
                      : "bg-dark border-dark-border"
                  }`}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">{col.title}</h3>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="text-sm text-light/85 leading-snug flex items-start gap-2">
                        <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < arr.length - 1 && <Arrow direction="down" />}
              </div>
            ))}
                </div>
              </>
            );
          })()}

          <p className="mt-10 text-center text-sm text-muted italic max-w-2xl mx-auto">
            Disponibilité cible: 99.9%. Précision cible: 95%+ selon use case. Délai déploiement: semaines, pas mois.
          </p>
        </div>
      </section>

      {/* Section 5 — Use cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Cas d'usage <span className="gradient-text">typiques.</span>
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Cinq workflows où l'impact est immédiat et chiffrable.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                num: "01",
                title: "Reporting client multi-custodian",
                body: "Consolidation automatique des positions client across custodians, génération PDF brandé, distribution sécurisée. 20-40h/mois économisées par analyste.",
              },
              {
                num: "02",
                title: "Réconciliation positions",
                body: "Matching automatique entre votre book interne et les statements custodian. Identification des breaks, routage vers l'équipe ops, log d'audit complet.",
              },
              {
                num: "03",
                title: "Onboarding KYC",
                body: "Collecte documentaire automatisée, extraction et validation des pièces, screening sanctions et PEP, dossier compliance prêt à revue.",
              },
              {
                num: "04",
                title: "Suitability et adequacy checks",
                body: "Vérification automatique de l'adéquation profil client / produit / risque, déclenchement d'alertes en cas de mismatch, traçabilité réglementaire.",
              },
              {
                num: "05",
                title: "AML alerts triage",
                body: "Première passe automatisée sur les alertes AML, classification false positive vs vraie investigation, escalade équipe avec contexte enrichi.",
              },
            ].map((u) => (
              <div key={u.num} className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
                  <span className="text-accent font-mono text-sm shrink-0">{u.num}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-light mb-2">{u.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{u.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Engagement model */}
      <section id="engagement-model" className="py-20 bg-dark-light border-y border-dark-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Trois façons <span className="gradient-text">de commencer.</span>
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Pas de package surdimensionné. Vous commencez par où ça a du sens pour vous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Tier 1 */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-7 flex flex-col">
              <div>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded-full mb-4">
                  One-shot. 2 semaines.
                </span>
                <h3 className="text-xl font-bold text-light mb-1">Audit AI Ops Readiness</h3>
                <p className="text-2xl font-bold text-light mt-4">À partir de 15 000 CHF</p>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-6 flex-1">
                Cartographie de vos workflows ops candidats. Identification des 3-5 quick wins chiffrés en heures économisées et risque réduit. Roadmap d'implémentation priorisée avec estimation effort et ROI. Livrable conçu pour passer en revue Head of Compliance et auditeur interne.
              </p>
              <div className="mt-5 pt-5 border-t border-dark-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Livrable</p>
                <p className="text-sm text-light/85 leading-relaxed">Document de 15-25 pages + restitution 1h avec votre équipe ops.</p>
              </div>
            </div>

            {/* Tier 2 — Highlighted */}
            <div className="bg-dark-card border-2 border-accent rounded-2xl p-7 flex flex-col glow-accent relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Le plus demandé
              </span>
              <div>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded-full mb-4">
                  6 à 12 semaines.
                </span>
                <h3 className="text-xl font-bold text-light mb-1">Implementation projet</h3>
                <p className="text-2xl font-bold text-light mt-4">À partir de 25 000 CHF</p>
                <p className="text-xs text-muted mt-1">sur devis selon scope</p>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-6 flex-1">
                Build et déploiement d'un agent IA sur un workflow spécifique. Architecture, intégration, tests, mise en production, formation équipe, documentation. Conçu pour passer un audit interne et fournir un log d'audit exploitable dès jour 1.
              </p>
              <div className="mt-5 pt-5 border-t border-dark-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Pour qui</p>
                <p className="text-sm text-light/85 leading-relaxed">Vous avez déjà un use case priorisé et vous voulez du livrable.</p>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-dark-card border border-dark-border rounded-2xl p-7 flex flex-col">
              <div>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded-full mb-4">
                  6 mois minimum.
                </span>
                <h3 className="text-xl font-bold text-light mb-1">Retainer Implementation</h3>
                <p className="text-2xl font-bold text-light mt-4">À partir de 8 000 CHF / mois</p>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-6 flex-1">
                Engagement continu sur l'évolution de votre stack agents IA. Maintenance, nouveaux workflows, amélioration continue, support compliance. Typiquement 1 jour par semaine effectif.
              </p>
              <div className="mt-5 pt-5 border-t border-dark-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">Pour qui</p>
                <p className="text-sm text-light/85 leading-relaxed">Vous voulez un partenaire technique sur la durée, sans recruter en interne.</p>
              </div>
            </div>
          </div>

          {/* Mini-audit alternative */}
          <div className="max-w-3xl mx-auto mt-8 bg-dark border border-dark-border rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-dark-card text-muted px-2.5 py-1 rounded-full border border-dark-border">
                    Mini-audit ciblé · 3-4 jours
                  </span>
                  <span className="text-base font-bold text-light">8 000 CHF</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Version focalisée sur un seul workflow priorisé. Diagnostic et recommandation chiffrée sur un cas d'usage. Pour un go/no-go technique avant d'investir dans un audit complet.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton>Réserver un appel discovery pour voir où commencer</CTAButton>
          </div>
        </div>
      </section>

      {/* Section 7 — À propos */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-cyan/10 to-dark-card flex items-center justify-center border border-dark-border">
                <span className="text-7xl font-bold text-dark-border font-[family-name:var(--font-heading)]">MFB</span>
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-light">Michel Fox Berens</p>
                <p className="text-sm text-accent">Fondateur</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
                24 ans d'IT ops Bloomberg.{" "}
                <span className="gradient-text">Maintenant pour vos opérations.</span>
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                <p>
                  Michel Fox Berens. Senior IT Operations Manager pendant 24 ans chez Bloomberg, en charge de l'infrastructure technique servant les clients institutionnels sur la région EMEA. Disponibilité de service maintenue à 99.9%. Satisfaction client mesurée à 95%.
                </p>
                <p>
                  Ce que j'ai appris à Bloomberg: les systèmes critiques en finance ne tolèrent ni la magie, ni les boîtes noires, ni les promesses non livrées. La même discipline s'applique aux agents IA quand ils touchent un workflow client réel.
                </p>
                <p>
                  Basé à Ferney-Voltaire. Trilingue français-anglais-portugais. Spécialisé sur les opérations finance régulée FR/CH.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { number: "99.9%", label: "disponibilité" },
                  { number: "95%", label: "CSAT" },
                  { number: "24 ans", label: "IT ops" },
                  { number: "FR / EN / PT", label: "3 langues" },
                ].map((s) => (
                  <div key={s.label} className="bg-dark-card border border-dark-border rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-accent mb-1">{s.number}</p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Focus régulé */}
      <section className="py-20 bg-dark-light border-y border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-center mb-10">
            Pourquoi je ne fais pas <span className="gradient-text">de l'IA pour tout le monde.</span>
          </h2>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Un agent IA qui automatise une facturation logistique et un agent qui traite un onboarding KYC ne posent pas les mêmes questions. Le premier optimise un coût. Le second engage votre responsabilité réglementaire.
            </p>
            <p>
              Je travaille uniquement avec des fintech régulées, family offices, sociétés de gestion mid-market, banques cantonales et gérants indépendants. Parce que c'est là que la combinaison contrainte régulée + besoin opérationnel + maturité IT crée le terrain où mon expérience apporte un effet de levier réel.
            </p>
            <p>
              Si votre activité est hors de ce cadre, je préfère vous dire honnêtement que ce n'est pas pour moi.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section id="faq" className="py-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-center mb-12">
            Questions <span className="gradient-text">fréquentes.</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Vous travaillez avec quels types d'établissements ?",
                a: "Fintech régulées FINMA (10 à 50 personnes), family offices boutique, sociétés de gestion mid-market, banques cantonales et caisses d'épargne (BCGE, BCV, BCF et adjacents), gérants indépendants.",
              },
              {
                q: "Vous travaillez avec les grandes banques privées ?",
                a: "Les structures Tier 1 ont des cycles de décision et des process internes qui demandent une structure équipe que je n'ai pas en solo. Je préfère me concentrer sur les structures où je peux livrer vite.",
              },
              {
                q: "Quels modèles IA vous utilisez ?",
                a: "Cela dépend du use case et de la contrainte data. Modèles open-weights hébergés en EU, modèles propriétaires sous DPA, ou stack hybride. La décision se prend après cartographie de vos contraintes compliance.",
              },
              {
                q: "Qui détient le code et les modèles ?",
                a: "Vous. Le code source vous appartient, les modèles fine-tunés sont sur votre infra ou celle de votre choix. Pas de lock-in fournisseur.",
              },
              {
                q: "Délai pour un premier agent en production ?",
                a: "Entre 6 et 12 semaines après signature, en fonction de la complexité du workflow et de l'accès aux systèmes existants.",
              },
              {
                q: "Vous signez des NDA ?",
                a: "Oui. NDA standard avant tout appel discovery si vous le souhaitez.",
              },
            ].map((f, i) => (
              <details key={i} className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4 hover:bg-dark-light/50 transition-colors">
                  <h3 className="text-base font-semibold text-light leading-snug">{f.q}</h3>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5 transition-transform group-open:rotate-45" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-muted leading-relaxed">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — CTA final */}
      <section className="py-24 bg-dark-light border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Un appel de 30 minutes pour voir si{" "}
            <span className="gradient-text">on travaille ensemble.</span>
          </h2>
          <p className="text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            Pas de pitch commercial. On regarde votre workflow le plus douloureux, j'estime ce qui se ferait, et vous décidez si on va plus loin.
          </p>
          <CTAButton />
          <p className="mt-6 text-sm text-muted">
            Ou écrivez-moi:{" "}
            <a href="mailto:michel@fox-berens.com" className="text-accent hover:underline">
              michel@fox-berens.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
