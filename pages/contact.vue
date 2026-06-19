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
    <ContactSection />
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
</style>
