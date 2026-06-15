<template>
  <section class="hero" aria-label="Présentation MP2A Fermetures">
    <!-- Fond : image à placer dans /public/hero-bg.jpg quand disponible -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__overlay"></div>
    </div>

    <div class="container hero__content">
      <p class="hero__eyebrow">Portails · Volets · Portes de garage · Clôtures</p>

      <h1 class="hero__title">
        <img :src="'/logo-text.png'" alt="MP2A Fermetures" class="hero__title-brand-img" />
        L'excellence de la fermeture,<br>
        <span class="hero__title-accent">dans le 06.</span>
      </h1>

      <p class="hero__subtitle">
        Installation, motorisation et dépannage — Alpes-Maritimes (06)
      </p>

      <div class="hero__ctas">
        <NuxtLink to="/contact" class="hero__cta-primary">
          Demander un devis gratuit
        </NuxtLink>
        <a href="tel:+33698258937" class="hero__cta-secondary">
          <span class="hero__cta-icon">📞</span>
          06 98 25 89 37
        </a>
      </div>

      <!-- Badges de confiance -->
      <div class="hero__badges">
        <div class="hero__badge">
          <strong>10+</strong>
          <span>ans d'expérience</span>
        </div>
        <div class="hero__badge-sep" aria-hidden="true"></div>
        <div class="hero__badge">
          <strong>06</strong>
          <span>Alpes-Maritimes</span>
        </div>
        <div class="hero__badge-sep" aria-hidden="true"></div>
        <div class="hero__badge">
          <strong>Devis</strong>
          <span>gratuit & rapide</span>
        </div>
      </div>
    </div>

    <!-- Flèche scroll -->
    <a href="#services" class="hero__scroll" aria-label="Voir nos services">
      <span class="hero__scroll-line"></span>
    </a>
  </section>
</template>

<style scoped>
/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  overflow: hidden;
}

/* ── Fond ── */
.hero__bg {
  position: absolute;
  inset: 0;
  background-color: var(--color-black);
  /* Quand l'image est prête : */
  /* background-image: url('/hero-bg.jpg'); */
  /* background-size: cover; */
  /* background-position: center; */
  background-image: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 40%, #111 100%);
}

/* Ligne rouge décorative en haut à gauche */
.hero__bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--color-red);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10,10,10,0.3) 0%,
    rgba(10,10,10,0.5) 60%,
    rgba(10,10,10,0.85) 100%
  );
}

/* ── Contenu ── */
.hero__content {
  position: relative;
  z-index: 1;
  padding-block: var(--space-24);
  text-align: center;
}

@media (min-width: 1024px) {
  .hero__content {
    text-align: left;
    max-width: 860px;
    margin-inline: 0;
  }
}

/* Eyebrow */
.hero__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-4);
  max-width: none;
}

/* H1 */
.hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 6vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.hero__title-brand-img {
  display: block;
  height: clamp(40px, 6vw, 70px);
  width: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: left center;
  margin-bottom: var(--space-2);
}

.hero__title-accent {
  color: var(--color-red);
}

/* Sous-titre */
.hero__subtitle {
  font-size: clamp(var(--text-base), 2vw, var(--text-xl));
  font-weight: 400;
  color: var(--color-grey);
  margin-bottom: var(--space-10);
  max-width: 52ch;
  margin-inline: auto;
}

@media (min-width: 1024px) {
  .hero__subtitle {
    margin-inline: 0;
  }
}

/* CTAs */
.hero__ctas {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-16);
}

@media (min-width: 480px) {
  .hero__ctas {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .hero__ctas {
    justify-content: flex-start;
  }
}

.hero__cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid var(--color-red);
  transition: background-color var(--transition-base), color var(--transition-base);
  white-space: nowrap;
}

.hero__cta-primary:hover {
  background-color: var(--color-red-dark);
  border-color: var(--color-red-dark);
}

.hero__cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-6);
  border: 2px solid rgba(255,255,255,0.3);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: border-color var(--transition-base), background-color var(--transition-base);
  white-space: nowrap;
}

.hero__cta-secondary:hover {
  border-color: var(--color-white);
  background-color: rgba(255,255,255,0.08);
}

.hero__cta-icon {
  font-style: normal;
  font-size: var(--text-lg);
}

/* Badges */
.hero__badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}

@media (min-width: 1024px) {
  .hero__badges {
    justify-content: flex-start;
  }
}

.hero__badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.hero__badge strong {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 900;
  color: var(--color-white);
  line-height: 1;
}

.hero__badge span {
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-grey-mid);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero__badge-sep {
  width: 1px;
  height: 40px;
  background-color: rgba(255,255,255,0.15);
}

/* Flèche scroll */
.hero__scroll {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255,255,255,0.4);
  transition: color var(--transition-base);
}

.hero__scroll:hover {
  color: rgba(255,255,255,0.8);
}

.hero__scroll-line {
  display: block;
  width: 1px;
  height: 48px;
  background: currentColor;
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50% { opacity: 1; transform: scaleY(0.6); transform-origin: top; }
}

@media (min-width: 768px) {
  .hero__scroll {
    display: flex;
  }
}
</style>
