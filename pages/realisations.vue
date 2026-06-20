<script setup>
useHead({
  title: 'Nos Réalisations — Galerie Chantiers | MP2A Fermetures',
  meta: [
    {
      name: 'description',
      content:
        'Galerie photo de nos chantiers : portails aluminium, portails fer forgé, volets roulants, portes de garage sectionnelles installés sur la Côte d\'Azur.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://mp2afermetures.fr/realisations' },
    { property: 'og:title', content: 'Nos Réalisations — Galerie Chantiers | MP2A Fermetures' },
    { property: 'og:description', content: 'Galerie photo de nos chantiers : portails aluminium, portails fer forgé, volets roulants, portes de garage sectionnelles installés sur la Côte d\'Azur.' },
    { property: 'og:image', content: 'https://mp2afermetures.fr/images/realisation-portail-coulissant.jpg' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://mp2afermetures.fr/images/realisation-portail-coulissant.jpg' },
  ],
})
</script>

<template>
  <div class="realisations-page">

    <!-- Galerie complète -->
    <RealisationsSection :preview="false" />

    <!-- CTA contact -->
    <section class="realisations-cta">
      <div class="container realisations-cta__inner">
        <h2 class="realisations-cta__title">Un projet similaire ?</h2>
        <p class="realisations-cta__text">Demandez un devis gratuit — réponse sous 24h.</p>
        <div class="realisations-cta__btns">
          <NuxtLink to="/contact" class="realisations-cta__btn-primary">Demander un devis gratuit</NuxtLink>
          <NuxtLink to="/contact" class="realisations-cta__btn-secondary">Nous contacter</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.realisations-page :deep(.realisations) {
  padding-top: calc(72px + var(--space-12));
}

@media (min-width: 1024px) {
  .realisations-page :deep(.realisations) {
    padding-top: calc(108px + var(--space-16));
  }
}

/* ── CTA bas ── */
.realisations-cta {
  padding-block: var(--space-20);
  background-color: var(--color-red);
  color: var(--color-white);
}

.realisations-cta__inner {
  text-align: center;
}

.realisations-cta__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-3);
}

.realisations-cta__text {
  font-size: var(--text-lg);
  color: var(--color-white);
  margin-bottom: var(--space-8);
  max-width: none;
}

.realisations-cta__btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

@media (min-width: 480px) {
  .realisations-cta__btns {
    flex-direction: row;
    justify-content: center;
  }
}

.realisations-cta__btn-primary {
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-white);
  color: var(--color-red);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background-color var(--transition-base), color var(--transition-base);
}

.realisations-cta__btn-primary:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}

.realisations-cta__btn-secondary {
  padding: var(--space-4) var(--space-8);
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: border-color var(--transition-base), background-color var(--transition-base);
}

.realisations-cta__btn-secondary:hover {
  border-color: var(--color-white);
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
