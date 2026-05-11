export const metadata = {
  title: "Blog | Fox Berens Operations",
  description: "Strategies, analyses et retours d'experience sur la prospection B2B et l'IA appliquee a la generation de leads.",
  openGraph: {
    title: "Blog | Fox Berens Operations",
    description: "Articles sur la prospection B2B, l'IA et la generation de leads.",
    images: [{ url: "/og/og-image.png", width: 1200, height: 630 }],
  },
};

const articles = [
  {
    slug: "pme-romandes-perdent-clients",
    title: "Pourquoi 80% des PME romandes perdent des clients sans le savoir",
    category: "Strategie",
    date: "24 avril 2026",
    readTime: "5 min",
    excerpt: "La majorite des PME en Suisse romande n'ont aucun systeme structure de suivi des leads. Pas de CRM, pas de sequences de relance, pas de scoring. Resultat : des dizaines d'opportunites passent entre les mailles du filet chaque mois.",
    content: [
      "Le constat est alarmant mais pas surprenant. D'apres nos analyses terrain, 8 PME sur 10 dans le bassin lemanique n'ont aucun processus formalise pour suivre leurs prospects. Les cartes de visite recoltees en salon finissent dans un tiroir. Les demandes de devis recues par email sont traitees une fois, puis oubliees si le client ne relance pas.",
      "Le probleme n'est pas un manque de prospects. C'est un manque de systeme. Sans CRM, impossible de savoir ou en est chaque opportunite. Sans sequences de relance automatisees, les leads tiedissent en quelques jours. Sans scoring, vos commerciaux passent autant de temps sur un prospect froid que sur un lead pret a signer.",
      "La solution n'est pas forcement complexe. Un CRM correctement configure, des sequences email de relance et un minimum de tracking suffisent a recuperer 20 a 30% de leads qui seraient autrement perdus. L'IA peut aller plus loin en automatisant le scoring et en personnalisant chaque interaction.",
      "Chez Fox Berens, on voit regulierement des PME doubler leur taux de conversion simplement en structurant leur pipeline. Pas besoin d'un budget marketing enorme. Il faut un systeme, de la discipline et les bons outils.",
    ],
  },
  {
    slug: "ia-prospection-b2b-2026",
    title: "L'IA dans la prospection B2B : ce qui marche vraiment en 2026",
    category: "IA & Tech",
    date: "24 avril 2026",
    readTime: "7 min",
    excerpt: "Entre le battage mediatique et la realite terrain, qu'est-ce qui fonctionne concretement dans la prospection B2B assistee par l'IA ? On a teste, mesure, et voici ce qu'on a retenu apres des centaines de campagnes.",
    content: [
      "En 2026, l'IA n'est plus un gadget marketing. C'est un outil operationnel qui, bien utilise, transforme radicalement l'efficacite de la prospection B2B. Mais attention : tout ne marche pas, et les promesses des vendeurs d'outils depassent souvent la realite.",
      "Ce qui marche : le scoring predictif. En analysant les signaux d'intention (visites site, engagement LinkedIn, telechargements), l'IA identifie les prospects les plus susceptibles de convertir. Nos campagnes montrent un taux de conversion 3x superieur sur les leads scores par IA par rapport a une approche classique.",
      "Ce qui marche aussi : la personnalisation a l'echelle. Les modeles de langage permettent de generer des messages d'outreach personnalises pour chaque prospect, en tenant compte de son secteur, sa fonction, ses enjeux recents. Le resultat : des taux de reponse de 15 a 25% contre 2 a 5% pour du cold email generique.",
      "Ce qui ne marche pas encore : le full-auto sans supervision. L'IA genere, mais un humain doit valider. Les campagnes 100% automatisees produisent des faux positifs, des messages inappropries et des erreurs de ciblage. L'approche hybride humain + IA reste la plus performante.",
    ],
  },
  {
    slug: "signaux-prospection-reset",
    title: "5 signaux que votre prospection B2B a besoin d'un reset",
    category: "Diagnostic",
    date: "24 avril 2026",
    readTime: "4 min",
    excerpt: "Taux de reponse en chute libre, pipeline vide depuis 3 mois, dependance au bouche-a-oreille... Si vous reconnaissez ces signaux, il est temps de repenser votre approche de A a Z.",
    content: [
      "Signal 1 : Votre taux de reponse aux cold emails est passe sous les 2%. Si vos messages finissent systematiquement sans reponse, le probleme est soit dans le ciblage, soit dans le message, soit dans les deux. Un audit de vos sequences revele generalement des erreurs de segmentation et des messages trop generiques.",
      "Signal 2 : Votre pipeline depend du bouche-a-oreille. Le referral est precieux, mais imprevisible. Si 80% de vos nouveaux clients viennent de recommandations, un trimestre sans referral peut mettre votre tresorerie en danger. Il vous faut un canal de prospection actif et reproductible.",
      "Signal 3 : Vous ne savez pas combien de leads vous generez par mois. Pas de tracking = pas de pilotage. Si vous ne pouvez pas repondre a la question 'combien de leads qualifies avons-nous genere ce mois-ci ?', vous pilotez a l'aveugle.",
      "Signal 4 : Vos commerciaux passent plus de temps a chercher des prospects qu'a vendre. Si votre equipe de vente passe 60% de son temps sur la recherche et 40% sur la vente, le ratio est inverse. L'automatisation de la recherche et du premier contact libere du temps pour ce qui compte : la relation commerciale.",
      "Signal 5 : Vous n'avez pas change votre approche depuis 2 ans. Le marche evolue, les outils evoluent, les comportements des acheteurs evoluent. Une strategie de prospection figee depuis 2024 est probablement obsolete. Le moment de repenser, c'est maintenant.",
    ],
  },
];

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,178,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Blog <span className="gradient-text">Fox Berens</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Strategies, analyses et retours d'experience sur la prospection B2B et l'IA appliquee a la generation de leads.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {articles.map((post, i) => (
            <article key={i} className="gradient-border rounded-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-72 shrink-0 bg-gradient-to-br from-dark-card via-dark-light to-dark-card flex items-center justify-center p-8">
                  <span className="text-7xl font-bold text-dark-border font-[family-name:var(--font-heading)]">0{i + 1}</span>
                </div>
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-muted">{post.date}</span>
                    <span className="text-xs text-muted">{post.readTime} de lecture</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-light mb-3 leading-snug">{post.title}</h2>
                  <p className="text-muted leading-relaxed mb-6">{post.excerpt}</p>

                  <details className="group">
                    <summary className="text-accent text-sm font-medium cursor-pointer hover:underline inline-flex items-center gap-1 list-none">
                      Lire l'article complet
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-open:rotate-90"><path d="M5 12l7-7M5 5h7v7"/></svg>
                    </summary>
                    <div className="mt-6 space-y-4 text-muted leading-relaxed border-t border-dark-border pt-6">
                      {post.content.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Restez informe des <span className="gradient-text">dernieres strategies</span>
          </h2>
          <p className="text-muted mb-8">
            Un article par semaine sur la prospection B2B, l'IA et la generation de leads. Pas de spam, que du contenu actionnable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-light placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
            <button className="bg-accent text-dark font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors text-sm whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
