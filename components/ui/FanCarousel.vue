<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  items: { type: Array, required: true }
})

const emit = defineEmits(['select'])

const MAX_VISIBLE = 7
const HALF = 3

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -28, y: 6.5, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -20, y: 3.5, zIndex: 2 },
  { rot:  -7, scale: 0.9346, x: -10, y: 1.1, zIndex: 3 },
  { rot:   0, scale: 1.0,    x:   0, y: 0.0, zIndex: 10 },
  { rot:   7, scale: 0.9346, x:  10, y: 1.1, zIndex: 3 },
  { rot:  14, scale: 0.8498, x:  20, y: 3.5, zIndex: 2 },
  { rot:  21, scale: 0.7756, x:  28, y: 6.5, zIndex: 1 },
]

function slotConfig(totalVisible, slot) {
  if (totalVisible >= MAX_VISIBLE) return FAN_POSITIONS[slot]
  const center = totalVisible >> 1
  const d = totalVisible > 1 ? (slot - center) / center : 0
  const ad = Math.abs(d)
  return {
    rot: d * 21,
    scale: 1.0 - 0.2244 * ad * ad,
    x: d * 28,
    y: ad * ad * 6.5,
    zIndex: 10 - Math.abs(slot - center),
  }
}

const containerRef = ref(null)
const totalCards = computed(() => props.items.length)
const needsPagination = computed(() => totalCards.value > MAX_VISIBLE)
const centerIndex = ref(needsPagination.value ? HALF : (totalCards.value >> 1))

let isAnimating = false
let hasEntered = false
let direction = null
let prevVisible = new Set()
let cleanupHover = null

function visibleMap(center) {
  const map = new Map()
  if (!needsPagination.value) {
    props.items.forEach((_, i) => map.set(i, i))
    return map
  }
  for (let s = 0; s < MAX_VISIBLE; s++) {
    const idx = ((center + s - HALF) % totalCards.value + totalCards.value) % totalCards.value
    map.set(idx, s)
  }
  return map
}

function runAnimation() {
  const container = containerRef.value
  if (!container || !totalCards.value) return

  const cards = Array.from(container.querySelectorAll('.fan-card'))
  if (!cards.length) return

  const vm = visibleMap(centerIndex.value)
  const isFirst = !hasEntered
  const slotCount = needsPagination.value ? MAX_VISIBLE : totalCards.value
  const cfg = s => slotConfig(slotCount, s)

  if (isFirst) isAnimating = true

  let done = 0
  const total = vm.size
  const onDone = () => {
    done++
    if (done >= total) {
      isAnimating = false
      if (isFirst) hasEntered = true
      setupHover()
    }
  }

  cards.forEach((card, i) => {
    const slot = vm.get(i)
    const was = prevVisible.has(i)

    if (slot !== undefined) {
      const { x, y, rot, scale, zIndex } = cfg(slot)
      const target = { x: `${x}rem`, y: `${y}rem`, rotation: rot, scale, opacity: 1, zIndex }

      if (isFirst) {
        gsap.set(card, { x: 0, y: '12rem', rotation: 0, scale: 0.5, opacity: 0 })
        gsap.to(card, { ...target, duration: 1.2, ease: 'elastic.out(1.05,.78)', delay: 0.2 + slot * 0.06, onComplete: onDone })
      } else if (!was) {
        const ex = direction === 'right' ? 40 : -40
        gsap.set(card, { x: `${ex}rem`, y: `${y}rem`, rotation: direction === 'right' ? 30 : -30, scale: 0.5, opacity: 0 })
        gsap.to(card, { ...target, duration: 0.6, ease: 'power2.out', onComplete: onDone })
      } else {
        gsap.to(card, { ...target, duration: 0.5, ease: 'power2.out', onComplete: onDone })
      }
    } else if (was) {
      const ex = direction === 'right' ? -40 : 40
      gsap.to(card, { x: `${ex}rem`, opacity: 0, scale: 0.5, rotation: direction === 'right' ? -30 : 30, duration: 0.4, ease: 'power2.in', zIndex: 0 })
    } else if (isFirst) {
      gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 })
    }
  })

  prevVisible = new Set(vm.keys())
}

