<script setup>
useHead({
  title: 'Contact & Devis Gratuit — MP2A Fermetures | La Colle-sur-Loup',
  meta: [
    {
      name: 'description',
      content:
        'Demandez un devis gratuit pour l\'installation ou le dépannage de votre portail, volet ou porte de garage. Intervention dans les Alpes-Maritimes — réponse rapide.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://mp2afermetures.fr/contact' },
    { property: 'og:title', content: 'Contact & Devis Gratuit — MP2A Fermetures | La Colle-sur-Loup' },
    { property: 'og:description', content: 'Demandez un devis gratuit pour l\'installation ou le dépannage de votre portail, volet ou porte de garage. Intervention dans les Alpes-Maritimes — réponse rapide.' },
    { property: 'og:image', content: 'https://mp2afermetures.fr/hero-villa.jpg' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://mp2afermetures.fr/hero-villa.jpg' },
  ],
})

const arguments_ = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    title: '10+ ans d\'expérience',
    text: 'Spécialistes de la fermeture depuis plus de 10 ans sur la Côte d\'Azur. Particuliers, syndics, promoteurs : nous connaissons chaque configuration.'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'Réponse sous 24h',
    text: 'Devis gratuit, sans engagement, établi rapidement après réception de votre demande. Intervention urgente possible le jour même pour les pannes.'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: 'Toutes marques',
    text: 'NICE, SOMFY, BFT, FAAC, CARDIN, CAME, DORMAKABA — nous maîtrisons l\'ensemble des motorisations et automatismes du marché.'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Accompagnement complet',
    text: 'Du premier appel à la réception du chantier, nous gérons l\'intégralité de votre projet : conseil, installation, mise en service et suivi SAV.'
  }
]

const brands = ['NICE', 'SOMFY', 'BFT', 'FAAC', 'CARDIN', 'CAME', 'DORMAKABA', 'SINETIK', 'CEBEL', 'DOITRAND']
</script>

<template>
  <div class="contact-page">

    <!-- Formulaire principal -->
    <ContactSection />

    <!-- Pourquoi nous choisir -->
    <section class="cp-why">
      <div class="container">
        <div
          class="cp-why__header"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <p class="cp-why__eyebrow">Nos engagements</p>
          <h2 class="cp-why__title">Pourquoi choisir MP2A ?</h2>
        </div>
        <div class="cp-why__grid">
          <div
            v-for="(arg, i) in arguments_"
            :key="i"
            class="cp-why__card"
            v-motion
            :initial="{ opacity: 0, y: 28 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
          >
            <div class="cp-why__icon" aria-hidden="true" v-html="arg.icon" />
            <h3 class="cp-why__card-title">{{ arg.title }}</h3>
            <p class="cp-why__card-text">{{ arg.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Marques maîtrisées -->
    <section class="cp-brands">
      <div class="container">
        <p
          class="cp-brands__label"
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1, transition: { duration: 500 } }"
        >Marques compatibles & maîtrisées</p>
        <ul class="cp-brands__list">
          <li
            v-for="(brand, i) in brands"
            :key="brand"
            class="cp-brands__item"
            v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 50 } }"
          >{{ brand }}</li>
        </ul>
      </div>
    </section>

    <!-- Zone d'intervention — carte -->
    <section class="cp-map">
      <div class="container">
        <div
          class="cp-map__header"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <p class="cp-map__eyebrow">Zone d'intervention</p>
          <h2 class="cp-map__title">Alpes-Maritimes (06)</h2>
          <p class="cp-map__intro">
            Nice · Antibes · Cannes · Vence · Cagnes-sur-Mer · Saint-Paul-de-Vence · La Colle-sur-Loup · Grasse · Mougins et alentours.
          </p>
        </div>
      </div>
      <div class="cp-map__frame-wrap">
        <ClientOnly>
          <MapLeaflet />
        </ClientOnly>
      </div>
    </section>

  </div>
</template>

<style scoped>
.contact-page :deep(.contact) {
  padding-top: calc(72px + var(--space-12));
}

@media (min-width: 1024px) {
  .contact-page :deep(.contact) {
    padding-top: calc(108px + var(--space-16));
  }
}

/* ── Pourquoi nous choisir ── */
.cp-why {
  background-color: #1E2229;
  padding-block: var(--space-24);
  border-top: 3px solid var(--color-red);
}

.cp-why__header {
  margin-bottom: var(--space-14);
}

.cp-why__eyebrow {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.cp-why__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: -0.02em;
  max-width: none;
}

.cp-why__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .cp-why__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .cp-why__grid { grid-template-columns: repeat(4, 1fr); }
}

.cp-why__card {
  background-color: #262B33;
  border: 1px solid rgba(255,255,255,0.06);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: border-color 250ms ease;
}

.cp-why__card:hover {
  border-color: var(--color-red);
}

.cp-why__icon {
  color: var(--color-red);
  line-height: 1;
}

.cp-why__card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: -0.01em;
}

.cp-why__card-text {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.50);
  line-height: 1.65;
  max-width: none;
}

/* ── Marques ── */
.cp-brands {
  background-color: var(--color-black);
  padding-block: var(--space-16);
  border-top: 1px solid rgba(255,255,255,0.06);
}

.cp-brands__label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  text-align: center;
  margin-bottom: var(--space-8);
  max-width: none;
}

.cp-brands__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2) var(--space-8);
}

.cp-brands__item {
  font-family: var(--font-display);
  font-size: clamp(var(--text-base), 2vw, var(--text-xl));
  font-weight: 900;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.18);
  text-transform: uppercase;
  transition: color 250ms ease;
  cursor: default;
}

.cp-brands__item:hover {
  color: rgba(255,255,255,0.65);
}

/* ── Carte ── */
.cp-map {
  background-color: var(--color-black);
  padding-bottom: var(--space-0);
  border-top: 1px solid rgba(255,255,255,0.06);
}

.cp-map__header {
  padding-block: var(--space-16);
}

.cp-map__eyebrow {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.cp-map__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-4);
  max-width: none;
}

.cp-map__intro {
  font-size: var(--text-base);
  color: rgba(255,255,255,0.50);
  line-height: 1.6;
  max-width: 64ch;
}

.cp-map__frame-wrap {
  width: 100%;
  overflow: hidden;
  border-top: 2px solid var(--color-red);
}
</style>
