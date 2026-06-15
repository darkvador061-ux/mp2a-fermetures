# CLAUDE.md — Projet MP2A Fermetures

## Contexte du projet

Site vitrine professionnel pour **MP2A Fermetures**, entreprise spécialisée dans l'installation, la motorisation, le dépannage et la maintenance de portails, portes de garage, volets roulants, clôtures et contrôles d'accès.

- **Localisation** : La Colle-sur-Loup (06480), Alpes-Maritimes — secteur PACA / Côte d'Azur
- **Dirigeants** : Anthony MONTA & Alexandre AUGUSTE
- **Cible** : Particuliers ET professionnels (syndics, promoteurs, entreprises)
- **Objectif** : Générer des demandes de devis et des appels entrants
- **Présence actuelle** : Instagram uniquement (@mp2afermetures) — premier site web

## Stack technique

- **Framework** : Nuxt 3 (SSG — génération statique pour SEO optimal)
- **Style** : HTML sémantique + CSS natif (variables CSS, pas de framework CSS)
- **Animations** : @vueuse/motion (scroll) + GSAP (intro portail) + CSS natif (micro-interactions)
- **Slider** : Swiper.js (galerie réalisations)
- **Hébergement** : Hostinger (déploiement FTP sur public_html)
- **Responsive** : Mobile first — breakpoints sm / md / lg / xl

## Architecture des pages

1. **/** — Accueil (hero, services résumés, réalisations phares, avis, CTA)
2. **/services** — Détail de chaque prestation (particuliers + professionnels)
3. **/realisations** — Galerie photos chantiers (Swiper.js)
4. **/avis** — Témoignages Google Reviews
5. **/contact** — Formulaire de devis + téléphones + zone d'intervention

## Contacts client (à intégrer dans le site)

- 📧 contact@mp2afermetures.fr
- 📱 Alexandre AUGUSTE : 06 84 23 03 76
- 📱 Anthony MONTA : 06 98 25 89 37
- 📍 Hameau du Canadel, Villa 11, 309 Bd Honoré Teisseire, 06480 La Colle-sur-Loup

## Identité visuelle

- **Couleurs** : Rouge (#E30613) + Noir (#0A0A0A) + Blanc (#FFFFFF) + Gris clair (#F5F5F5)
- **Logo** : Rouge et noir, style moderne et marqué
- **Ton** : Professionnel, sérieux, local, fiable
- **Typographie** : Distinctive et moderne — à définir (pas Inter, pas Roboto)

## Animation intro — Portail (Desktop uniquement)

- Au premier chargement de la session, le logo MP2A apparaît en plein écran
- Le logo se sépare en deux verticalement (partie gauche + partie droite)
- Les deux moitiés glissent vers l'extérieur (gauche → gauche, droite → droite)
- Le site se révèle par derrière
- Géré avec GSAP
- Stocké en **sessionStorage** : se joue une seule fois par session, jamais au rechargement
- Sur tablette : hero avec vidéo en fond (MP4 autoplay muted loop)
- Sur mobile : hero avec photo en fond (pas de vidéo pour les performances)

## Règles responsive

| Breakpoint | Comportement hero |
|---|---|
| Desktop (≥1024px) | Animation portail GSAP au premier chargement |
| Tablette (768–1023px) | Vidéo MP4 en fond (autoplay, muted, loop) |
| Mobile (< 768px) | Photo en fond (pas de vidéo) |

## SEO

- Nuxt 3 SSG → HTML statique par page
- `useHead()` sur chaque page : title, description, og:image, og:title
- Structure sémantique stricte : h1 unique par page, h2/h3 cohérents
- Balises alt sur toutes les images
- Sitemap XML généré automatiquement (@nuxtjs/sitemap)
- Mots-clés cibles : "portail électrique 06", "portail coulissant Côte d'Azur", "installation portail Nice", "dépannage portail Alpes-Maritimes"

## Directives de travail

- **Avant chaque composant ou page** : expliquer ce qui va être fait et pourquoi
- **Poser des questions** dès qu'un choix impacte le design ou le contenu
- **Jamais de lorem ipsum** — utiliser du vrai contenu MP2A dès la V1
- **Mobile first** dans tous les composants CSS
- **Workflow itératif** : V1 → explication + critique → V2 → validation → V3 finale
- **Un composant = un fichier** — architecture atomique propre
- **Variables CSS** pour toutes les couleurs, espacements et typographies (pas de valeurs hardcodées)
- Chaque changement significatif doit être expliqué avant d'être appliqué

## Structure des fichiers

```
mp2a-fermetures/
├── assets/
│   ├── css/
│   │   └── main.css        # Variables CSS globales + reset
│   ├── images/
│   └── videos/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── ui/
│   │   ├── AppButton.vue
│   │   └── AppCard.vue
│   └── sections/
│       ├── HeroSection.vue
│       ├── ServicesSection.vue
│       ├── RealisationsSection.vue
│       └── ContactSection.vue
├── pages/
│   ├── index.vue
│   ├── services.vue
│   ├── realisations.vue
│   ├── avis.vue
│   └── contact.vue
├── composables/
│   └── useIntroAnimation.js  # Logique GSAP + sessionStorage
├── public/
├── nuxt.config.ts
├── CLAUDE.md
└── MP2A_Fermetures_Brief.md
```
