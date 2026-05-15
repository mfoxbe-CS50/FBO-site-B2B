# Fox Berens Operations — Site B2B

Site Next.js 16 (App Router) de **Fox Berens Operations**, **Implementation Practice** d'agents IA pour opérations finance régulée FR/CH. Déployé sur Vercel, domaine `fox-berens.com`.

## Positionnement actuel (depuis 15/05/2026, PR #10 + #11)

**Implementation Practice — agents IA pour ops finance régulée FR/CH** (FINMA, GDPR, EU only).
- ICP : fintech régulées FINMA, family offices boutique, sociétés de gestion mid-market, banques cantonales (BCGE, BCV, BCF et adjacents), gérants indépendants.
- Hook hero : *"Pas un POC de plus. Des agents IA qui passent votre prochain audit interne."*
- Différenciateur dur : **EU only** sans exception (pas de juridiction US, pas de Cloud Act, pas de transfert hors UE).
- Pricing v2 : Audit 15 kCHF · Implementation 25 kCHF · Retainer 8 kCHF/mois · Mini-audit 8 kCHF.
- CTA unique partout : `https://cal.eu/michel-fox-berens/30min`.

**L'ancien positionnement Lead-Gen PME a été killed le 27/04/2026.** Ne JAMAIS le ressortir.

## Règles dures de contenu

### Interdit publiquement
- "140+ sites EMEA", "10 000 clients institutionnels" (règle interne)
- "lead gen", "génération de leads", "prospection B2B PME"
- "PME Grand Genève" comme ICP
- Pictet, Lombard Odier, UBP, Mirabaud, Bordier, Syz (hors scope cible)
- "gouvernance IA" / "AI governance" (positionnement technique uniquement)
- Em-dashes (—), emojis, buzzwords ("transformer", "leverage", "disrupter", "tailored")

### KPIs autorisés (les seuls)
- 99.9% disponibilité de service (Bloomberg)
- 95% CSAT (Bloomberg)
- 24 ans IT ops financial services
- Trilingue FR / EN / PT

### Voix / ton
- Direct, technique, sobre. Opérateur, pas consultant.
- Première personne assumée ("je travaille avec…").
- FR uniquement pour V0 (EN en P1 quand pipeline justifie).
- Pas de mention de PipeVolt AI (pipevolt.eu) — marque distincte.

## Stack
- **Next.js 16** (Turbopack) · **React 19** · **Tailwind CSS 4** (config `@theme` dans `app/globals.css`)
- **Vercel** (hébergement) · **Make.com** EU1 (orchestration form) · **Airtable** (CRM leads) · **Cal.eu** (booking)
- **Notion** (source de vérité opérationnelle + CMS blog)
- JS pur (pas de TypeScript), pas de tests automatisés (site marketing)

## Architecture du site (post-15/05)

Routes : `/` (home one-pager) · `/contact` · sitemap/robots/icon.svg.
- `/services`, `/about`, `/blog` → **redirect 307** vers ancres home (`/#engagement-model`, `/#about`, `/`).
- Sitemap réduit à `/` + `/contact`.
- Header + Footer dans `app/layout.js`. Nav = ancres `#engagement-model`, `#about`, `#faq` + CTA Cal.
- Home structure (10 sections) dans `app/page.js` :
  1. Hero · 2. Problème (3 pains) · 3. Solution (3 piliers, **EU only badge**) · 4. Workflow Inputs→Agents→Outputs · 5. Use cases (5) · 6. Engagement model (3 tiers + Mini-audit) · 7. À propos (photo `/public/michel-fox-berens.jpg`) · 8. Focus régulé · 9. FAQ (6 questions, **EU badge sur Q3**) · 10. CTA final.
- Composants SVG inline réutilisables dans `app/page.js` : `EuFlag`, `EuBadge`, `EuStar`, `Arrow`, `CTAButton`.
- Form contact : `app/contact/ContactForm.js` (client component) → `process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL`.
- Cal embed : iframe sur `/contact#booking`.
- OG image : `public/og/og-image.png` (1200×630) — à retoucher Implementation Practice en P1.

