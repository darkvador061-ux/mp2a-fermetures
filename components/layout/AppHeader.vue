<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
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

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">

      <!-- Logo -->
      <NuxtLink to="/" class="header__logo" aria-label="MP2A Fermetures — Accueil">
        <img :src="$url('/logo-header.png')" alt="MP2A Fermetures" class="header__logo-img" />
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
        <span class="header__mobile-phone">
          06 84 23 03 76 — Alexandre
        </span>
      </div>
    </Transition>

  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background-color: var(--color-black);
  border-bottom: 2px solid var(--color-red);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  height: 88px;
}

/* ── Logo ── */
.header__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.header__logo-img {
  height: 56px;
  width: auto;
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
  color: var(--color-grey);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color var(--transition-fast);
  position: relative;
  padding-bottom: 2px;
}

.header__nav-list a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-red);
  transition: width var(--transition-base);
}

.header__nav-list a:hover {
  color: var(--color-white);
}

.header__nav-list a:hover::after,
.header__nav-list a.router-link-exact-active::after {
  width: 100%;
}

.header__nav-list a.router-link-exact-active {
  color: var(--color-white);
}

/* ── CTA desktop ── */
.header__cta {
  display: none;
  align-items: center;
  padding: var(--space-2) var(--space-5);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
  white-space: nowrap;
  flex-shrink: 0;
}

.header__cta:hover {
  background-color: var(--color-red-dark);
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
  background-color: var(--color-white);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base);
  transform-origin: center;
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
  inset: 90px 0 0 0;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  padding: var(--space-8) var(--space-6);
  gap: var(--space-6);
  border-top: 1px solid var(--color-grey-dark);
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
  color: var(--color-grey);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.2;
  transition: color var(--transition-fast);
  display: block;
  padding-block: var(--space-2);
  border-bottom: 1px solid var(--color-grey-dark);
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

.header__mobile-phone {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-grey-mid);
  text-align: center;
  transition: color var(--transition-fast);
}

.header__mobile-phone:hover {
  color: var(--color-white);
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
