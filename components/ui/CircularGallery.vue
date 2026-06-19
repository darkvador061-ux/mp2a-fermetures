<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  radius: {
    type: Number,
    default: 460
  },
  autoRotateSpeed: {
    type: Number,
    default: 0.06
  }
})

const emit = defineEmits(['select'])

const containerRef = ref(null)
const rotation = ref(0)
let currentSpeed = 0.06
let targetSpeed = 0.06
let rafId = null

const PROXIMITY_PX = 220

function distToRect(rect, x, y) {
  const dx = Math.max(rect.left - x, 0, x - rect.right)
  const dy = Math.max(rect.top - y, 0, y - rect.bottom)
  return Math.sqrt(dx * dx + dy * dy)
}

function onMouseMove(e) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const dist = distToRect(rect, e.clientX, e.clientY)

  if (dist === 0) {
    // Souris à l'intérieur — très lent
    targetSpeed = props.autoRotateSpeed * 0.08
  } else if (dist < PROXIMITY_PX) {
    // À l'approche — ralentissement progressif
    const t = dist / PROXIMITY_PX
    targetSpeed = props.autoRotateSpeed * (0.08 + t * 0.92)
  } else {
    targetSpeed = props.autoRotateSpeed
  }
}

function animate() {
  // Interpolation douce vers la vitesse cible
  currentSpeed += (targetSpeed - currentSpeed) * 0.04
  rotation.value += currentSpeed
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  currentSpeed = props.autoRotateSpeed
  targetSpeed = props.autoRotateSpeed
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  }
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onMouseMove)
  }
})

const anglePerItem = computed(() => 360 / props.items.length)

function getOpacity(index) {
  const itemAngle = index * anglePerItem.value
  const totalRot = rotation.value % 360
  const relative = ((itemAngle + totalRot) % 360 + 360) % 360
  const normalized = relative > 180 ? 360 - relative : relative
  return Math.max(0.12, 1 - normalized / 175)
}
</script>

<template>
  <div
    ref="containerRef"
    class="cg"
    role="region"
    aria-label="Galerie vidéo"
  >
    <div
      class="cg__stage"
      :style="{ transform: `rotateY(${rotation}deg)` }"
    >
      <div
        v-for="(item, i) in items"
        :key="item.src"
        class="cg__card"
        :style="{
          transform: `rotateY(${i * anglePerItem}deg) translateZ(${radius}px)`,
          opacity: getOpacity(i),
          zIndex: Math.round(getOpacity(i) * 10)
        }"
        role="button"
        :aria-label="`Voir la vidéo : ${item.titre}`"
        tabindex="0"
        @click="emit('select', item)"
        @keydown.enter="emit('select', item)"
      >
        <div class="cg__card-inner">
          <div class="cg__video-wrap">
            <video
              :src="$url(item.src)"
              class="cg__video"
              muted
              preload="metadata"
              playsinline
              :aria-label="item.titre"
            />
            <div class="cg__play" aria-hidden="true">
              <div class="cg__play-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
            <span class="cg__badge">{{ item.categorie }}</span>
          </div>
          <div class="cg__info">
            <p class="cg__title">{{ item.titre }}</p>
            <span class="cg__lieu">
              <span class="cg__lieu-dot" aria-hidden="true"></span>
              {{ item.lieu }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Conteneur principal ── */
.cg {
  position: relative;
  width: 100%;
  height: 500px;
  perspective: 1800px;
  cursor: default;
}

/* ── Plateau 3D rotatif ── */
.cg__stage {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

/* ── Carte ── */
.cg__card {
  position: absolute;
  width: 264px;
  height: 240px;
  left: 50%;
  top: 50%;
  margin-left: -132px;
  margin-top: -120px;
  cursor: pointer;
  transition: opacity 0.25s linear;
}

.cg__card-inner {
  width: 100%;
  height: 100%;
  background-color: #1a1e25;
  border: 1px solid rgba(255, 255, 255, 0.09);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 250ms ease, box-shadow 250ms ease, transform 260ms cubic-bezier(0.34, 1.4, 0.64, 1);
}

.cg__card:hover .cg__card-inner {
  border-color: var(--color-red);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(227, 6, 19, 0.4);
  transform: scale(1.07) translateY(-4px);
}

/* ── Zone vidéo ── */
.cg__video-wrap {
  position: relative;
  flex: 1;
  overflow: hidden;
  background-color: #0d1014;
  min-height: 0;
}

.cg__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

/* ── Overlay play ── */
.cg__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.28);
  opacity: 0;
  transition: opacity 220ms ease;
}

.cg__card:hover .cg__play {
  opacity: 1;
}

.cg__play-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-red);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  padding-left: 3px;
  box-shadow: 0 4px 20px rgba(227, 6, 19, 0.5);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.cg__card:hover .cg__play-btn {
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(227, 6, 19, 0.7);
}

/* ── Badge catégorie ── */
.cg__badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 3px 8px;
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.4;
  pointer-events: none;
}

/* ── Infos ── */
.cg__info {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-shrink: 0;
  background-color: #1a1e25;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.cg__title {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-white);
  line-height: 1.3;
  letter-spacing: 0.02em;
  max-width: none;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.cg__lieu {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.cg__lieu-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--color-red);
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cg__card-inner {
    transition: border-color 250ms ease, box-shadow 250ms ease;
  }
  .cg__card:hover .cg__card-inner {
    transform: none;
  }
}
</style>