## Pipeline lead (form `/contact`)
```
Form submit → Make webhook → [Airtable Leads CREATE ✅] → [Slack HTTP POST ⚠️ FAIL]
```
- Make scenario `Integration Webhooks` (eu1.make.com, ID 5670255)
- Airtable base `appAOtoZYIBtid2L3`, table Leads `tblMo6mJyOrv5UIif`
- Slack channel `#leads-fox-berens` — **module échoue avec `channel_not_found`**

## Workflow de dev
- Branche par feature : `claude/<topic>-<suffix>`
- PR vers `main`, mergée par l'humain (Vercel auto-deploy : main → prod, branche → preview)
- Commits style : `feat(scope): …` / `fix(scope): …` / `chore(scope): …`
- Toujours `npm run build` avant push (vérifie 10 routes statiques)
- Ne JAMAIS inclure d'identifiants de modèle (ex: `claude-opus-...`) dans les commits/PRs/code

## État au 15/05/2026 (post-DM lundi 18/05)

### ✅ Mergé en prod
- **PR #10** — Refonte landing P0 Implementation Practice (10 sections, pricing v2, photo founder, redirects)
- **PR #11** — Renforcement wording EU only sur sections 3 + 9 FAQ avec drapeau UE SVG

### ⏳ Backlog priorisé

1. **🔥 Fix module Slack du scenario Make** (pré-existant, non bloqué par les PRs site)
   - Erreur run 11/05 17:54:44 : `DataError: channel_not_found (200)`
   - Diagnostic : **PAS le plan free** ; le bot Make ne trouve juste pas `#leads-fox-berens`
   - **Piste A (5 min)** : récupérer Channel ID Slack (`C0XXXXXX` via About canal) → coller dans module Make à la place du nom (actuellement contient `manualy`, typo) → `/invite @<bot Make>` si privé → re-run l'exécution → réactiver le scenario (auto-désactivé)
   - **Piste B (fallback)** : supprimer module Slack natif → Incoming Webhook Slack + module HTTP POST dans Make
   - Critique avant DM lundi : sans alerte temps réel, on rate la fenêtre 24h sur les leads entrants

2. **Confirmer DNS `fox-berens.com` → Vercel** (IP `216.198.79.1` détectée, valider visuel HTTPS)

3. **Version EN minimale** (Hero + Section 6 Engagement) sur route `/en` — copy déjà rédigée dans l'addendum brief

4. **3 articles blog Implementation Practice** déjà écrits dans l'addendum, à intégrer (Notion CMS ou MDX) avec dates suggérées 12/14/16 mai

5. **OG image** dédiée Implementation Practice (la `/public/og/og-image.png` actuelle date du positionnement Lead-Gen)

## Sources de vérité Notion
- **Agency Hub** (master) : https://www.notion.so/34a5ce2ec32e8131a4b1f5a7f1baec49
- **Sprint Board** : https://www.notion.so/33f5ce2ec32e81fe82bcd80fbd90550a
- **Blog DB** (CMS) : `2b4d65679bd5414db590c7331263294f`

## Brand
- Palette : dark `#0A0E1A` · accent mint `#00FFB2` · cyan `#00D4FF` (réduit) · violet `#7C5CFF` (réduit pour banking)
- Fonts : Sora (heading) · DM Sans (body)
- Style : Linear / Vercel / Raycast inspiré, sobre, beaucoup de dark uniforme et de cards

## Principes opérationnels (Agency Hub)
- **Stack JIT** : ajouter un outil seulement si un client le demande ou si manuel devient chronophage. Pas de SaaS "au cas où".
- **Règle anti-discount** : toute objection prix → scope down sur le produit (vers Mini-audit 8k), JAMAIS discount sous 15k sur l'Audit complet.
- Tarif horaire implicite reste constant.

## Pour reprendre rapidement
1. `npm install` puis `npm run dev` → http://localhost:3000
2. Vérifier l'Agency Hub Notion pour journal récent et blockers
3. Si nouvelle feature : créer branche `claude/<topic>`, PR vers main, ne jamais push direct sur main
