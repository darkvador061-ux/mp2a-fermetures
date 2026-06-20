<template>
  <section class="hero" aria-label="Présentation MP2A Fermetures">
    <div class="hero__bg" aria-hidden="true" ref="heroBg">
      <div class="hero__overlay"></div>
    </div>

    <div class="container hero__content">
      <p
        class="hero__eyebrow"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
      >Portails · Volets · Portes de garage · Clôtures</p>

      <h1
        class="hero__title"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 220 } }"
      >
        Votre expert portails<br>
        <span class="hero__title-accent">&amp; fermetures 06.</span>
      </h1>

      <p
        class="hero__subtitle"
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 380 } }"
      >
        Installation, motorisation et dépannage — Alpes-Maritimes (06)
      </p>

      <div
        class="hero__ctas"
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500 } }"
      >
        <NuxtLink to="/contact" class="hero__cta-primary">
          Demander un devis gratuit
        </NuxtLink>
        <div class="hero__phone-display" aria-label="Anthony : 06 98 25 89 37">
          <svg class="hero__cta-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          06 98 25 89 37
        </div>
        <div class="hero__phone-display" aria-label="Alexandre : 06 84 23 03 76">
          <svg class="hero__cta-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          06 84 23 03 76
        </div>
      </div>

    </div>

    <!-- Flèche scroll -->
    <a href="#services" class="hero__scroll" aria-label="Voir nos services">
      <span class="hero__scroll-line"></span>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroBg = ref(null)
let rafId = null


function onScroll() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    if (heroBg.value) {
      const pct = 70 + window.scrollY * 0.018
      heroBg.value.style.backgroundPositionY = `${pct}%`
    }
    rafId = null
  })
}

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reducedMotion) {
    window.addEventListener('scroll', onScroll, { passive: true })
    if (heroBg.value) {
      heroBg.value.style.backgroundPositionY = `${70 + window.scrollY * 0.018}%`
    }
  }
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
/* ── Hero ── */
.hero {
  position: relative;
  min-height: 80svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  overflow: hidden;
}

@media (min-width: 1024px) {
  .hero {
    min-height: 100svh;
  }
}

/* ── Fond photo ── */
.hero__bg {
  position: absolute;
  inset: 0;
  background-color: var(--color-black);
  background-image: url('/hero-villa.jpg');
  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat;
  will-change: background-position-y;
}

@media (min-width: 768px) {
  .hero__bg {
    background-position: center 30%;
  }
}

@media (min-width: 1024px) {
  .hero__bg {
    background-size: 140%;
    background-position: center 50%;
  }
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10,10,10,0.45) 0%,
    rgba(10,10,10,0.35) 50%,
    rgba(10,10,10,0.75) 100%
  );
}

/* ── Contenu ── */
.hero__content {
  position: relative;
  z-index: 1;
  padding-top: calc(72px + var(--space-16));
  padding-bottom: var(--space-24);
  text-align: center;
}

@media (min-width: 1024px) {
  .hero__content {
    padding-top: calc(108px + var(--space-16));
    text-align: left;
    max-width: 860px;
    margin-inline: 0;
  }
}

/* Eyebrow */
.hero__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-5);
  max-width: none;
}

/* H1 */
.hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(3rem, 9vw, 7.5rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
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

.hero__phone-display {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-6);
  border: 2px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.7);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  user-select: text;
}

.hero__cta-icon {
  display: block;
  flex-shrink: 0;
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


@media (max-width: 639px) {
  .hero__badge-sep {
    display: none;
  }
  .hero__badge span {
    font-size: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll-line {
    animation: none;
    opacity: 0.5;
  }
}
</style>
