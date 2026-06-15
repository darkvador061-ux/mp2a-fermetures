<script setup>
defineProps({
  preview: {
    type: Boolean,
    default: true
  }
})

const services = [
  {
    id: 'portails',
    icon: '🚪',
    title: 'Portails',
    short: 'Coulissants, battants, motorisés — installation sur mesure pour particuliers et professionnels.',
    detail: 'Nous installons tous types de portails : coulissants, battants, autoportants. Motorisation intégrée, télécommande, badge ou interphone. Matériaux : aluminium, acier, PVC, bois.',
    anchor: '#portails'
  },
  {
    id: 'portes-garage',
    icon: '🏠',
    title: 'Portes de garage',
    short: 'Sectionnelles, basculantes, enroulables — installation et motorisation toutes marques.',
    detail: 'Installation de portes de garage sectionnelles, basculantes et enroulables. Motorisation silencieuse, télécommande universelle, mise en sécurité conforme aux normes.',
    anchor: '#portes-garage'
  },
  {
    id: 'volets',
    icon: '🪟',
    title: 'Volets roulants',
    short: 'Installation, motorisation et remplacement de volets roulants sur toute la côte.',
    detail: 'Volets roulants aluminium ou PVC, motorisés ou manuels. Remplacement de tabliers, réparation de mécanismes, motorisation de volets existants.',
    anchor: '#volets'
  },
  {
    id: 'motorisation',
    icon: '⚙️',
    title: 'Motorisation',
    short: 'Automatisez vos portails et accès existants. Compatible toutes marques.',
    detail: 'Motorisation de portails, portes et volets existants. Centrales Nice, Somfy, BFT, FAAC. Programmation, télécommandes, applications smartphone.',
    anchor: '#motorisation'
  },
  {
    id: 'depannage',
    icon: '🔧',
    title: 'Dépannage & maintenance',
    short: 'Intervention rapide en cas de panne. Contrats d\'entretien pour syndics et entreprises.',
    detail: 'Dépannage urgent portails et automatismes en panne. Remplacement de pièces toutes marques. Contrats de maintenance annuels pour copropriétés et professionnels.',
    anchor: '#depannage'
  },
  {
    id: 'clotures',
    icon: '🛡️',
    title: 'Clôtures & contrôle d\'accès',
    short: 'Clôtures aluminium, grillage, interphones, visiphones et badges d\'accès.',
    detail: 'Pose de clôtures aluminium, rigides ou grillagées. Systèmes de contrôle d\'accès : interphones, visiphones, claviers à code, badges RFID pour résidences et entreprises.',
    anchor: '#clotures'
  }
]
</script>

<template>
  <section class="services" :id="preview ? 'services' : undefined">
    <div class="container">

      <div class="services__header">
        <p class="services__eyebrow">Ce que nous faisons</p>
        <h2 class="services__title">Nos prestations</h2>
        <p class="services__intro">
          Spécialistes de la fermeture dans les Alpes-Maritimes, nous intervenons chez les particuliers comme auprès des professionnels — syndics, promoteurs, entreprises.
        </p>
      </div>

      <div class="services__grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="services__card"
        >
          <div class="services__card-icon" aria-hidden="true">{{ service.icon }}</div>
          <h3 class="services__card-title">{{ service.title }}</h3>
          <p class="services__card-text">
            {{ preview ? service.short : service.detail }}
          </p>
          <NuxtLink
            v-if="preview"
            :to="`/services${service.anchor}`"
            class="services__card-link"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </NuxtLink>
        </article>
      </div>

      <div v-if="preview" class="services__cta">
        <NuxtLink to="/services" class="services__cta-btn">
          Voir toutes nos prestations
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.services {
  padding-block: var(--space-24);
  background-color: var(--bg);
}

/* ── En-tête ── */
.services__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.services__eyebrow {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.services__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-black);
  margin-bottom: var(--space-4);
}

.services__intro {
  font-size: var(--text-lg);
  color: var(--color-grey-mid);
  max-width: 60ch;
  margin-inline: auto;
}

/* ── Grille ── */
.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ── Carte ── */
.services__card {
  padding: var(--space-8);
  border: 1px solid var(--color-grey);
  background-color: var(--color-white);
  transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
  display: flex;
  flex-direction: column;
}

.services__card:hover {
  border-color: var(--color-red);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.services__card-icon {
  font-size: 2rem;
  margin-bottom: var(--space-4);
  line-height: 1;
}

.services__card-title {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-black);
  margin-bottom: var(--space-3);
  line-height: 1.1;
}

.services__card-text {
  font-size: var(--text-base);
  color: var(--color-grey-mid);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--space-5);
  max-width: none;
}

.services__card-link {
  font-size: var(--text-sm);
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-red);
  transition: gap var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: auto;
}

.services__card-link:hover {
  gap: var(--space-3);
}

/* ── CTA bas ── */
.services__cta {
  text-align: center;
  margin-top: var(--space-12);
}

.services__cta-btn {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-10);
  border: 2px solid var(--color-black);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-black);
  transition: background-color var(--transition-base), color var(--transition-base);
}

.services__cta-btn:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}
</style>
