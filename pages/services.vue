<script setup>
useHead({
  title: 'Nos Services — Portails, Volets, Portes de Garage | MP2A Fermetures',
  meta: [
    {
      name: 'description',
      content:
        'Installation, motorisation et dépannage de portails, volets roulants, portes de garage et contrôles d\'accès dans les Alpes-Maritimes (06). Devis gratuit.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://mp2afermetures.fr/services' },
    { property: 'og:title', content: 'Nos Services — Portails, Volets, Portes de Garage | MP2A Fermetures' },
    { property: 'og:description', content: 'Installation, motorisation et dépannage de portails, volets roulants, portes de garage et contrôles d\'accès dans les Alpes-Maritimes (06). Devis gratuit.' },
    { property: 'og:image', content: 'https://mp2afermetures.fr/hero-villa.jpg' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://mp2afermetures.fr/hero-villa.jpg' },
  ],
})
</script>

<template>
  <div>

    <!-- Bandeau page -->
    <section class="page-banner">
      <div class="container page-banner__content">
        <p class="page-banner__eyebrow">MP2A Fermetures</p>
        <h1 class="page-banner__title">Nos prestations</h1>
        <p class="page-banner__sub">
          Portails, volets, portes de garage, motorisation, dépannage et contrôle d'accès — dans tout le 06.
        </p>
      </div>
    </section>

    <!-- Grille complète des services -->
    <ServicesSection :preview="false" />

    <!-- Particuliers & Professionnels -->
    <section class="targets">
      <div class="container targets__grid">

        <div class="targets__card">
          <div class="targets__card-label">Pour les</div>
          <h2 class="targets__card-title">Particuliers</h2>
          <ul class="targets__list">
            <li>Installation de portail sur mesure</li>
            <li>Motorisation de portail existant</li>
            <li>Remplacement de volets roulants</li>
            <li>Porte de garage sectionnelle ou basculante</li>
            <li>Dépannage rapide en cas de panne</li>
            <li>Conseil et accompagnement de A à Z</li>
          </ul>
          <NuxtLink to="/contact" class="targets__cta">Demander un devis</NuxtLink>
        </div>

        <div class="targets__card targets__card--dark">
          <div class="targets__card-label">Pour les</div>
          <h2 class="targets__card-title">Professionnels</h2>
          <ul class="targets__list">
            <li>Syndics & copropriétés — maintenance et dépannage</li>
            <li>Promoteurs immobiliers — équipement résidences</li>
            <li>Entreprises — contrôle d'accès, barrières, interphones</li>
            <li>Contrats d'entretien annuels</li>
            <li>Intervention prioritaire</li>
            <li>Facturation entreprise & devis détaillé</li>
          </ul>
          <NuxtLink to="/contact" class="targets__cta targets__cta--light">Nous contacter</NuxtLink>
        </div>

      </div>
    </section>

    <!-- CTA contact -->
    <section class="services-cta">
      <div class="container services-cta__inner">
        <h2 class="services-cta__title">Un projet ? Un dépannage ?</h2>
        <p class="services-cta__text">Réponse sous 24h, devis gratuit et sans engagement.</p>
        <div class="services-cta__btns">
          <NuxtLink to="/contact" class="services-cta__btn-primary">Demander un devis gratuit</NuxtLink>
          <a href="tel:+33698258937" class="services-cta__btn-secondary">06 98 25 89 37</a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ── Bandeau page ── */
.page-banner {
  background-color: var(--color-black);
  color: var(--color-white);
  padding-top: calc(72px + var(--space-6));
  padding-bottom: var(--space-8);
  border-bottom: 3px solid var(--color-red);
}

@media (min-width: 768px) {
  .page-banner {
    padding-top: var(--space-16);
    padding-bottom: var(--space-12);
  }
}

@media (min-width: 1024px) {
  .page-banner {
    padding-top: calc(var(--space-20) + 108px);
    padding-bottom: var(--space-20);
  }
}

.page-banner__content {
  text-align: center;
}

.page-banner__eyebrow {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.page-banner__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-4xl), 6vw, var(--text-7xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-4);
}

.page-banner__sub {
  font-size: var(--text-lg);
  color: var(--color-grey-mid);
  max-width: 55ch;
  margin-inline: auto;
}

/* ── Particuliers & Professionnels ── */
.targets {
  padding-block: var(--space-24);
  background-color: #1E2229;
}

.targets__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .targets__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.targets__card {
  padding: var(--space-10);
  background-color: #262B33;
  color: var(--color-white);
  border-top: 4px solid var(--color-red);
  border-left: 1px solid rgba(255,255,255,0.07);
  border-right: 1px solid rgba(255,255,255,0.07);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  display: flex;
  flex-direction: column;
}

.targets__card--dark {
  background-color: var(--color-black);
  color: var(--color-white);
}

.targets__card-label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-2);
}

.targets__card-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 900;
  text-transform: uppercase;
  color: inherit;
  margin-bottom: var(--space-8);
  line-height: 1;
}

.targets__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-10);
  flex: 1;
}

.targets__list li {
  padding-left: var(--space-5);
  position: relative;
  font-size: var(--text-base);
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
}

.targets__card--dark .targets__list li {
  color: rgba(255,255,255,0.45);
}

.targets__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 8px;
  height: 2px;
  background-color: var(--color-red);
}

.targets__cta {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background-color var(--transition-base);
  align-self: flex-start;
}

.targets__cta:hover {
  background-color: var(--color-red-dark);
}

.targets__cta--light {
  background-color: transparent;
  border: 2px solid var(--color-red);
  color: var(--color-white);
}

.targets__cta--light:hover {
  background-color: var(--color-red);
}

/* ── CTA bas ── */
.services-cta {
  padding-block: var(--space-20);
  background-color: var(--color-red);
  color: var(--color-white);
}

.services-cta__inner {
  text-align: center;
}

.services-cta__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-3);
}

.services-cta__text {
  font-size: var(--text-lg);
  color: rgba(255,255,255,0.8);
  margin-bottom: var(--space-8);
  max-width: none;
}

.services-cta__btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

@media (min-width: 480px) {
  .services-cta__btns {
    flex-direction: row;
    justify-content: center;
  }
}

.services-cta__btn-primary {
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

.services-cta__btn-primary:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}

.services-cta__btn-secondary {
  padding: var(--space-4) var(--space-8);
  border: 2px solid rgba(255,255,255,0.6);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: border-color var(--transition-base), background-color var(--transition-base);
}

.services-cta__btn-secondary:hover {
  border-color: var(--color-white);
  background-color: rgba(255,255,255,0.1);
}
</style>
