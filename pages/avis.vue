<script setup>
useHead({
  title: 'Avis Clients — MP2A Fermetures | Côte d\'Azur',
  meta: [
    {
      name: 'description',
      content:
        'Témoignages et avis clients vérifiés sur nos interventions de pose et dépannage de portails et volets dans les Alpes-Maritimes.',
    },
  ],
})

const avis = [
  {
    nom: 'Jean-Pierre M.',
    ville: 'Vence',
    note: 5,
    date: 'il y a 2 semaines',
    texte: 'Intervention rapide pour la motorisation de mon portail coulissant. Équipe sérieuse, propre et efficace. Le portail fonctionne parfaitement. Je recommande sans hésiter MP2A Fermetures.'
  },
  {
    nom: 'Sophie L.',
    ville: 'Cagnes-sur-Mer',
    note: 5,
    date: 'il y a 1 mois',
    texte: 'Dépannage en urgence un vendredi soir, portail bloqué. Anthony est arrivé dans l\'heure, problème réglé rapidement et au bon prix. Excellent service, à recommander !'
  },
  {
    nom: 'Michel R.',
    ville: 'Antibes',
    note: 5,
    date: 'il y a 2 mois',
    texte: 'Installation d\'une porte de garage sectionnelle motorisée. Très beau travail, finitions impeccables. Alexandre a pris le temps d\'expliquer le fonctionnement et de paramétrer les télécommandes. Top !'
  },
  {
    nom: 'Isabelle C.',
    ville: 'Saint-Paul-de-Vence',
    note: 5,
    date: 'il y a 2 mois',
    texte: 'Remplacement de 3 volets roulants. Devis rapide, prix compétitif, pose soignée. L\'équipe est ponctuelle et professionnelle. Ma villa est transformée, je suis ravie du résultat.'
  },
  {
    nom: 'Résidence Les Mimosas',
    ville: 'Nice',
    note: 5,
    date: 'il y a 3 mois',
    texte: 'En tant que syndic, nous faisons confiance à MP2A pour la maintenance de nos portails de copropriété. Réactivité exemplaire, contrat d\'entretien au top. Partenaire fiable sur le long terme.'
  },
  {
    nom: 'Patrick D.',
    ville: 'La Colle-sur-Loup',
    note: 5,
    date: 'il y a 4 mois',
    texte: 'Pose d\'un portail aluminium battant avec interphone vidéo. Travail soigné, respectueux du délai annoncé. Le rendu est vraiment beau et la motorisation est silencieuse. Très satisfait.'
  },
  {
    nom: 'Marie-France T.',
    ville: 'Mougins',
    note: 5,
    date: 'il y a 5 mois',
    texte: 'Excellent artisan local ! Prise en charge rapide pour le remplacement de ma motorisation de portail hors d\'usage. Tarif honnête et travail propre. Je n\'hésiterai pas à faire appel à eux de nouveau.'
  },
  {
    nom: 'David K.',
    ville: 'Cannes',
    note: 4,
    date: 'il y a 6 mois',
    texte: 'Très bon travail pour l\'installation de notre clôture et portillon. Léger retard sur le planning mais l\'équipe a bien communiqué. Résultat final très satisfaisant, je recommande.'
  },
  {
    nom: 'Sylvie B.',
    ville: 'Grasse',
    note: 5,
    date: 'il y a 7 mois',
    texte: 'MP2A a installé notre porte de garage enroulable. Rapport qualité-prix imbattable dans la région. Anthony est de bon conseil et n\'essaie pas de vous vendre plus que nécessaire. Honnêteté appréciée !'
  }
]

const noteGlobale = 4.9
const totalAvis = 47
</script>

