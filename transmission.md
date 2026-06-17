# Transmission — Site MP2A Fermetures
*État au 2026-06-17 — À lire en début de prochaine session*

---

## Objectif du projet

Site vitrine professionnel pour **MP2A Fermetures** (portails, volets roulants, portes de garage, motorisation, dépannage, clôtures). Premier site web de l'entreprise — présence actuelle = Instagram uniquement (@mp2afermetures).

**But :** générer des demandes de devis et des appels entrants depuis les Alpes-Maritimes (06).

- Stack : Nuxt 3 SSG + CSS natif + GSAP (abandonné — remplacé par CSS gate pure)
- Hébergement cible : Hostinger (FTP, public_html)
- GitHub Pages actif : `darkvador061-ux.github.io/mp2a-fermetures`
- Repo GitHub : `https://github.com/darkvador061-ux/mp2a-fermetures`
- Branche unique : `master` — impossible de créer des PRs, pousser directement

---

## État actuel du code

### Pages en place
| Page | État |
|------|------|
| `/` (accueil) | ✅ Complète — Hero + TrustSection + Services + Réalisations V3 + Contact |
| `/services` | ✅ Complète — bandeau + 6 services + Particuliers/Professionnels + CTA |
| `/realisations` | ✅ Complète — bandeau + grille 6 vidéos + lightbox + CTA rouge bas |
| `/contact` | ✅ Complète — formulaire Formspree (endpoint placeholder !) + sidebar |
| `/mentions-legales` | ✅ Créée — 10 sections LCEN 2004, champs manquants balisés `.todo` |
| `/politique-de-confidentialite` | ✅ Créée — 9 sections RGPD art. 13, tableau données, 6 droits |
| `/avis` | ❌ Abandonnée définitivement — client n'a pas de Google Business |

### Composants en place
| Fichier | État |
|---------|------|
| `components/layout/AppHeader.vue` | ✅ Sticky blanc, logo icon+text, nav desktop, burger mobile — les 2 numéros affichés dans le menu burger |
| `components/layout/AppFooter.vue` | ✅ Fond anthracite, 3 colonnes, badges SVG légaux, liens /mentions-legales et /politique |
| `components/sections/HeroSection.vue` | ✅ Photo `hero-villa.jpg` + overlay + gate CSS + parallax + badges 3 colonnes mobile |
| `components/sections/TrustSection.vue` | ✅ 4 stats animées + 7 marques partenaires |
| `components/sections/ServicesSection.vue` | ✅ 6 services, prop `preview`, animations scroll v-motion, prefers-reduced-motion |
| `components/sections/RealisationsSection.vue` | ✅ Grille éditoriale accueil + grille 6 vidéos page complète, lightbox image+vidéo, zoom hover, animations scroll v-motion |
| `components/sections/ContactSection.vue` | ✅ Formspree réel (endpoint XXXXXXXX à remplacer !), mention RGPD, hasError secours |

### Médias en place
| Fichier | Emplacement | Usage |
|---------|------------|-------|
| `hero-villa.jpg` | `public/` | Fond hero section accueil |
| `logo-icon.png` | `public/` | Partie icône du logo (header) |
| `logo-text.png` | `public/` | Partie texte du logo — `filter: brightness(0)` pour fond blanc |
| `logo-white.png` | `public/` | Logo blanc complet (footer) |
| `favicon.svg` | `public/` | Favicon MP2A + FERMETURES fond rouge |
| `robots.txt` | `public/` | Allow: / + Sitemap: https://mp2afermetures.fr/sitemap.xml |
| `sav-depannage-motorisation.jpg` | `public/images/` | Réalisations accueil |
| `realisation-portail-industriel.jpg` | `public/images/` | Réalisations accueil |
| `realisation-portail-coulissant.jpg` | `public/images/` | Réalisations accueil |
| `realisation-portes-garage-parking.jpg` | `public/images/` | Réalisations accueil |
| `portail-coulissant-serigraphie.mp4` | `public/videos/` | Page /réalisations |
| `porte-garage-basculante-sinetik.mp4` | `public/videos/` | Page /réalisations |
| `portail-battant-sinetik-clinique-nice.mp4` | `public/videos/` | Page /réalisations |
| `remplacement-porte-basculante-sinetik.mp4` | `public/videos/` | Page /réalisations |
| `remplacement-montants-porte-garage-doitrand.mp4` | `public/videos/` | Page /réalisations |
| `barrieres-bft-maxima-ultra-68.mp4` | `public/videos/` | Page /réalisations |

---

## Ce qui a changé depuis le début

### Session 1 (2026-06-15)
Architecture Nuxt 3, CSS variables, AppHeader/Footer, Hero V1, Services, Contact, Réalisations V1, GitHub Pages, fix logos baseURL

### Session 2 (2026-06-16)
Hero V2 (Click-to-Call, badge doré), RealisationsSection V3 (grille éditoriale), page /realisations complète, /avis abandonnée, push master

