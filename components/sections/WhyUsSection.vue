<script setup>
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
  <section class="why">
    <div class="container">

      <div
        class="why__header"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="why__eyebrow">Nos engagements</p>
        <h2 class="why__title">Pourquoi choisir MP2A ?</h2>
      </div>

      <div class="why__grid">
        <div
          v-for="(arg, i) in arguments_"
          :key="i"
          class="why__card"
          v-motion
          :initial="{ opacity: 0, y: 28 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
        >
          <div class="why__icon" aria-hidden="true" v-html="arg.icon" />
          <h3 class="why__card-title">{{ arg.title }}</h3>
          <p class="why__card-text">{{ arg.text }}</p>
        </div>
      </div>

      <div
        class="why__brands"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 600, delay: 200 } }"
      >
        <p class="why__brands-label">Marques compatibles & maîtrisées</p>
        <ul class="why__brands-list">
          <li v-for="brand in brands" :key="brand" class="why__brands-item">{{ brand }}</li>
        </ul>
      </div>

      <div
        class="why__cta"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
      >
        <NuxtLink to="/contact" class="why__cta-btn why__cta-btn--primary">
          Demander un devis gratuit
        </NuxtLink>
        <span class="why__cta-btn why__cta-btn--secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          06 98 25 89 37
        </span>
        <span class="why__cta-btn why__cta-btn--secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          06 84 23 03 76
        </span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.why {
  background-color: #1E2229;
  padding-block: var(--space-24);
  border-top: 3px solid var(--color-red);
}

.why__header {
  margin-bottom: var(--space-14);
}

.why__eyebrow {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.why__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.95;
  letter-spacing: -0.02em;
  max-width: none;
}

.why__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-16);
}

@media (min-width: 640px) {
  .why__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .why__grid { grid-template-columns: repeat(4, 1fr); }
}

.why__card {
  background-color: #262B33;
  border: 1px solid rgba(255,255,255,0.06);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: border-color 250ms ease;
}

.why__card:hover {
  border-color: var(--color-red);
}

.why__icon {
  color: var(--color-red);
  line-height: 1;
}

.why__card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: -0.01em;
}

.why__card-text {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.50);
  line-height: 1.65;
  max-width: none;
}

/* ── Marques ── */
.why__brands {
  padding-block: var(--space-12);
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: var(--space-14);
}

.why__brands-label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  text-align: center;
  margin-bottom: var(--space-8);
  max-width: none;
}

.why__brands-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2) var(--space-8);
}

.why__brands-item {
  font-family: var(--font-display);
  font-size: clamp(var(--text-base), 2vw, var(--text-xl));
  font-weight: 900;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.18);
  text-transform: uppercase;
  transition: color 250ms ease;
  cursor: default;
}

.why__brands-item:hover {
  color: rgba(255,255,255,0.65);
}

/* ── CTA ── */
.why__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
}

@media (min-width: 480px) {
  .why__cta {
    flex-direction: row;
    align-items: center;
  }
}

.why__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  transition: background-color var(--transition-base), color var(--transition-base), border-color var(--transition-base);
}

.why__cta-btn--primary {
  background-color: var(--color-red);
  color: var(--color-white);
  border: 2px solid var(--color-red);
}

.why__cta-btn--primary:hover {
  background-color: var(--color-red-dark);
  border-color: var(--color-red-dark);
}

.why__cta-btn--secondary {
  color: var(--color-white);
  border: 2px solid rgba(255,255,255,0.25);
}

.why__cta-btn--secondary:hover {
  border-color: rgba(255,255,255,0.6);
}
</style>
