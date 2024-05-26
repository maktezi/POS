import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'client/',
  devtools: { enabled: true },
  future: { typescriptBundlerResolution: false },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '_nuxt/assets/application_logo.svg' }]
    }
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@nuxtjs/color-mode', "@nuxt/image", 'nuxt-icon'],
  colorMode: {
    classSuffix: ''
  },
  // shadcn: {
  //   prefix: '',
  //   componentDir: './components/ui'
  // },
  runtimeConfig: {
    public: {
      // backendUrl: "http://localhost:8000",
      // frontendUrl: "http://localhost:3000",
      backendUrl: "https://posnuxtbackend.freshfromuspng.com",
      frontendUrl: "https://posnuxt.vercel.app",
    },
  },
  imports: { dirs: ['./utils", ./stores', './composables/*/*.{ts,js}'] },
  experimental: { asyncContext: true },
});