<template>
  <div class="avis-page">

    <!-- Bandeau -->
    <section class="page-banner">
      <div class="container page-banner__content">
        <p class="page-banner__eyebrow">Ce que disent nos clients</p>
        <h1 class="page-banner__title">Avis clients</h1>

        <!-- Note globale -->
        <div class="avis-global">
          <div class="avis-global__stars" aria-label="Note 4.9 sur 5">
            <span v-for="i in 5" :key="i" class="avis-global__star" :class="{ 'avis-global__star--full': i <= Math.round(noteGlobale) }">★</span>
          </div>
          <div class="avis-global__score">{{ noteGlobale }}<span>/5</span></div>
          <div class="avis-global__count">{{ totalAvis }} avis Google</div>
        </div>
      </div>
    </section>

    <!-- Grille d'avis -->
    <section class="avis-section">
      <div class="container">
        <div class="avis-grid">
          <article v-for="(a, i) in avis" :key="i" class="avis-card">
            <div class="avis-card__header">
              <div class="avis-card__avatar" aria-hidden="true">{{ a.nom[0] }}</div>
              <div class="avis-card__meta">
                <p class="avis-card__nom">{{ a.nom }}</p>
                <p class="avis-card__ville">{{ a.ville }}</p>
              </div>
              <div class="avis-card__date">{{ a.date }}</div>
            </div>
            <div class="avis-card__stars" :aria-label="`Note ${a.note} sur 5`">
              <span v-for="j in 5" :key="j" class="avis-card__star" :class="{ 'avis-card__star--full': j <= a.note }">★</span>
            </div>
            <p class="avis-card__texte">{{ a.texte }}</p>
            <div class="avis-card__source" aria-label="Avis Google">
              <svg class="avis-card__google" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Avis Google</span>
            </div>
          </article>
        </div>

        <!-- CTA -->
        <div class="avis-cta">
          <p class="avis-cta__text">Vous êtes client ? Partagez votre expérience.</p>
          <a href="https://g.page/r/" target="_blank" rel="noopener noreferrer" class="avis-cta__btn">
            Laisser un avis Google
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ── Bandeau ── */
.page-banner {
  background-color: var(--color-black);
  color: var(--color-white);
  padding-top: calc(var(--space-20) + 88px);
  padding-bottom: var(--space-16);
  border-bottom: 3px solid var(--color-red);
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
  margin-bottom: var(--space-8);
}

/* Note globale */
.avis-global {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.avis-global__stars {
  display: flex;
  gap: 4px;
}

.avis-global__star {
  font-size: 1.75rem;
  color: rgba(255,255,255,0.2);
}

.avis-global__star--full {
  color: #F9AB00;
}

.avis-global__score {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 900;
  color: var(--color-white);
  line-height: 1;
}

.avis-global__score span {
  font-size: var(--text-2xl);
  color: var(--color-grey-mid);
}

.avis-global__count {
  font-size: var(--text-sm);
  color: var(--color-grey-mid);
  letter-spacing: 0.06em;
}

/* ── Section avis ── */
.avis-section {
  padding-block: var(--space-20);
  background-color: var(--color-grey-light);
}

.avis-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
  margin-bottom: var(--space-16);
}

@media (min-width: 640px) {
  .avis-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .avis-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── Carte avis ── */
.avis-card {
  background-color: var(--color-white);
  padding: var(--space-6);
  border: 1px solid var(--color-grey);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.avis-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.avis-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 900;
  font-size: var(--text-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avis-card__meta {
  flex: 1;
}

.avis-card__nom {
  font-weight: 700;
  font-size: var(--text-sm);
  color: var(--color-black);
  max-width: none;
}

.avis-card__ville {
  font-size: var(--text-xs);
  color: var(--color-grey-mid);
  max-width: none;
}

.avis-card__date {
  font-size: var(--text-xs);
  color: var(--color-grey-mid);
  white-space: nowrap;
}

.avis-card__stars {
  display: flex;
  gap: 2px;
}

.avis-card__star {
  font-size: 1rem;
  color: var(--color-grey);
}

.avis-card__star--full {
  color: #F9AB00;
}

.avis-card__texte {
  font-size: var(--text-sm);
  color: var(--color-grey-dark);
  line-height: 1.65;
  flex: 1;
  max-width: none;
}

.avis-card__source {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: auto;
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-grey);
}

.avis-card__source span {
  font-size: var(--text-xs);
  color: var(--color-grey-mid);
}

/* ── CTA ── */
.avis-cta {
  text-align: center;
}

.avis-cta__text {
  font-size: var(--text-lg);
  color: var(--color-grey-mid);
  margin-bottom: var(--space-5);
  max-width: none;
}

.avis-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background-color var(--transition-base);
}

.avis-cta__btn:hover {
  background-color: var(--color-red);
}
</style>
