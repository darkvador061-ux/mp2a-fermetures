<script setup>
defineProps({
  preview: {
    type: Boolean,
    default: true
  }
})

const services = [
  {
    id: 'portails',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="3" x2="4" y2="21"/><line x1="20" y1="3" x2="20" y2="21"/><line x1="4" y1="8" x2="11" y2="8"/><line x1="4" y1="13" x2="11" y2="13"/><line x1="4" y1="18" x2="11" y2="18"/><line x1="20" y1="8" x2="13" y2="8"/><line x1="20" y1="13" x2="13" y2="13"/><line x1="20" y1="18" x2="13" y2="18"/></svg>`,
    title: 'Portails',
    short: 'Coulissants, battants, motorisés — installation sur mesure pour particuliers et professionnels.',
    detail: 'Nous installons tous types de portails : coulissants, battants, autoportants. Motorisation intégrée, télécommande, badge ou interphone. Matériaux : aluminium, acier, PVC, bois.',
    anchor: '#portails'
  },
  {
    id: 'portes-garage',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="14" x2="21" y2="14"/></svg>`,
    title: 'Portes de garage',
    short: 'Sectionnelles, basculantes, enroulables — installation et motorisation toutes marques.',
    detail: 'Installation de portes de garage sectionnelles, basculantes et enroulables. Motorisation silencieuse, télécommande universelle, mise en sécurité conforme aux normes.',
    anchor: '#portes-garage'
  },
  {
    id: 'volets',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="5" x2="21" y2="5"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="3" y1="17" x2="21" y2="17"/><line x1="3" y1="21" x2="21" y2="21"/></svg>`,
    title: 'Volets roulants',
    short: 'Installation, motorisation et remplacement de volets roulants sur toute la côte.',
    detail: 'Volets roulants aluminium ou PVC, motorisés ou manuels. Remplacement de tabliers, réparation de mécanismes, motorisation de volets existants.',
    anchor: '#volets'
  },
  {
    id: 'motorisation',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    title: 'Motorisation',
    short: 'Automatisez vos portails et accès existants. Compatible toutes marques.',
    detail: 'Motorisation de portails, portes et volets existants. Centrales Nice, Somfy, BFT, FAAC. Programmation, télécommandes, applications smartphone.',
    anchor: '#motorisation'
  },
  {
    id: 'depannage',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    title: 'Dépannage & maintenance',
    short: 'Intervention rapide en cas de panne. Contrats d\'entretien pour syndics et entreprises.',
    detail: 'Dépannage urgent portails et automatismes en panne. Remplacement de pièces toutes marques. Contrats de maintenance annuels pour copropriétés et professionnels.',
    anchor: '#depannage'
  }
]
</script>

<template>
  <section class="services" :id="preview ? 'services' : undefined">
    <div class="container">

      <div
        class="services__header"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <p class="services__eyebrow">Ce que nous faisons</p>
        <h2 class="services__title">Nos prestations</h2>
        <p class="services__intro">
          Spécialistes de la fermeture dans les Alpes-Maritimes, nous intervenons chez les particuliers comme auprès des professionnels — syndics, promoteurs, entreprises.
        </p>
      </div>

      <div class="services__grid">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          class="services__card"

          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 70 } }"
        >
          <span class="services__card-num" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="services__card-icon" aria-hidden="true" v-html="service.icon"></div>
          <h3 class="services__card-title">{{ service.title }}</h3>
          <p class="services__card-text">
            {{ preview ? service.short : service.detail }}
          </p>
          <NuxtLink
            v-if="preview"
            :to="`/services${service.anchor}`"
            class="services__card-link"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </NuxtLink>
        </article>
      </div>

      <div v-if="preview" class="services__cta">
        <NuxtLink to="/services" class="services__cta-btn">
          Voir toutes nos prestations
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.services {
  padding-block: var(--space-24);
  background-color: #1E2229;
  border-bottom: 3px solid var(--color-red);
}

/* ── En-tête ── */
.services__header {
  text-align: left;
  margin-bottom: var(--space-16);
  border-top: 2px solid var(--color-red);
  padding-top: var(--space-6);
}

.services__eyebrow {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.70);
  margin-bottom: var(--space-4);
  max-width: none;
}

.services__title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 9vw, 7rem);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 0.92;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-6);
}

.services__intro {
  font-size: var(--text-base);
  color: rgba(255,255,255,0.55);
  max-width: 52ch;
  line-height: 1.6;
}

/* ── Grille ── */
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  /* 5e carte seule : la centrer en lui donnant la pleine largeur */
  .services__card:nth-child(5):last-child {
    grid-column: 1 / -1;
    max-width: 50%;
    margin-inline: auto;
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(6, 1fr);
  }
  .services__card:nth-child(1),
  .services__card:nth-child(2) {
    grid-column: span 3;
  }
  .services__card:nth-child(3),
  .services__card:nth-child(4),
  .services__card:nth-child(5) {
    grid-column: span 2;
  }
}

/* ── Carte ── */
.services__card {
  position: relative;
  padding: var(--space-8);
  border: 1px solid rgba(255,255,255,0.07);
  background-color: #262B33;
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.services__card:hover {
  border-color: var(--color-red);
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  transform: translateY(-3px);
}

/* Numéro décoratif */
.services__card-num {
  position: absolute;
  top: -10px;
  right: var(--space-4);
  font-family: var(--font-display);
  font-size: clamp(4rem, 8vw, 6rem);
  font-weight: 900;
  color: rgba(255,255,255,0.40);
  line-height: 1;
  letter-spacing: -0.04em;
  pointer-events: none;
  user-select: none;
}

.services__card-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--space-4);
  color: var(--color-red);
  line-height: 1;
  position: relative;
  z-index: 1;
}

.services__card-title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-xl), 2.5vw, var(--text-2xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-3);
  line-height: 1;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
}

.services__card-text {
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.55);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-5);
  max-width: none;
  position: relative;
  z-index: 1;
}

.services__card-link {
  font-size: var(--text-sm);
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-red);
  transition: gap var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: auto;
}

.services__card-link:hover {
  gap: var(--space-3);
}

/* ── CTA bas ── */
.services__cta {
  text-align: center;
  margin-top: var(--space-12);
}

.services__cta-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-10);
  border: 2px solid rgba(255,255,255,0.25);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-white);
  transition: background-color var(--transition-base), color var(--transition-base), border-color var(--transition-base);
}

.services__cta-btn:hover {
  background-color: var(--color-white);
  color: var(--color-black);
  border-color: var(--color-white);
}

@media (prefers-reduced-motion: reduce) {
  .services__card {
    transition: none;
  }
  .services__card:hover {
    transform: none;
  }
}
</style>
