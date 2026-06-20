<script setup>
useHead({
  title: 'MP2A Fermetures — Portails, Volets, Portes de Garage | Côte d\'Azur',
  meta: [
    {
      name: 'description',
      content:
        'Installation, motorisation et dépannage de portails, volets roulants et portes de garage dans les Alpes-Maritimes. Devis gratuit — MP2A Fermetures, La Colle-sur-Loup.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://mp2afermetures.fr/' },
    { property: 'og:title', content: 'MP2A Fermetures — Portails, Volets, Portes de Garage | Côte d\'Azur' },
    { property: 'og:description', content: 'Installation, motorisation et dépannage de portails, volets roulants et portes de garage dans les Alpes-Maritimes. Devis gratuit.' },
    { property: 'og:image', content: 'https://mp2afermetures.fr/hero-villa.jpg' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'MP2A Fermetures — Portails, Volets, Portes de Garage | Côte d\'Azur' },
    { name: 'twitter:description', content: 'Installation, motorisation et dépannage de portails, volets roulants et portes de garage dans les Alpes-Maritimes. Devis gratuit.' },
    { name: 'twitter:image', content: 'https://mp2afermetures.fr/hero-villa.jpg' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'MP2A Fermetures',
        'description': 'Installation, motorisation et dépannage de portails, volets roulants, portes de garage et contrôles d\'accès dans les Alpes-Maritimes.',
        'url': 'https://mp2afermetures.fr',
        'image': 'https://mp2afermetures.fr/hero-villa.jpg',
        'telephone': ['+33698258937', '+33684230376'],
        'email': 'contact@mp2afermetures.fr',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Hameau du Canadel, Villa 11, 309 Bd Honoré Teisseire',
          'addressLocality': 'La Colle-sur-Loup',
          'postalCode': '06480',
          'addressRegion': 'Alpes-Maritimes',
          'addressCountry': 'FR',
        },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Alpes-Maritimes',
        },
        'sameAs': ['https://www.instagram.com/mp2afermetures'],
        'priceRange': '$$',
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <TrustSection />
    <MarqueeBand />
    <ServicesSection />
    <RealisationsSection />
    <ContactSection />
  </div>
</template>
