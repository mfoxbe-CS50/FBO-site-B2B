# Fox Berens Operations — Site B2B

Site Next.js 16 (App Router) de **Fox Berens Operations**, agence IA de génération de leads B2B pour PME franco-suisses. Déployé sur Vercel, domaine cible `fox-berens.com`.

## Stack
- **Next.js 16** (Turbopack) · **React 19** · **Tailwind CSS 4**
- **Vercel** (hébergement) · **Make.com** EU1 (orchestration form) · **Airtable** (CRM leads) · **Cal.eu** (booking)
- **Notion** (source de vérité opérationnelle + CMS blog)
- Pas de TypeScript (JS pur), pas de tests automatisés (site marketing)

## Architecture du site
5 pages : `/` (home) · `/services` · `/about` · `/blog` · `/contact`
- Footer + Header dans `app/layout.js`
- Form de contact : `app/contact/ContactForm.js` (client component) → `process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL`
- Cal embed : iframe vers `CAL_LINK` dans `app/contact/page.js`
- OG image : `public/og/og-image.png` (1200×630)
- SEO : `app/sitemap.js` + `app/robots.js`

## Pipeline lead (form `/contact`)
```
Form submit → Make webhook → [Airtable Leads CREATE] → [Slack HTTP POST]
```
- Make scenario `Integration Webhooks` (eu1.make.com, ID 5670255)
- Airtable base `appAOtoZYIBtid2L3`, table Leads `tblMo6mJyOrv5UIif`
- Slack channel `#leads-fox-berens` — actuellement module Slack natif Make (échoue : `channel_not_found`), pivot Incoming Webhook prévu si fix direct du Channel ID ne suffit pas

## Workflow de dev
- Branche par feature : `claude/<topic>-<suffix>`
- PR vers `main`, mergée par l'humain
- Vercel auto-deploy : `main` → production, branches → preview URL
- Commits style : `feat(scope): ...` / `fix(scope): ...` / `chore(scope): ...`
- Toujours `npm run build` avant push (vérifie 8 routes statiques)

## État Sprint 3 MVA (clôturé 11/05/2026)
✅ Cal.eu embed · Form → Make → Airtable (vérifié 12/05) · Repo renommé `FBO-site-B2B` · Metadata canonique · OG image · sitemap/robots
⏳ **À finir prochaine session** :
1. **Fix module Slack du scenario Make** (le pipeline Webhook → Airtable fonctionne, seul Slack échoue)
   - Erreur réelle constatée le 12/05 sur le run du 11/05 17:54:44 : `DataError: channel_not_found (200)` côté module Slack
   - Diagnostic : **PAS un problème de plan free** (la Make Slack app répond bien, code HTTP 200) ; le bot Make ne trouve juste pas le canal `leads-fox-berens` (mauvais nom, canal privé sans invite bot, ou mauvais workspace)
   - Piste A (5 min) : récupérer le Channel ID Slack (`C0XXXXXX` via About du canal), le coller dans le module à la place du nom, `/invite @<bot Make>` si canal privé, re-run l'exécution
   - Piste B (fallback si Piste A échoue) : supprimer module Slack natif → créer Incoming Webhook Slack → ajouter module HTTP POST dans Make
   - Note : champ "Enter a channel ID or name" contient actuellement `manualy` (probable coquille à corriger)
2. Ajouter DNS `www.fox-berens.com` → Vercel (apex confirmé live sur `216.198.79.1` ; le sous-domaine `www` ne résout pas — `curl -I` → 000 le 12/05, record jamais ajouté/propagé)
3. Réactiver scenario Make (auto-désactivé après erreur Slack du 11/05 17:54) — à faire **après** fix item 1, sinon re-échec immédiat

> Planning : bloc « Sprint 3 closeout » programmé samedi 16/05 12:00-13:00. Diagnostic Make/Slack documenté via PR #9 (mergée).

## Sources de vérité Notion
- **Agency Hub** (master) : https://www.notion.so/34a5ce2ec32e8131a4b1f5a7f1baec49
- **Sprint Board** : https://www.notion.so/33f5ce2ec32e81fe82bcd80fbd90550a
- **Blog DB** (CMS) : `2b4d65679bd5414db590c7331263294f`

## Principes opérationnels (extraits Agency Hub)
- **Stack JIT** : ajouter un outil seulement si un client le demande ou si manuel devient chronophage. Pas de SaaS "au cas où".
- **Pas d'em-dashes** dans le contenu site (FR)
- **Pas d'emojis** dans le contenu site (OK dans logs/internes)
- **KPIs autorisés** : 99,9% disponibilité + 95% CSAT uniquement
- **Brand** : dark `#0A0E1A` + accent neon mint `#00FFB2` + Sora (heading) + DM Sans (body)
- **Voice** : opérateur, pas consultant. Direct, sans buzzwords ("transformative", "leverage", "tailored")

## Pour reprendre rapidement
1. `npm install` puis `npm run dev` → http://localhost:3000
2. Vérifier l'Agency Hub pour le journal récent et les blockers
3. Si nouvelle feature : créer branche `claude/<topic>`, PR vers main
