<script setup>
defineProps({
  preview: {
    type: Boolean,
    default: true
  }
})

const realisations = [
  {
    type: 'video',
    src: '/videos/portail-coulissant-serigraphie.mp4',
    titre: 'Portail coulissant sérigraphié',
    description: 'Mise en place d\'un portail coulissant sérigraphié sur mesure.',
    lieu: 'Alpes-Maritimes (06)'
  },
  {
    type: 'video',
    src: '/videos/porte-garage-basculante-sinetik.mp4',
    titre: 'Porte de garage basculante SINETIK',
    description: 'Mise en place d\'une porte de garage basculante SINETIK – Groupe Connexion avec portillon attenant.',
    lieu: 'Alpes-Maritimes (06)'
  },
  {
    type: 'image',
    src: '/images/sav-depannage-motorisation.jpg',
    titre: 'SAV & Dépannage motorisation',
    description: 'Interventions urgentes — 3 remises en service dans la journée : moteurs CARDIN / CAME / DORMAKABA.',
    lieu: 'Alpes-Maritimes (06)'
  }
]
</script>

<template>
  <section class="realisations" id="realisations">
    <div class="container">

      <div class="realisations__header">
        <p class="realisations__eyebrow">Nos chantiers</p>
        <h2 class="realisations__title">Nos réalisations</h2>
        <p class="realisations__intro">
          Quelques exemples de nos interventions dans les Alpes-Maritimes.
        </p>
      </div>

      <div class="realisations__grid">
        <article
          v-for="(r, i) in realisations"
          :key="i"
          class="realisations__card"
        >
          <div class="realisations__media">
            <video
              v-if="r.type === 'video'"
              :src="r.src"
              class="realisations__video"
              autoplay
              muted
              loop
              playsinline
              :aria-label="r.titre"
            ></video>
            <img
              v-else
              :src="r.src"
              :alt="r.titre"
              class="realisations__img"
              loading="lazy"
            />
          </div>
          <div class="realisations__info">
            <h3 class="realisations__card-title">{{ r.titre }}</h3>
            <p class="realisations__card-desc">{{ r.description }}</p>
            <span class="realisations__card-lieu">📍 {{ r.lieu }}</span>
          </div>
        </article>
      </div>

      <div v-if="preview" class="realisations__cta">
        <NuxtLink to="/realisations" class="realisations__cta-btn">
          Voir toutes nos réalisations
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.realisations {
  padding-block: var(--space-24);
  background-color: var(--color-grey-light);
}

.realisations__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.realisations__eyebrow {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.realisations__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-black);
  margin-bottom: var(--space-4);
}

.realisations__intro {
  font-size: var(--text-lg);
  color: var(--color-grey-mid);
  max-width: 55ch;
  margin-inline: auto;
}

.realisations__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-bottom: var(--space-12);
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
}

.realisations__card-lieu {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-red);
  letter-spacing: 0.04em;
}

.realisations__cta {
  text-align: center;
}

.realisations__cta-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-10);
  border: 2px solid var(--color-black);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-black);
  transition: background-color var(--transition-base), color var(--transition-base);
}

.realisations__cta-btn:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}
</style>
