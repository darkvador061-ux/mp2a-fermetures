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
          <li><NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></li>
          <li><NuxtLink to="/politique-de-confidentialite">Politique de confidentialité</NuxtLink></li>
        </ul>
      </nav>

      <div class="footer__contact">
        <span>06 98 25 89 37 — Anthony</span>
        <span>06 84 23 03 76 — Alexandre</span>
        <a href="mailto:contact@mp2afermetures.fr">contact@mp2afermetures.fr</a>
        <address>Hameau du Canadel, Villa 11<br>309 Bd Honoré Teisseire<br>06480 La Colle-sur-Loup</address>
      </div>
    </div>

    <div class="footer__legal-bar">
      <div class="container">
        <span class="footer__legal-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Assurance décennale souscrite
        </span>
        <span class="footer__legal-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
          Devis gratuit sans engagement
        </span>
        <span class="footer__legal-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Intervention rapide 06
        </span>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} MP2A Fermetures — Tous droits réservés</p>
        <div class="footer__bottom-links">
          <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
          <span aria-hidden="true">·</span>
          <NuxtLink to="/politique-de-confidentialite">Confidentialité</NuxtLink>
          <span aria-hidden="true">·</span>
          <a href="https://www.instagram.com/mp2afermetures" target="_blank" rel="noopener noreferrer" aria-label="MP2A Fermetures sur Instagram" class="footer__instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-anthracite);
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
  height: 44px;
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

/* Barre badges légaux */
.footer__legal-bar {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-block: var(--space-4);
}

.footer__legal-bar .container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.footer__legal-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: 500;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.04em;
}

.footer__legal-badge svg {
  color: var(--color-red);
  flex-shrink: 0;
}

/* Bottom bar */
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-block: var(--space-4);
}

.footer__bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.footer__bottom p,
.footer__bottom-links a {
  font-size: var(--text-xs);
  color: var(--color-grey-mid);
}

.footer__bottom-links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.25);
}

.footer__bottom-links a {
  transition: color var(--transition-fast);
}

.footer__bottom-links a:hover {
  color: var(--color-red);
}
</style>
