<template>
  <div class="band" aria-hidden="true">
    <div class="band__track">
      <span v-for="n in 10" :key="n" class="band__item">
        INSTALLATION&nbsp;<span class="band__dot">·</span>&nbsp;MOTORISATION&nbsp;<span class="band__dot">·</span>&nbsp;DÉPANNAGE&nbsp;<span class="band__dot">·</span>&nbsp;CÔTE D'AZUR&nbsp;<span class="band__dot">·</span>&nbsp;
      </span>
    </div>
  </div>
</template>

<style scoped>
.band {
  overflow: hidden;
  background-color: var(--color-red);
  padding-block: var(--space-3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.band__track {
  display: flex;
  white-space: nowrap;
  animation: marquee 28s linear infinite;
  width: max-content;
}

.band__item {
  font-family: var(--font-display);
  font-size: clamp(0.75rem, 1.5vw, 1rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-white);
  flex-shrink: 0;
}

.band__dot {
  color: rgba(255, 255, 255, 0.5);
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .band__track {
    animation: none;
  }
}
</style>
