export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const base = config.app.baseURL.replace(/\/$/, '')
  return {
    provide: {
      url: (path) => `${base}${path}`
    }
  }
})