function setupHover() {
  if (cleanupHover) { cleanupHover(); cleanupHover = null }

  const container = containerRef.value
  if (!container) return

  const cards = Array.from(container.querySelectorAll('.fan-card'))
  const vm = visibleMap(centerIndex.value)
  const slotCount = needsPagination.value ? MAX_VISIBLE : totalCards.value
  const cfg = s => slotConfig(slotCount, s)

  const entries = []
  cards.forEach((el, i) => {
    const slot = vm.get(i)
    if (slot !== undefined) entries.push({ el, slot })
  })
  entries.sort((a, b) => a.slot - b.slot)

  let activeSlot = null
  let leaveTimer = null
  const centerSlot = entries.length >> 1

  const updateHover = hoveredSlot => {
    entries.forEach(({ el, slot }) => {
      const base = cfg(slot)
      let tx = base.x, ty = base.y, tr = base.rot, ts = base.scale, delay = 0

      if (hoveredSlot !== null) {
        const dist = Math.abs(slot - hoveredSlot)
        delay = dist * 0.02
        if (slot === hoveredSlot) {
          ty -= 2.2
          ts *= 1.08
        } else {
          const norm = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0
          const push = 7 * (1 - Math.abs(norm)) * (1 + 0.2 * Math.max(0, 3 - dist))
          if (slot < hoveredSlot) { tx -= push; tr -= 3 / (dist + 1) }
          else { tx += push; tr += 3 / (dist + 1) }
          if (slot === entries.length - 1 && hoveredSlot < centerSlot) ty -= 1
          if (slot === 0 && hoveredSlot > centerSlot) ty -= 1
        }
      } else {
        delay = Math.abs(slot - centerSlot) * 0.02
      }

      gsap.to(el, { x: `${tx}rem`, y: `${ty}rem`, rotation: tr, scale: ts, duration: 0.5, delay, ease: 'elastic.out(1,.75)', overwrite: 'auto' })
      gsap.set(el, { zIndex: base.zIndex })
    })
  }

  const handlers = entries.map(({ el, slot }) => {
    const fn = () => {
      if (isAnimating) return
      if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null }
      if (activeSlot !== slot) { activeSlot = slot; updateHover(slot) }
    }
    el.addEventListener('mouseenter', fn)
    return { el, fn }
  })

  const onLeave = () => {
    if (isAnimating) return
    if (leaveTimer) clearTimeout(leaveTimer)
    leaveTimer = setTimeout(() => { activeSlot = null; updateHover(null) }, 50)
  }
  container.addEventListener('mouseleave', onLeave)

  const onResize = () => { if (!isAnimating) updateHover(activeSlot) }
  window.addEventListener('resize', onResize)

  cleanupHover = () => {
    handlers.forEach(({ el, fn }) => el.removeEventListener('mouseenter', fn))
    container.removeEventListener('mouseleave', onLeave)
    window.removeEventListener('resize', onResize)
    if (leaveTimer) clearTimeout(leaveTimer)
  }
}

function cycle(dir) {
  if (isAnimating || !needsPagination.value) return
  isAnimating = true
  if (cleanupHover) { cleanupHover(); cleanupHover = null }
  direction = dir
  centerIndex.value = dir === 'right'
    ? (centerIndex.value + 1) % totalCards.value
    : (centerIndex.value - 1 + totalCards.value) % totalCards.value
}

watch(centerIndex, runAnimation)

onMounted(runAnimation)

onUnmounted(() => {
  if (cleanupHover) cleanupHover()
  const container = containerRef.value
  if (container) gsap.killTweensOf(container.querySelectorAll('.fan-card'))
})
</script>

