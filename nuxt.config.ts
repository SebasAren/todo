// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@bg-dev/nuxt-naiveui",
    "@sidebase/nuxt-auth",
    "@vite-pwa/nuxt",
  ],
  auth: {
    provider: { type: "authjs", defaultProvider: "github", trustHost: false },
  },
  build: {
    transpile: ["trpc-nuxt"],
  },
  compatibilityDate: "2024-08-19",
  devtools: {
    enabled: true,
  },
  typescript: {
    shim: false,
  },
});
