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

</script>

<template>
  <div class="contact-page">

    <!-- Formulaire principal -->
    <ContactSection />

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
