import { ref } from 'vue'

export function useIntroAnimation() {
  const shouldPlay = ref(false)

  function checkAndPlay() {
    if (typeof window === 'undefined') return false
    const played = sessionStorage.getItem('mp2a_intro_played')
    if (!played) {
      shouldPlay.value = true
      return true
    }
    return false
  }

  function markPlayed() {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('mp2a_intro_played', '1')
    }
    shouldPlay.value = false
  }

  return { shouldPlay, checkAndPlay, markPlayed }
}
