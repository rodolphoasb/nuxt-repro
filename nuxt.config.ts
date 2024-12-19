// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["vue-clerk/nuxt"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  nitro: {
    experimental: {
      wasm: true,
    },
  },
  clerk: {
    publishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    signInForceRedirectUrl: "/app/dashboard",
    signUpForceRedirectUrl: "/app/dashboard",
    signInUrl: "/app/login",
    signUpUrl: "/app/login",
  },
});
