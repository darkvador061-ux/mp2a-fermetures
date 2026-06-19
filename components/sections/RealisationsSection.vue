<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  preview: { type: Boolean, default: true }
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
  },
  {
    type: 'video',
    src: '/videos/barrieres-bft-maxima-ultra-68.mp4',
    categorie: 'Contrôle d\'accès',
    titre: '2 barrières BFT Maxima Ultra 68',
    description: 'Mise en place de 2 barrières BFT Maxima Ultra 68 avec herses hautes et basses.',
    lieu: 'Alpes-Maritimes (06)'
  },
  {
    type: 'video',
    src: '/videos/modernisation-portail-battant-nice.mp4',
    categorie: 'Portail battant',
    titre: 'Modernisation d\'un portail battant — Nice',
    description: 'Remplacement des motorisations, de l\'armoire de commande et des éléments de sécurité sur les hauteurs de Nice.',
    lieu: 'Nice (06)'
  },
  {
    type: 'video',
    src: '/videos/portail-battant-cebel-portillon.mp4',
    categorie: 'Portail battant',
    titre: 'Portail battant CEBEL avec portillon attenant',
    description: 'Mise en place d\'un portail battant CEBEL avec portillon attenant.',
    lieu: 'Alpes-Maritimes (06)'
  }
]

const displayedItems = computed(() =>
  props.preview
    ? realisations.filter(r => r.homepage)
    : realisations.filter(r => !r.homepage)
)

const homepageVideos = computed(() =>
  realisations.filter(r => r.type === 'video').slice(0, 6)
)

const lightboxItems = computed(() =>
  props.preview
    ? [...displayedItems.value, ...homepageVideos.value]
    : displayedItems.value
)

const lightboxItem = ref(null)

function openLightbox(item) {
  lightboxItem.value = item
  if (typeof document !== 'undefined') document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxItem.value = null
  if (typeof document !== 'undefined') document.body.style.overflow = ''
}

function navigate(dir) {
  const items = lightboxItems.value
  const idx = items.findIndex(i => i.src === lightboxItem.value.src)
  const next = items[idx + dir]
  if (next) lightboxItem.value = next
}

function currentIndex() {
  return lightboxItems.value.findIndex(i => i.src === lightboxItem.value?.src)
}

function handleKey(e) {
  if (!lightboxItem.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') navigate(-1)
  if (e.key === 'ArrowRight') navigate(1)
}

function pad(n) {
  return String(n).padStart(2, '0')
}

onMounted(() => { if (typeof window !== 'undefined') window.addEventListener('keydown', handleKey) })
onUnmounted(() => { if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKey) })
</script>

<template>
  <section class="realisations" id="realisations">
    <div class="realisations__inner">

      <!-- En-tête latéral (desktop) -->
      <div
        class="realisations__header"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
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
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 90 } }"
          @click="openLightbox(r)"
          role="button"
          :aria-label="`Agrandir : ${r.titre}`"
          tabindex="0"
          @keydown.enter="openLightbox(r)"
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
      <div v-else class="realisations__full-panel">

        <!-- Galerie 3D — desktop uniquement -->
        <div class="realisations__cg-desktop">
          <CircularGallery
            :items="displayedItems"
            :radius="390"
            @select="openLightbox"
          />
        </div>

        <!-- Grille classique — mobile / tablette -->
        <div class="realisations__grid">
          <article
            v-for="(r, i) in displayedItems"
            :key="i"
            class="realisations__card"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
            role="button"
            tabindex="0"
            :aria-label="`Ouvrir : ${r.titre}`"
            @click="openLightbox(r)"
            @keydown.enter="openLightbox(r)"
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

    </div>

  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lb">
      <div
        v-if="lightboxItem"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="lightboxItem.titre"
        @click.self="closeLightbox"
      >
        <!-- Fermer -->
        <button class="lightbox__close" @click="closeLightbox" aria-label="Fermer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Précédent -->
        <button
          v-if="currentIndex() > 0"
          class="lightbox__nav lightbox__prev"
          @click="navigate(-1)"
          aria-label="Élément précédent"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- Contenu -->
        <div class="lightbox__content">
          <Transition name="lb-img" mode="out-in">
            <video
              v-if="lightboxItem.type === 'video'"
              :key="lightboxItem.src"
              :src="$url(lightboxItem.src)"
              class="lightbox__img"
              autoplay
              muted
              loop
              playsinline
              controls
              :aria-label="lightboxItem.titre"
            />
            <img
              v-else
              :key="lightboxItem.src + '-img'"
              :src="$url(lightboxItem.src)"
              :alt="lightboxItem.titre"
              class="lightbox__img"
            />
          </Transition>
          <div class="lightbox__caption">
            <span class="lightbox__caption-badge">{{ lightboxItem.categorie }}</span>
            <p class="lightbox__caption-title">{{ lightboxItem.titre }}</p>
            <span class="lightbox__caption-lieu">
              <span class="lightbox__caption-dot" aria-hidden="true"></span>
              {{ lightboxItem.lieu }}
            </span>
          </div>
        </div>

        <!-- Suivant -->
        <button
          v-if="currentIndex() < lightboxItems.length - 1"
          class="lightbox__nav lightbox__next"
          @click="navigate(1)"
          aria-label="Élément suivant"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <!-- Compteur -->
        <div class="lightbox__counter" aria-live="polite">
          {{ currentIndex() + 1 }}<span>/</span>{{ lightboxItems.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Section ── */
.realisations {
  padding-block: var(--space-24);
  background-color: var(--color-black);
  overflow: clip; /* clip sans créer de stacking context — préserve les transforms 3D */
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

/* ── Galerie "Bannière + Triptyque" ── */
.realisations__gallery {
  flex: 1;
  display: grid;
  background-color: var(--color-red); /* gaps = lignes rouges */
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 170px 210px;
  gap: 2px;
}

@media (min-width: 640px) {
  .realisations__gallery {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 160px 300px;
    gap: 3px;
  }
}

@media (min-width: 1024px) {
  .realisations__gallery {
    grid-template-rows: 180px 340px;
    gap: 3px;
  }
}

/* Mobile : 2×2 */
.realisations__item--1 { grid-column: 1;     grid-row: 1; }
.realisations__item--2 { grid-column: 2;     grid-row: 1; }
.realisations__item--3 { grid-column: 1;     grid-row: 2; }
.realisations__item--4 { grid-column: 2;     grid-row: 2; }

/* ≥640px : bannière pleine largeur + triptyque */
@media (min-width: 640px) {
  .realisations__item--1 { grid-column: 1 / 4; grid-row: 1; }
  .realisations__item--2 { grid-column: 1;     grid-row: 2; }
  .realisations__item--3 { grid-column: 2;     grid-row: 2; }
  .realisations__item--4 { grid-column: 3;     grid-row: 2; }
}

.realisations__item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #111;
  transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), z-index 0ms;
  z-index: 1;
}

.realisations__item:hover {
  transform: scale(1.04);
  z-index: 3;
}

.realisations__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.realisations__item:hover .realisations__photo {
  transform: scale(1.08);
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
  font-size: 11px;
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
  font-size: 11px;
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

/* Item 1 (bannière) : overlay latéral + meta centrée */
@media (min-width: 640px) {
  .realisations__item--1 .realisations__overlay {
    background: linear-gradient(
      to right,
      rgba(0,0,0,0.85) 0%,
      rgba(0,0,0,0.3) 50%,
      rgba(0,0,0,0.05) 100%
    );
    justify-content: flex-end;
    padding: var(--space-6) var(--space-8);
  }

  .realisations__item--1 .realisations__num {
    font-size: clamp(5rem, 10vw, 9rem);
    bottom: auto;
    top: 50%;
    left: auto;
    right: var(--space-6);
    transform: translateY(-50%);
    color: rgba(255,255,255,0.04);
  }
}

/* ── Panel full-page (desktop: carousel / mobile: grille) ── */
.realisations__full-panel {
  flex: 1;
  min-width: 0;
}

.realisations__cg-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .realisations__cg-desktop {
    display: block;
  }
  .realisations__full-panel .realisations__grid {
    display: none;
  }
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
  background-color: #262B33;
  border: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: box-shadow var(--transition-base), transform var(--transition-base), border-color var(--transition-base), z-index 0ms;
}

.realisations__card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  border-color: var(--color-red);
  transform: scale(1.03);
  z-index: 2;
}

