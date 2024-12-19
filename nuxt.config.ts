// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["vue-clerk/nuxt"],
  compatibilityDate: "2024-07-02",
  devtools: { enabled: true },
  nitro: {
    experimental: {
      wasm: true,
    },
  },
  runtimeConfig: {
    clerk: {
      secretKey: process.env.NUXT_CLERK_SECRET_KEY,
    },
  },
});
