import vsharp from 'vite-plugin-vsharp';

export default defineNuxtConfig({
  runtimeConfig: {
    stripeSecret: process.env.NUXT_STRIPE_SECRET,
    stripeWebhookSecret:
      process.env.NUXT_STRIPE_WEBHOOK_SECRET,
    public: {
      stripeKey: process.env.NUXT_STRIPE_PUBLIC_KEY,
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  vite: {
    plugins: [vsharp()],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*'], // We implement our own auth behaviour in the auth middleware
    },
  },
});
