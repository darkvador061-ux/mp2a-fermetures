<script setup>
import { computed } from 'vue'

const props = defineProps({
  preview: {
    type: Boolean,
    default: true
  }
})

const realisations = [
  {
    type: 'image',
    src: '/images/realisation-portail-industriel.jpg',
    categorie: 'Portail coulissant',
    titre: 'Double portail coulissant motorisé',
    description: 'Installation de deux portails coulissants motorisés avec contrôle d\'accès sur site industriel.',
    lieu: 'Alpes-Maritimes (06)',
    homepage: true
  },
  {
    type: 'image',
    src: '/images/realisation-portail-coulissant.jpg',
    categorie: 'Contrôle d\'accès',
    titre: 'Portail coulissant — vue chantier',
    description: 'Installation portails coulissant avec contrôle d\'accès.',
    lieu: 'Alpes-Maritimes (06)',
    homepage: true
  },
  {
    type: 'image',
    src: '/images/realisation-portes-garage-parking.jpg',
    categorie: 'Porte de garage',
    titre: '8 portes de box motorisées',
    description: 'Mise en place de 8 portes de box motorisées dans une résidence privée en bord de mer.',
    lieu: 'Alpes-Maritimes (06)',
    homepage: true
  },
  {
    type: 'image',
    src: '/images/sav-depannage-motorisation.jpg',
    categorie: 'SAV & Dépannage',
    titre: 'Dépannage motorisation',
    description: '3 remises en service dans la journée : moteurs CARDIN / CAME / DORMAKABA.',
    lieu: 'Alpes-Maritimes (06)',
    homepage: true
  },
  {
    type: 'video',
    src: '/videos/portail-battant-sinetik-clinique-nice.mp4',
    categorie: 'Portail battant',
    titre: 'Portail battant SINETIK — Clinique Nice',
    description: 'Mise en place d\'un portail battant SINETIK avec joints creux et fers de lance au sein d\'une clinique à Nice.',
    lieu: 'Nice (06)'
  },
  {
    type: 'video',
    src: '/videos/remplacement-porte-basculante-sinetik.mp4',
    categorie: 'Porte de garage',
    titre: 'Remplacement porte basculante SINETIK',
    description: 'Remplacement intégral d\'une porte de garage basculante SINETIK – Groupe Connexion.',
    lieu: 'Alpes-Maritimes (06)'
  },
  {
    type: 'video',
    src: '/videos/remplacement-montants-porte-garage-doitrand.mp4',
    categorie: 'SAV & Dépannage',
    titre: 'Remplacement montants porte Doitrand',
    description: 'Suite à un choc véhicule : remplacement des montants droite et gauche d\'une porte de garage Doitrand.',
    lieu: 'Alpes-Maritimes (06)'
  },
  {
    type: 'video',
    src: '/videos/portail-coulissant-serigraphie.mp4',
    categorie: 'Portail coulissant',
    titre: 'Portail coulissant sérigraphié',
    description: 'Pose d\'un portail coulissant sérigraphié sur mesure, motorisé et télécommandé.',
    lieu: 'Alpes-Maritimes (06)'
  },
  {
    type: 'video',
    src: '/videos/porte-garage-basculante-sinetik.mp4',
    categorie: 'Porte de garage',
    titre: 'Porte basculante SINETIK',
    description: 'Porte de garage basculante SINETIK – Groupe Connexion avec portillon attenant.',
    lieu: 'Alpes-Maritimes (06)'
  }
]

const displayedItems = computed(() =>
  props.preview
    ? realisations.filter(r => r.homepage)
    : realisations.filter(r => !r.homepage)
)

function pad(n) {
  return String(n).padStart(2, '0')
}
</script>

<template>
  <section class="realisations" id="realisations">
    <div class="realisations__inner">

      <!-- En-tête latéral (desktop) -->
      <div class="realisations__header">
        <span class="realisations__header-deco" aria-hidden="true">04</span>
        <p class="realisations__eyebrow">Nos chantiers</p>
        <h2 class="realisations__title">Nos<br>réalisations</h2>
        <p class="realisations__intro">
          Quelques exemples de nos interventions dans les Alpes-Maritimes.
        </p>
        <NuxtLink v-if="preview" to="/realisations" class="realisations__cta-btn">
          Voir tout
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </NuxtLink>
      </div>

      <!-- Galerie asymétrique (accueil) -->
      <div v-if="preview" class="realisations__gallery">
        <article
          v-for="(r, i) in displayedItems"
          :key="i"
          class="realisations__item"
          :class="`realisations__item--${i + 1}`"
        >
          <img
            :src="$url(r.src)"
            :alt="r.titre"
            class="realisations__photo"
            loading="lazy"
          />
          <span class="realisations__num" aria-hidden="true">{{ pad(i + 1) }}</span>
          <div class="realisations__overlay">
            <div class="realisations__meta">
              <span class="realisations__badge">{{ r.categorie }}</span>
              <p class="realisations__item-title">{{ r.titre }}</p>
              <span class="realisations__lieu">
                <span class="realisations__lieu-dot" aria-hidden="true"></span>
                {{ r.lieu }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Grille complète (page /realisations) -->
      <div v-else class="realisations__grid">
        <article
          v-for="(r, i) in displayedItems"
          :key="i"
          class="realisations__card"
        >
          <div class="realisations__media">
            <video
              v-if="r.type === 'video'"
              :src="$url(r.src)"
              class="realisations__video"
              autoplay
              muted
              loop
              playsinline
              :aria-label="r.titre"
            ></video>
            <img
              v-else
              :src="$url(r.src)"
              :alt="r.titre"
              class="realisations__img"
              loading="lazy"
            />
            <span class="realisations__badge">{{ r.categorie }}</span>
          </div>
          <div class="realisations__info">
            <h3 class="realisations__card-title">{{ r.titre }}</h3>
            <p class="realisations__card-desc">{{ r.description }}</p>
            <span class="realisations__card-lieu">
              <span class="realisations__card-lieu-dot" aria-hidden="true"></span>
              {{ r.lieu }}
            </span>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Section ── */
.realisations {
  padding-block: var(--space-24);
  background-color: var(--color-black);
  overflow: hidden;
}

.realisations__inner {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

@media (min-width: 1024px) {
  .realisations__inner {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--space-16);
  }
}

/* ── En-tête ── */
.realisations__header {
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

@media (min-width: 1024px) {
  .realisations__header {
    width: 260px;
    position: sticky;
    top: 120px;
    overflow: visible;
  }
}

/* Numéro décoratif fond header */
.realisations__header-deco {
  position: absolute;
  bottom: -20px;
  right: -12px;
  font-family: var(--font-display);
  font-size: 9rem;
  font-weight: 900;
  color: rgba(255,255,255,0.04);
  line-height: 1;
  letter-spacing: -0.04em;
  pointer-events: none;
  user-select: none;
}

@media (min-width: 1024px) {
  .realisations__header-deco {
    font-size: 11rem;
    bottom: -30px;
    right: -20px;
  }
}

.realisations__eyebrow {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-red);
  max-width: none;
}

.realisations__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: -0.02em;
}

