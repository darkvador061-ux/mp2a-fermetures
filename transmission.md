# Transmission — Site MP2A Fermetures
*État au 2026-06-16 — À lire en début de prochaine session*

---

## Objectif du projet

Site vitrine professionnel pour **MP2A Fermetures** (portails, volets roulants, portes de garage, motorisation, dépannage, clôtures). Premier site web de l'entreprise — présence actuelle = Instagram uniquement (@mp2afermetures).

**But :** générer des demandes de devis et des appels entrants depuis les Alpes-Maritimes (06).

- Stack : Nuxt 3 SSG + CSS natif + GSAP (abandonné — voir ci-dessous)
- Hébergement cible : Hostinger (FTP, public_html)
- GitHub Pages actif : `darkvador061-ux.github.io/mp2a-fermetures`
- Repo GitHub : `https://github.com/darkvador061-ux/mp2a-fermetures`

---

## État actuel du code

### Pages en place
| Page | État |
|------|------|
| `/` (accueil) | ✅ Complète — Hero + Services + Réalisations V3 + CTA Contact |
| `/services` | ✅ Complète — bandeau + 6 services + Particuliers/Professionnels + CTA |
| `/realisations` | ✅ Complète — bandeau + grille vidéos + CTA rouge bas |
| `/contact` | ✅ Complète — formulaire simulé + sidebar coordonnées |
| `/avis` | ❌ Supprimée — placeholders trop faux, à recréer avec vrais avis Google |

### Composants en place
| Fichier | État |
|---------|------|
| `components/layout/AppHeader.vue` | ✅ Nav desktop + burger mobile, sticky, ligne rouge |
| `components/layout/AppFooter.vue` | ✅ 3 colonnes, copyright |
| `components/sections/HeroSection.vue` | ✅ Fond noir dégradé + grille, SVG icons, badge Artisan Certifié doré, Click-to-Call |
| `components/sections/ServicesSection.vue` | ✅ 6 services, prop `preview` |
| `components/sections/RealisationsSection.vue` | ✅ **V3 premium** — voir détails ci-dessous |
| `components/sections/ContactSection.vue` | ✅ Formulaire simulé + infos |

