<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { value: 10, suffix: '+', label: 'Années d\'expérience', sublabel: 'Alpes-Maritimes' },
  { value: 6,  suffix: '',  label: 'Prestations',          sublabel: 'portails, volets, portes…' },
  { value: 7,  suffix: '',  label: 'Marques maîtrisées',   sublabel: 'Nice, Somfy, BFT, FAAC…' },
  { value: 24, suffix: 'h', label: 'Réponse devis',        sublabel: 'gratuit & sans engagement' },
]

const brands = ['Nice', 'Somfy', 'BFT', 'FAAC', 'Cardin', 'CAME', 'Dormakaba']

const counts = ref(stats.map(s => s.value))
const numsVisible = ref(false)
const sectionRef = ref(null)
const animated = ref(false)
let observer = null

function animateCount(index, target, delay = 0) {
  setTimeout(() => {
    const duration = 1000
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      counts.value[index] = Math.round(target * ease)
      if (progress < 1) requestAnimationFrame(tick)
    }
    counts.value[index] = 0
    requestAnimationFrame(tick)
  }, delay)
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion) {
    numsVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated.value) {
        animated.value = true
        numsVisible.value = true
        stats.forEach((s, i) => animateCount(i, s.value, i * 120))
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section class="trust" aria-label="Chiffres clés et engagements" ref="sectionRef">

    <!-- Chiffres clés -->
    <div class="trust__stats-wrap">
      <div class="container">
        <div class="trust__stats">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="trust__stat"
          >
            <strong class="trust__stat-num" :class="{ 'is-visible': numsVisible }">
              {{ counts[i] }}<span class="trust__stat-suffix">{{ stat.suffix }}</span>
            </strong>
            <span class="trust__stat-label">{{ stat.label }}</span>
            <span class="trust__stat-sub">{{ stat.sublabel }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Marques partenaires -->
    <div class="trust__brands-wrap">
      <div class="container">
        <p class="trust__brands-label" aria-label="Marques compatibles">Compatibles & maîtrisées</p>
        <ul class="trust__brands" aria-label="Liste des marques partenaires">
          <li
            v-for="brand in brands"
            :key="brand"
            class="trust__brand"
          >
            {{ brand }}
          </li>
        </ul>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* ── Section ── */
.trust {
  background-color: var(--color-anthracite);
}

/* ── Stats ── */
.trust__stats-wrap {
  padding-block: var(--space-12);
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.trust__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8) var(--space-6);
}

@media (min-width: 768px) {
  .trust__stats {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
}

.trust__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: var(--space-4);
  position: relative;
}

@media (min-width: 768px) {
  .trust__stat + .trust__stat {
    border-left: 1px solid rgba(255,255,255,0.07);
  }
}

.trust__stat-num {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 900;
  color: var(--color-white);
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: baseline;
  gap: 2px;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.trust__stat-num.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.trust__stat-suffix {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  color: var(--color-red);
  font-weight: 900;
}

.trust__stat-label {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-white);
  margin-top: var(--space-2);
}

.trust__stat-sub {
  font-size: var(--text-xs);
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.04em;
  margin-top: var(--space-1);
  text-transform: none;
}

/* ── Marques ── */
.trust__brands-wrap {
  padding-block: var(--space-6);
}

.trust__brands-label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.25);
  text-align: center;
  margin-bottom: var(--space-4);
  max-width: none;
}

.trust__brands {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--space-3) var(--space-8);
}

.trust__brand {
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.30);
  transition: color var(--transition-base);
  cursor: default;
  position: relative;
}

.trust__brand::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--color-red);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.trust__brand:hover {
  color: rgba(255,255,255,0.75);
}

.trust__brand:hover::after {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .trust__stat-num {
    transition: none;
  }
  .trust__brand {
    transition: none;
  }
  .trust__brand::after {
    transition: none;
  }
}
</style>