.realisations__intro {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.45);
  line-height: 1.6;
  max-width: 28ch;
}

.realisations__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-red);
  cursor: pointer;
  border: 1.5px solid var(--color-red);
  padding: var(--space-2) var(--space-4);
  width: fit-content;
  transition: color 200ms ease, background-color 200ms ease;
}

.realisations__cta-btn:hover {
  background-color: var(--color-red);
  color: var(--color-white);
}

/* ── Galerie asymétrique accueil ── */
.realisations__gallery {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 240px 180px;
  gap: 3px;
}

@media (min-width: 640px) {
  .realisations__gallery {
    grid-template-rows: 300px 220px;
  }
}

@media (min-width: 1024px) {
  .realisations__gallery {
    grid-template-columns: 2fr 1fr 1.5fr;
    grid-template-rows: 330px 250px;
    gap: 2px;
  }
}

/* Layout L-shape héro */
/* Mobile : 2×2 classique */
.realisations__item--1 { grid-column: 1; grid-row: 1; }
.realisations__item--2 { grid-column: 2; grid-row: 1; }
.realisations__item--3 { grid-column: 1; grid-row: 2; }
.realisations__item--4 { grid-column: 2; grid-row: 2; }

/* Desktop : héro large + tall right + 2 petits bas */
@media (min-width: 1024px) {
  .realisations__item--1 { grid-column: 1 / 3; grid-row: 1; }
  .realisations__item--2 { grid-column: 3;     grid-row: 1 / 3; }
  .realisations__item--3 { grid-column: 1;     grid-row: 2; }
  .realisations__item--4 { grid-column: 2;     grid-row: 2; }
}

.realisations__item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #111;
}

.realisations__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.realisations__item:hover .realisations__photo {
  transform: scale(1.04);
}

/* Inset border rouge au hover — signature premium */
.realisations__item::after {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 0 0px var(--color-red);
  z-index: 6;
  transition: box-shadow 250ms ease;
  pointer-events: none;
}

.realisations__item:hover::after {
  box-shadow: inset 0 0 0 2px var(--color-red);
}

/* Filigrane numéro — derrière overlay */
.realisations__num {
  position: absolute;
  bottom: 10px;
  left: 8px;
  z-index: 1;
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 900;
  color: rgba(255,255,255,0.06);
  line-height: 1;
  letter-spacing: -0.04em;
  pointer-events: none;
  user-select: none;
}

/* Overlay cinématique */
.realisations__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.88) 0%,
    rgba(0,0,0,0.4) 38%,
    rgba(0,0,0,0.05) 65%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-4);
  transition: background 300ms ease;
}

.realisations__item:hover .realisations__overlay {
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.92) 0%,
    rgba(0,0,0,0.5) 38%,
    rgba(0,0,0,0.08) 65%,
    transparent 100%
  );
}

/* Meta bas */
.realisations__meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.realisations__badge {
  display: inline-block;
  width: fit-content;
  padding: 2px var(--space-2);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.realisations__item-title {
  font-family: var(--font-display);
  font-size: clamp(0.8rem, 1.8vw, 1.05rem);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.15;
  letter-spacing: 0.01em;
  max-width: none;
}

/* Localisation */
.realisations__lieu {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 2px;
}

.realisations__lieu-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-red);
  flex-shrink: 0;
}

/* Ligne rouge signature sur item 1 — barre top full-width */
.realisations__item--1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: var(--color-red);
  z-index: 5;
}

/* ── Grille complète /realisations ── */
.realisations__grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .realisations__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .realisations__grid { grid-template-columns: repeat(3, 1fr); }
}

.realisations__card {
  background-color: var(--color-white);
  border: 1px solid var(--color-grey);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.realisations__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}

.realisations__media {
  position: relative;
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background-color: var(--color-black);
}

.realisations__video,
.realisations__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.realisations__info {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.realisations__card-title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-black);
  line-height: 1.2;
}

.realisations__card-desc {
  font-size: var(--text-sm);
  color: var(--color-grey-mid);
  max-width: none;
  line-height: 1.5;
}

.realisations__card-lieu {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-red);
  letter-spacing: 0.04em;
  margin-top: var(--space-1);
}

.realisations__card-lieu-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-red);
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .realisations__photo,
  .realisations__item::after,
  .realisations__card {
    transition: none;
  }
}
</style>
