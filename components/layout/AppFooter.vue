<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <a href="/" aria-label="Accueil MP2A Fermetures">
          <img :src="$url('/logo-white.png')" alt="MP2A Fermetures" class="footer__logo-img" />
        </a>
        <p class="footer__tagline">Portails · Volets · Portes de garage<br>Alpes-Maritimes</p>
      </div>

      <nav class="footer__nav" aria-label="Navigation secondaire">
        <ul>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/realisations">Réalisations</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact & Devis</NuxtLink></li>
        </ul>
      </nav>

      <div class="footer__contact">
        <a href="tel:+33698258937">06 98 25 89 37 — Anthony</a>
        <a href="tel:+33684230376">06 84 23 03 76 — Alexandre</a>
        <a href="mailto:contact@mp2afermetures.fr">contact@mp2afermetures.fr</a>
        <address>Hameau du Canadel, Villa 11<br>309 Bd Honoré Teisseire<br>06480 La Colle-sur-Loup</address>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} MP2A Fermetures — Tous droits réservés</p>
        <a href="https://www.instagram.com/mp2afermetures" target="_blank" rel="noopener noreferrer" aria-label="Instagram MP2A Fermetures">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-black);
  color: var(--color-grey);
  margin-top: auto;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-10);
  padding-top: var(--space-16);
  padding-bottom: var(--space-12);
  border-top: 2px solid var(--color-red);
}

@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-8);
  }
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__logo-img {
  height: 100px;
  width: auto;
  display: block;
}

.footer__tagline {
  font-size: var(--text-sm);
  color: var(--color-grey-mid);
  line-height: 1.7;
  max-width: 100%;
}

/* Nav */
.footer__nav ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__nav a {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-grey);
  transition: color var(--transition-fast);
}

.footer__nav a:hover {
  color: var(--color-red);
}

/* Contact */
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__contact a,
.footer__contact address {
  font-size: var(--text-sm);
  color: var(--color-grey);
  font-style: normal;
  line-height: 1.6;
  transition: color var(--transition-fast);
}

.footer__contact a:hover {
  color: var(--color-red);
}

/* Bottom bar */
.footer__bottom {
  border-top: 1px solid var(--color-grey-dark);
  padding-block: var(--space-5);
}

.footer__bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.footer__bottom p,
.footer__bottom a {
  font-size: var(--text-xs);
  color: var(--color-grey-mid);
}

.footer__bottom a:hover {
  color: var(--color-red);
}
</style>