### Médias en place
| Fichier | Emplacement | Usage |
|---------|------------|-------|
| `sav-depannage-motorisation.jpg` | `public/images/` | Accueil (homepage) |
| `realisation-portail-industriel.jpg` | `public/images/` | Accueil (homepage) |
| `realisation-portail-coulissant.jpg` | `public/images/` | Accueil (homepage) |
| `realisation-portes-garage-parking.jpg` | `public/images/` | Accueil (homepage) |
| `portail-coulissant-serigraphie.mp4` | `public/videos/` | Page /réalisations |
| `porte-garage-basculante-sinetik.mp4` | `public/videos/` | Page /réalisations |
| `portail-battant-sinetik-clinique-nice.mp4` | `public/videos/` | Page /réalisations |
| `remplacement-porte-basculante-sinetik.mp4` | `public/videos/` | Page /réalisations |
| `remplacement-montants-porte-garage-doitrand.mp4` | `public/videos/` | Page /réalisations |
| `hero-bg.jpg` | `public/` | Non utilisé en fond hero (client n'aimait pas le rendu) |

---

## Détail — RealisationsSection V3 (fichier le plus travaillé)

### Architecture des données
Chaque item a un flag `homepage: true` (accueil) ou sans flag (page /réalisations) :
- `displayedItems` = filtre `r.homepage` si `preview`, sinon `!r.homepage`
- **0 doublon** entre accueil et page réalisations

### Layout V3 (desktop 1024px+)
```
[ Photo 1 — héro large (2 cols) ] [ Photo 2 — tall right ]
[ Photo 3 — petite bas gauche  ] [ Photo 4 — petite bas ]
```
Grid : `grid-template-columns: 2fr 1fr 1.5fr` / `grid-template-rows: 330px 250px` / `gap: 2px`

### Éléments V3 appliqués
- **Numéros filigrane** : 96px, `rgba(255,255,255,0.06)`, z-index 1 (derrière l'overlay)
- **Hover** : `box-shadow inset 0 0 0 2px var(--color-red)` + `scale(1.04)`
- **Accent item 1** : barre rouge top full-width (`::before` horizontal)
- **CTA "Voir tout"** : bouton outliné rouge, fill rouge au hover
- **Header** : 260px sticky, numéro décoratif "04" fond 4% opacité
- **Localisation** : point rouge + lieu sous chaque titre photo
- **Overlay gradient** : sombre uniquement bas 40% (cinématique)

---

## Ce qui a changé depuis le début

### Session 1 (2026-06-15)
1. Architecture Nuxt 3 complète
2. Variables CSS globales (couleurs, typo, espacements)
3. AppHeader + AppFooter
4. HeroSection V1 (fond noir, slogan, CTAs, badges)
5. ServicesSection (6 services, prop preview)
6. ContactSection (formulaire + sidebar)
7. Pages /services, /contact, /avis
8. RealisationsSection V1 (2 vidéos + 1 photo)
9. GitHub repo + GitHub Actions deploy
10. Fix logos GitHub Pages → plugin `$url()` pour préfixer baseURL

### Session 2 (2026-06-16)
1. HeroSection V2 : Click-to-Call + badge Artisan Certifié doré + SVG icons (tel, checkmark) + ligne rouge sous badges
2. Fond hero : tentative photo `hero-bg.jpg` → client n'aime pas → fond noir dégradé conservé
3. RealisationsSection : refonte complète
   - 4 photos chantiers client (accueil)
   - 5 vidéos (page /réalisations, 3 nouvelles copiées depuis Téléchargements)
   - Séparation accueil / réalisations sans doublons
   - Carousel horizontal auto-scroll → abandonné (design trop commun)
   - Design V1 (2×2 uniforme) → V2 (L-shape héro) → **V3 agency premium** (final)
4. Page /realisations complétée (bandeau + grille + CTA)
5. Page /avis supprimée (à refaire avec vrais avis)
6. Commit + push master → déploiement GitHub Actions déclenché

---

## Ce qui a été testé et n'a pas marché

| Tentative | Résultat | Raison |
|-----------|----------|--------|
| Animation intro GSAP (portail qui s'ouvre) | ❌ Abandonnée | `requestAnimationFrame` throttlé dans l'onglet preview → GSAP ne se déclenchait pas. Problème de positionnement CSS. Décision : supprimée définitivement. |
| `import('gsap')` dynamique | ❌ Échoué | Erreur dans le contexte eval. |
| Logo sur GitHub Pages | ❌ Invisible | `/logo.png` ne préfixe pas `/mp2a-fermetures/`. Résolu via plugin `$url()`. |
| Script `nuxt generate` manquant | ❌ CI cassé | `package.json` n'avait pas de script `generate`. Ajouté. |
| GitHub Pages API → 409 | ❌ Conflit | Corrigé en passant PUT `build_type: workflow`. |
| Photo `hero-bg.jpg` en fond hero | ⚠️ Rejeté | Client n'aime pas le rendu. Fond noir dégradé + grille conservé. |
| Carousel horizontal (accueil) | ⚠️ Rejeté | Client n'aimait pas le design. Remplacé par grille éditoriale. |
| `preview_screenshot` | ❌ Timeout systématique | Les vidéos `autoplay` sur la page bloquent le renderer du preview tool. Contournement : `preview_eval` + `getComputedStyle` pour vérifier. |
| HMR color caching | ⚠️ Partiel | Après modification CSS, `getComputedStyle` renvoyait l'ancienne valeur. Résolu par `window.location.reload()`. |

---

## Ce qu'il reste à faire

### Priorité haute
1. **Page /avis** — Recréer avec vrais avis Google (récupérer lien "Laisser un avis" MP2A, screenshot ou texte des avis existants). Minimum 5-6 avis réels.
2. **Fond hero** — Retravailler avec le client : qu'est-ce qu'il n'aime pas dans `hero-bg.jpg` ? (overlay trop sombre ? trop clair ? mauvais cadrage ?) Alternatives : photo recadrée, filtre couleur rouge/noir, image différente.
3. **Formulaire contact réel** — Remplacer la simulation par Formspree (`https://formspree.io`) ou Netlify Forms. Le formulaire actuel n'envoie rien.

### Priorité moyenne
4. **Médias supplémentaires** — Autres photos/vidéos Instagram à intégrer (télécharger via SnapSave → `public/`)
5. **Animations scroll** — @vueuse/motion sur les sections quand elles entrent en vue (client avait dit "on verra plus tard")
6. **SEO** — Vérifier les meta descriptions de chaque page, ajouter sitemap XML (`@nuxtjs/sitemap`)
7. **Déploiement Hostinger** — `nuxt generate` → upload FTP sur `public_html`. À faire quand le client valide le design.

### Décisions en attente du client
- Que changer dans le hero avec photo ? (demander)
- Vrai lien Google Reviews MP2A à récupérer pour /avis
- Valider le design V3 réalisations en conditions réelles (avec vraies photos)
- Confirmer si l'animation GSAP portail est définitivement abandonnée

---

## Rappels techniques importants

- **Toujours `$url('/fichier')`** pour les assets publics (plugin `plugins/url.js` pour GitHub Pages baseURL)
- **`components.pathPrefix: false`** dans `nuxt.config` — pas de préfixe de dossier dans les imports
- **Typo** : `--font-display: 'Big Shoulders Display'` (titres) + `--font-body: 'DM Sans'` (corps)
- **Couleurs** : `--color-red: #E30613` | `--color-black: #0A0A0A` | `--color-white: #FFFFFF`
- **Breakpoints** : sm 480px / md 768px / lg 1024px / xl 1280px
- **Dev server** : `npm run dev` → `localhost:3000`
- **GitHub Pages** : `NUXT_APP_BASE_URL=/mp2a-fermetures/` dans le workflow CI
- **`preview_screenshot` timeout** : bug connu lié aux vidéos autoplay. Utiliser `preview_eval + getComputedStyle` pour vérifier le CSS, et `computer-use screenshot` pour voir Chrome.
