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

    <!-- Menu mobile -->
    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="header__mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigation"
      >
        <nav>
          <ul class="header__mobile-list">
            <li v-for="link in links" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink to="/contact" class="header__mobile-cta">
          Demander un devis
        </NuxtLink>
        <div class="header__mobile-phones">
          <span class="header__mobile-phone">06 98 25 89 37 — Anthony</span>
          <span class="header__mobile-phone">06 84 23 03 76 — Alexandre</span>
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

.header.is-scrolled,
.header.menu-open {
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

.header.is-scrolled .header__logo-text,
.header.menu-open .header__logo-text {
  filter: brightness(0);
}

@media (min-width: 1024px) {
  .header__inner { height: 108px; }
  .header__logo { gap: 10px; }
  .header__logo-icon { height: 68px; }
  .header__logo-text { height: 42px; }
}

@media (min-width: 1024px) {
  .header.is-scrolled .header__logo-text,
  .header.menu-open .header__logo-text {
    filter: brightness(0);
  }
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
  color: var(--color-anthracite);
  font-weight: 700;
}

/* ── CTA desktop ── */
.header__cta {
  display: none;
  align-items: center;
  padding: var(--space-2) var(--space-5);
  background-color: transparent;
  color: var(--color-red);
  border: 1.5px solid var(--color-red);
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

.header.is-scrolled .header__burger-bar,
.header.menu-open .header__burger-bar {
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

/* ── Menu mobile ── */
.header__mobile {
  position: fixed;
  inset: 72px 0 0 0;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  padding: var(--space-8) var(--space-6);
  gap: var(--space-6);
  border-top: 1px solid var(--border);
  overflow-y: auto;
}

.header__mobile-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.header__mobile-list a {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--color-anthracite);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.2;
  transition: color var(--transition-fast);
  display: block;
  padding-block: var(--space-2);
  border-bottom: 1px solid var(--border);
}

.header__mobile-list a:hover,
.header__mobile-list a.router-link-exact-active {
  color: var(--color-red);
}

.header__mobile-cta {
  display: block;
  padding: var(--space-4) var(--space-6);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-align: center;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
  margin-top: auto;
}

.header__mobile-cta:hover {
  background-color: var(--color-red-dark);
}

.header__mobile-phones {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
}

.header__mobile-phone {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-grey-mid);
  text-align: center;
  transition: color var(--transition-fast);
}

.header__mobile-phone:hover {
  color: var(--color-anthracite);
}

/* ── Transition menu ── */
.menu-enter-active,
.menu-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Desktop ── */
@media (min-width: 1024px) {
  .header__nav   { display: block; }
  .header__cta   { display: inline-flex; }
  .header__burger { display: none; }
}
</style>
