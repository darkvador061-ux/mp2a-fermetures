<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  speed: { type: Number, default: 0.55 }
})

const emit = defineEmits(['select'])

const containerRef = ref(null)
const trackRef = ref(null)
let x = 0
let singleSetW = 0
let currentSpeed = 0
let targetSpeed = 0
let rafId = null

const PROXIMITY_PX = 200

// Triple des items pour boucle infinie seamless
const loopItems = computed(() => [
  ...props.items,
  ...props.items,
  ...props.items
])

function distToRect(rect, mx, my) {
  const dx = Math.max(rect.left - mx, 0, mx - rect.right)
  const dy = Math.max(rect.top - my, 0, my - rect.bottom)
  return Math.sqrt(dx * dx + dy * dy)
}

function onMouseMove(e) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const dist = distToRect(rect, e.clientX, e.clientY)

  if (dist === 0) {
    // Souris sur le carousel : arrêt
    targetSpeed = 0
  } else if (dist < PROXIMITY_PX) {
    // À l'approche : ralentissement progressif
    const t = dist / PROXIMITY_PX
    targetSpeed = props.speed * Math.pow(t, 1.6)
  } else {
    targetSpeed = props.speed
  }
}

function animate() {
  // Interpolation douce vers la vitesse cible
  currentSpeed += (targetSpeed - currentSpeed) * 0.045

  // Direction gauche → droite (x augmente)
  x += currentSpeed

  // Reset seamless quand on a défilé un set complet
  if (singleSetW > 0 && x > 0) {
    x -= singleSetW
  }

  if (trackRef.value) {
    trackRef.value.style.transform = `translateX(${x}px)`
  }

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  if (typeof window === 'undefined') return
  currentSpeed = props.speed
  targetSpeed = props.speed

  nextTick(() => {
    if (trackRef.value) {
      singleSetW = trackRef.value.scrollWidth / 3
      x = -singleSetW  // Démarre sur le 2e set (invisible à gauche)
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)
  })
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onMouseMove)
  }
})
</script>

<template>
  <div
    ref="containerRef"
    class="cc"
    role="region"
    aria-label="Galerie photos réalisations"
  >
    <div ref="trackRef" class="cc__track">
      <div
        v-for="(item, i) in loopItems"
        :key="i"
        class="cc__card"
        role="button"
        tabindex="-1"
        @click="emit('select', item)"
      >
        <img
          :src="$url(item.src)"
          :alt="item.titre"
          class="cc__img"
          loading="lazy"
          draggable="false"
        />
        <div class="cc__overlay">
          <span class="cc__badge">{{ item.categorie }}</span>
          <p class="cc__title">{{ item.titre }}</p>
          <span class="cc__lieu">
            <span class="cc__lieu-dot" aria-hidden="true"></span>
            {{ item.lieu }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Conteneur clip ── */
.cc {
  display: block;
  width: 100%;
  overflow: hidden;
  cursor: default;
  padding-block: var(--space-4);
}

/* ── Piste (les 3 sets bout à bout) ── */
.cc__track {
  display: flex;
  gap: 20px;
  will-change: transform;
  user-select: none;
  -webkit-user-drag: none;
}

/* ── Carte photo ── */
.cc__card {
  flex-shrink: 0;
  width: 240px;
  height: 180px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 250ms ease, box-shadow 250ms ease;
}

@media (min-width: 640px) {
  .cc__card {
    width: 320px;
    height: 240px;
  }
}

@media (min-width: 1024px) {
  .cc__card {
    width: 400px;
    height: 300px;
  }
}

.cc__card:hover {
  border-color: var(--color-red);
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.55);
}

/* ── Image ── */
.cc__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cc__card:hover .cc__img {
  transform: scale(1.05);
}

/* ── Overlay info ── */
.cc__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.82) 0%,
    rgba(0, 0, 0, 0.18) 55%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-4) var(--space-5);
  gap: var(--space-1);
  opacity: 1;
  transition: background 280ms ease;
}

.cc__card:hover .cc__overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.4) 55%,
    transparent 100%
  );
}

.cc__badge {
  display: inline-block;
  width: fit-content;
  padding: 2px var(--space-2);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.cc__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-sm), 1.5vw, var(--text-base));
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.2;
  letter-spacing: 0.01em;
  max-width: none;
}

.cc__lieu {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin-top: 2px;
}

.cc__lieu-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-red);
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cc__img {
    transition: none;
  }
}
</style>
