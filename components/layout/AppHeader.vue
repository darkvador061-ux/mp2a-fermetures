<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

// Ferme le menu à chaque changement de page
watch(() => route.path, () => {
  menuOpen.value = false
})

// Bloque le scroll body quand le menu est ouvert
watch(menuOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

// Détection scroll — header transparent → blanc
function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  if (typeof window === 'undefined') return
  scrolled.value = window.scrollY > 60
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'menu-open': menuOpen }">
    <div class="container header__inner">

      <!-- Logo -->
      <NuxtLink to="/" class="header__logo" aria-label="MP2A Fermetures — Accueil">
        <img :src="$url('/logo-icon.png')" alt="" class="header__logo-icon" aria-hidden="true" />
        <img :src="$url('/logo-text.png')" alt="MP2A Fermetures" class="header__logo-text" />
      </NuxtLink>

      <!-- Nav desktop -->
      <nav class="header__nav" aria-label="Navigation principale">
        <ul class="header__nav-list">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- CTA desktop -->
      <NuxtLink to="/contact" class="header__cta">
        Devis gratuit
      </NuxtLink>

      <!-- Burger -->
      <button
        class="header__burger"
        :class="{ 'is-open': menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Ouvrir le menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="header__burger-bar" />
        <span class="header__burger-bar" />
        <span class="header__burger-bar" />
      </button>

    </div>

    <!-- Overlay -->
    <Transition name="overlay">
      <div
        v-if="menuOpen"
        class="header__overlay"
        aria-hidden="true"
        @click="menuOpen = false"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="drawer">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="header__drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigation"
      >
        <div class="header__drawer-top">
          <NuxtLink to="/" class="header__drawer-logo" aria-label="Accueil">
            <img :src="$url('/logo-icon.png')" alt="" height="36" aria-hidden="true" />
          </NuxtLink>
          <button
            class="header__drawer-close"
            @click="menuOpen = false"
            aria-label="Fermer le menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav class="header__drawer-nav">
          <ul class="header__drawer-list">
            <li v-for="link in links" :key="link.to">
              <NuxtLink :to="link.to" class="header__drawer-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header__drawer-bottom">
          <NuxtLink to="/contact" class="header__drawer-cta">
            Devis gratuit — Réponse 24h
          </NuxtLink>
          <div class="header__drawer-phones">
            <a href="tel:+33698258937" class="header__drawer-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              06 98 25 89 37
            </a>
            <a href="tel:+33684230376" class="header__drawer-phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              06 84 23 03 76
            </a>
          </div>
        </div>
      </div>
    </Transition>

  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background-color: transparent;
  border-bottom: 1px solid transparent;
  box-shadow: none;
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease;
}

.header.is-scrolled {
  background-color: var(--color-white);
  border-bottom-color: var(--border);
  box-shadow: 0 1px 8px rgba(0,0,0,.06);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  height: 72px;
}

/* ── Logo ── */
.header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.header__logo-icon {
  height: 44px;
  width: auto;
}

.header__logo-text {
  height: 28px;
  width: auto;
  filter: brightness(0) invert(1);
  transition: filter 300ms ease;
}

.header.is-scrolled .header__logo-text {
  filter: brightness(0);
}

@media (min-width: 1024px) {
  .header__inner { height: 108px; }
  .header__logo { gap: 10px; }
  .header__logo-icon { height: 68px; }
  .header__logo-text { height: 42px; }
}


/* ── Nav desktop ── */
.header__nav {
  display: none;
}

.header__nav-list {
  display: flex;
  gap: var(--space-8);
}

.header__nav-list a {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color var(--transition-fast);
  position: relative;
  padding-bottom: 4px;
}

.header.is-scrolled .header__nav-list a {
  color: var(--color-anthracite);
}

.header__nav-list a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-red);
  transition: width var(--transition-base);
}

.header__nav-list a:hover {
  color: var(--color-red);
}