.realisations__media {
  position: relative;
  aspect-ratio: 16 / 9;
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
  color: var(--color-white);
  line-height: 1.2;
}

.realisations__card-desc {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.45);
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
  .realisations__item,
  .realisations__item::after,
  .realisations__card {
    transition: none;
  }
  .realisations__item:hover,
  .realisations__card:hover {
    transform: none;
  }
}

/* ══════════════════════════════
   LIGHTBOX
══════════════════════════════ */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
}

/* Transition overlay */
.lb-enter-active { transition: opacity 260ms ease; }
.lb-leave-active { transition: opacity 200ms ease; }
.lb-enter-from,
.lb-leave-to    { opacity: 0; }

/* Contenu qui monte au chargement */
.lb-enter-active .lightbox__content {
  transition: transform 420ms cubic-bezier(0.34, 1.4, 0.64, 1), opacity 300ms ease;
}
.lb-enter-from .lightbox__content {
  transform: scale(0.88) translateY(16px);
  opacity: 0;
}

/* Transition image nav gauche/droite */
.lb-img-enter-active { transition: opacity 200ms ease, transform 260ms ease; }
.lb-img-leave-active { transition: opacity 160ms ease, transform 200ms ease; }
.lb-img-enter-from   { opacity: 0; transform: scale(0.97); }
.lb-img-leave-to     { opacity: 0; transform: scale(1.03); }

/* Fermer */
.lightbox__close {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.5);
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  transition: color 200ms ease, border-color 200ms ease, background 200ms ease;
  flex-shrink: 0;
}
.lightbox__close:hover {
  color: var(--color-white);
  border-color: var(--color-red);
  background: rgba(227,6,19,0.12);
}

/* Nav flèches */
.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.45);
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  cursor: pointer;
  transition: color 200ms ease, border-color 200ms ease, background 200ms ease, transform 200ms ease;
}
.lightbox__prev { left: var(--space-6); }
.lightbox__next { right: var(--space-6); }

.lightbox__nav:hover {
  color: var(--color-white);
  border-color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.08);
}
.lightbox__prev:hover { transform: translateY(-50%) translateX(-2px); }
.lightbox__next:hover { transform: translateY(-50%) translateX(2px); }

/* Contenu */
.lightbox__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  max-width: min(90vw, 1100px);
}

.lightbox__img {
  display: block;
  max-width: 100%;
  max-height: 76vh;
  object-fit: contain;
  box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06);
}

/* Caption */
.lightbox__caption {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

.lightbox__caption-badge {
  padding: 2px var(--space-3);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  flex-shrink: 0;
}

.lightbox__caption-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-base), 2vw, var(--text-xl));
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  letter-spacing: 0.02em;
  max-width: none;
}

.lightbox__caption-lieu {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lightbox__caption-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-red);
  flex-shrink: 0;
}

/* Compteur */
.lightbox__counter {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: var(--space-1);
}
.lightbox__counter span { color: rgba(255,255,255,0.15); }
</style>