### Session 3 (2026-06-17) — audit UI/UX + responsive + légal
1. **Audit UI/UX Pro Max** → 7 corrections toutes appliquées
2. **Palette** : ajout anthracite/aluminium, variables sémantiques, rayons réduits (2–4px)
3. **Header** : blanc + logo composé (icon + text + filter:brightness(0)), 72px→108px
4. **Hero** : photo `hero-villa.jpg`, parallax JS synchronisé CSS (base 70%), gate CSS pure, badges grille mobile
5. **TrustSection** créée et insérée dans `pages/index.vue`
6. **Pages légales** : /mentions-legales + /politique-de-confidentialite
7. **Footer** : fond anthracite, badges SVG, liens légaux
8. **ContactSection** : Formspree réel, RGPD, hasError secours téléphone
9. **Responsive complet** : 0 scroll horizontal validé sur toutes les pages

### Session 4 (2026-06-17) — SEO + animations + lightbox vidéo
1. **Fix burger mobile** : les 2 numéros (Anthony + Alexandre) affichés dans le menu
2. **Audit SEO** : score 6/10 → 8.5/10
3. **Open Graph** : og:title, og:description, og:image, og:url sur les 4 pages
4. **JSON-LD LocalBusiness** : schema.org sur l'accueil (adresse, tél, zone, Instagram)
5. **robots.txt** créé
6. **Favicon SVG** : fond rouge, "MP2A" + "FERMETURES"
7. **Animations scroll v-motion** : RealisationsSection header + items (stagger 80-90ms)
8. **Zoom hover** : scale(1.04) sur items galerie accueil, scale(1.03) sur cards /realisations
9. **Lightbox vidéo** : page /realisations — clic sur card → lightbox avec vidéo autoplay + controls + navigation
10. **Nouvelle réalisation** : barrières BFT Maxima Ultra 68 (`barrieres-bft-maxima-ultra-68.mp4`)

---

## Ce qui a été testé et n'a pas marché

| Tentative | Résultat | Raison |
|-----------|----------|--------|
| Animation intro GSAP | ❌ Abandonnée | requestAnimationFrame throttlé dans preview, problèmes CSS. Remplacé par gate CSS pure. |
| Photo `hero-bg.jpg` en fond | ⚠️ Rejeté | Client n'aime pas le rendu. Remplacé par `hero-villa.jpg`. |
| Carousel horizontal accueil | ⚠️ Rejeté | Client n'aimait pas. Remplacé par grille éditoriale V3. |
| `gh pr create` master→master | ❌ Impossible | Repo single-branch. Push direct sur origin/master. |
| `preview_screenshot` | ❌ Timeout | Vidéos autoplay bloquent le renderer. Contournement : `preview_eval + getComputedStyle`. |
| Logo sur header blanc | ❌ Invisible | Logo blanc conçu pour fond sombre. Résolu : logo-icon + logo-text + brightness(0). |
| IntersectionObserver v-motion en preview | ❌ Ne se déclenche pas | Renderer headless ne simule pas le scroll. Fonctionne dans un vrai navigateur. |

---

## Ce qu'il reste à faire

### CRITIQUE — Bloquant avant mise en production
1. **Formspree endpoint** : Remplacer `XXXXXXXX` dans `components/sections/ContactSection.vue` (ligne ~31) par le vrai ID (créer compte formspree.io → nouveau formulaire → copier l'ID)
2. **Mentions légales — champs manquants** (`.todo` en rouge italique dans `pages/mentions-legales.vue`) :
   - Forme juridique (SARL ? SAS ? Auto-entrepreneur ?)
   - Numéro SIRET / SIREN
   - Numéro Répertoire des Métiers
   - Capital social (si applicable)
   - Nom assureur décennale + numéro de contrat
   - Médiateur de la consommation (nom + site web)
3. **Déploiement Hostinger** : `npm run generate` → upload FTP vers `public_html`

### Priorité moyenne
4. **Google My Business** — créer et valider la fiche (crucial pour référencement local "portail 06")
5. **Canonical tags** — prévenir le duplicate content
6. **preload="metadata"** sur les vidéos de /realisations (performance)
7. Test iOS Safari (`100svh` vs barre d'adresse variable)
8. Test gate animation en navigation réelle sur device

---

## Rappels techniques importants

- **Toujours `$url('/fichier')`** pour les assets publics (plugin `plugins/url.js` pour GitHub Pages baseURL)
- **`components.pathPrefix: false`** dans `nuxt.config` — pas de préfixe de dossier dans les imports
- **Dev server** : `npm run dev` → `localhost:3000`
- **Build** : `npm run generate` → dossier `.output/public/`
- **GitHub Pages** : `NUXT_APP_BASE_URL=/mp2a-fermetures/` dans le workflow CI
- **Typo** : `--font-display: 'Big Shoulders Display'` (titres) + `--font-body: 'DM Sans'` (corps)
- **Couleurs clés** : `--color-red: #E30613` | `--color-black: #0A0A0A` | `--color-anthracite: #1E2229` | `--color-aluminium: #F3F4F6`
- **Breakpoints** : sm 480px / md 768px / lg 1024px / xl 1280px
- **Page /avis** : ne pas recréer — décision définitive du client
- **SessionStorage** : clé `mp2a-gate-played` pour l'animation gate
- **lightboxItems** (computed) = tous les displayedItems — navigable image ET vidéo