<template>
  <div class="fc">
    <div ref="containerRef" class="fc__layout">
      <div
        v-for="(item, i) in items"
        :key="item.src || i"
        class="fan-card fc__card"
        role="button"
        :tabindex="i === centerIndex ? 0 : -1"
        :aria-label="`Voir : ${item.titre}`"
        @click="emit('select', item)"
        @keydown.enter="emit('select', item)"
      >
        <div class="fc__media">
          <video
            v-if="item.type === 'video'"
            :src="$url(item.src)"
            class="fc__video"
            muted
            loop
            playsinline
            preload="metadata"
            :aria-label="item.titre"
          />
          <img
            v-else
            :src="$url(item.src)"
            :alt="item.titre"
            class="fc__img"
            loading="lazy"
          />
          <div class="fc__overlay" aria-hidden="true">
            <div class="fc__play-btn">
              <svg v-if="item.type === 'video'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
            </div>
          </div>
          <span class="fc__badge">{{ item.categorie }}</span>
        </div>
        <div class="fc__info">
          <p class="fc__title">{{ item.titre }}</p>
          <span class="fc__lieu">
            <span class="fc__lieu-dot" aria-hidden="true"></span>
            {{ item.lieu }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="needsPagination" class="fc__nav">
      <button class="fc__nav-btn" @click="cycle('left')" aria-label="Réalisation précédente">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <div class="fc__dots" aria-hidden="true">
        <span
          v-for="(_, j) in items"
          :key="j"
          class="fc__dot"
          :class="{ 'fc__dot--active': j === centerIndex }"
        />
      </div>
      <button class="fc__nav-btn" @click="cycle('right')" aria-label="Réalisation suivante">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.fc {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.fc__layout {
  position: relative;
  width: 100%;
  height: 780px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.fan-card {
  position: absolute;
  width: 360px;
  height: 480px;
  cursor: pointer;
  will-change: transform;
  outline: none;
}

.fc__media {
  position: relative;
  width: 100%;
  height: 395px;
  overflow: hidden;
  background-color: #0d1014;
  border: 1px solid rgba(255,255,255,0.07);
  transition: border-color 250ms ease, box-shadow 250ms ease;
}

.fan-card:hover .fc__media {
  border-color: var(--color-red);
  box-shadow: 0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(227,6,19,0.35);
}

.fc__video,
.fc__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}

.fc__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.25);
  opacity: 0;
  transition: opacity 220ms ease;
}

.fan-card:hover .fc__overlay {
  opacity: 1;
}

.fc__play-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-red);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  box-shadow: 0 4px 20px rgba(227,6,19,0.5);
  padding-left: 1px;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.fan-card:hover .fc__play-btn {
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(227,6,19,0.7);
}

.fc__badge {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 3px 7px;
  background: rgba(0,0,0,0.82);
  border-left: 2px solid var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  pointer-events: none;
}

.fc__info {
  padding: 10px 12px;
  background-color: #1a1e25;
  border: 1px solid rgba(255,255,255,0.06);
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 60px;
  overflow: hidden;
}

.fc__title {
  font-family: var(--font-display);
  font-size: 10px;
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

.fc__lieu {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.fc__lieu-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-red);
  flex-shrink: 0;
}

/* ── Navigation ── */
.fc__nav {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding-bottom: var(--space-4);
}

.fc__nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 200ms ease, color 200ms ease, background 200ms ease;
  flex-shrink: 0;
}

.fc__nav-btn:hover {
  border-color: var(--color-red);
  color: var(--color-white);
  background: rgba(227,6,19,0.12);
}

.fc__dots {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 200px;
}

.fc__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  transition: background 250ms ease, transform 250ms ease;
  flex-shrink: 0;
}

.fc__dot--active {
  background: var(--color-red);
  transform: scale(1.4);
}

@media (prefers-reduced-motion: reduce) {
  .fan-card,
  .fc__media,
  .fc__overlay,
  .fc__play-btn,
  .fc__nav-btn,
  .fc__dot {
    transition: none;
  }
}
</style>