.header__nav-list a:hover::after,
.header__nav-list a.router-link-exact-active::after {
  width: 100%;
}

.header__nav-list a.router-link-exact-active {
  color: var(--color-white);
  font-weight: 700;
}

.header.is-scrolled .header__nav-list a.router-link-exact-active {
  color: var(--color-anthracite);
}

/* ── CTA desktop ── */
.header__cta {
  display: none;
  align-items: center;
  padding: var(--space-2) var(--space-5);
  background-color: transparent;
  color: var(--color-white);
  border: 1.5px solid var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
}

.header__cta:hover {
  background-color: var(--color-red);
  color: var(--color-white);
}

.header.is-scrolled .header__cta {
  background-color: var(--color-red);
  color: var(--color-white);
  border-color: var(--color-red);
}

.header.is-scrolled .header__cta:hover {
  background-color: var(--color-red-dark);
  border-color: var(--color-red-dark);
}

/* ── Burger ── */
.header__burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: var(--space-2);
  flex-shrink: 0;
}

.header__burger-bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgba(255,255,255,0.9);
  border-radius: 0;
  transition: transform var(--transition-base), opacity var(--transition-base), background-color 300ms ease;
  transform-origin: center;
}

.header.is-scrolled .header__burger-bar {
  background-color: var(--color-anthracite);
}

.header__burger.is-open .header__burger-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.header__burger.is-open .header__burger-bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.header__burger.is-open .header__burger-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Overlay ── */
.header__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: calc(var(--z-sticky) + 1);
  backdrop-filter: blur(2px);
}

.overlay-enter-active,
.overlay-leave-active { transition: opacity 280ms ease; }
.overlay-enter-from,
.overlay-leave-to     { opacity: 0; }

/* ── Drawer ── */
.header__drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(300px, 85vw);
  background-color: #111316;
  border-left: 1px solid rgba(255,255,255,0.06);
  z-index: calc(var(--z-sticky) + 2);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.drawer-enter-active,
.drawer-leave-active { transition: transform 320ms cubic-bezier(0.4, 0, 0.2, 1); }
.drawer-enter-from,
.drawer-leave-to     { transform: translateX(100%); }

/* Top du drawer */
.header__drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  flex-shrink: 0;
}

.header__drawer-logo img {
  height: 36px;
  width: auto;
  display: block;
}

.header__drawer-close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.5);
  border: 1px solid rgba(255,255,255,0.1);
  transition: color 200ms ease, border-color 200ms ease;
}
.header__drawer-close:hover {
  color: var(--color-white);
  border-color: rgba(255,255,255,0.3);
}

/* Nav */
.header__drawer-nav {
  flex: 0 0 auto;
  padding: var(--space-6) var(--space-6) var(--space-4);
}

.header__drawer-list {
  display: flex;
  flex-direction: column;
}

.header__drawer-link {
  display: block;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.75);
  padding-block: var(--space-4);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: color 200ms ease, padding-left 200ms ease;
}

.header__drawer-link:hover,
.header__drawer-link.router-link-exact-active {
  color: var(--color-white);
  padding-left: var(--space-2);
}

.header__drawer-link.router-link-exact-active {
  color: var(--color-red);
}

/* Bottom */
.header__drawer-bottom {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  border-top: 1px solid rgba(255,255,255,0.07);
  flex-shrink: 0;
}

.header__drawer-cta {
  display: block;
  padding: var(--space-4);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: center;
  white-space: nowrap;
  transition: background-color var(--transition-fast);
}
.header__drawer-cta:hover {
  background-color: var(--color-red-dark);
}

.header__drawer-phones {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.header__drawer-phone {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.45);
  transition: color 200ms ease;
}
.header__drawer-phone:hover {
  color: rgba(255,255,255,0.75);
}

/* ── Desktop ── */
@media (min-width: 1024px) {
  .header__nav   { display: block; }
  .header__cta   { display: inline-flex; }
  .header__burger { display: none; }
}
</style>
