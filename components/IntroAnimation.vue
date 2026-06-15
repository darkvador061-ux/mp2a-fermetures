<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useIntroAnimation } from '~/composables/useIntroAnimation'

const { $gsap: gsap } = useNuxtApp()
const visible = ref(false)
const { checkAndPlay, markPlayed } = useIntroAnimation()

onMounted(async () => {
  if (window.innerWidth < 1024) return
  if (!checkAndPlay()) return

  visible.value = true
  await nextTick()

  const tl = gsap.timeline({
    onComplete: () => {
      markPlayed()
      visible.value = false
    }
  })

  tl
    .from('.intro__logo', {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .to({}, { duration: 0.8 })
    .to('#intro-left', {
      x: '-100vw',
      duration: 0.9,
      ease: 'power3.inOut'
    }, '>')
    .to('#intro-right', {
      x: '100vw',
      duration: 0.9,
      ease: 'power3.inOut'
    }, '<')
})
</script>

<template>
  <Transition name="intro">
    <div v-if="visible" class="intro" aria-hidden="true">

      <div id="intro-left" class="intro__half intro__half--left">
        <div class="intro__logo-wrap">
          <img :src="'/logo-white.png'" alt="" class="intro__logo" />
        </div>
      </div>

      <div id="intro-right" class="intro__half intro__half--right">
        <div class="intro__logo-wrap">
          <img :src="'/logo-white.png'" alt="" class="intro__logo" />
        </div>
      </div>

    </div>
  </Transition>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: var(--z-intro);
  display: flex;
  pointer-events: none;
}

/* Chaque moitié occupe 50% de l'écran
   et affiche le même logo centré mais clippe sa moitié */
.intro__half {
  width: 50%;
  height: 100%;
  background-color: var(--color-black);
  overflow: hidden;
  position: relative;
}

/* Le wrapper s'étend sur toute la largeur de l'écran depuis chaque moitié,
   pour que le logo paraisse centré sur les deux halves simultanément */
.intro__logo-wrap {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* La moitié gauche commence à x=0, donc left:0 aligne le wrapper sur l'écran entier */
.intro__half--left .intro__logo-wrap {
  left: 0;
}

/* La moitié droite commence à x=50vw, donc left:-50vw ramène le wrapper à x=0 page */
.intro__half--right .intro__logo-wrap {
  left: -50%;
}

.intro__logo {
  width: min(320px, 45vw);
  height: auto;
}

/* Transition de sortie (fondu si GSAP a déjà fait le mouvement) */
.intro-leave-active { transition: opacity 0.2s; }
.intro-leave-to    { opacity: 0; }
</style>
