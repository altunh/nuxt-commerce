import { __prod__ } from "@/lib/constants"

export default defineNuxtConfig({
  devtools: {
    enabled: true 
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/color-mode',
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
    'cal-sans'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  components: {
    dirs: [
      { 
        path: '~/components',
        pathPrefix: false
      }
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  auth: {
    baseURL: process.env.AUTH_BASE,
    isEnabled: true,
    globalAppMiddleware: false,
  },
  colorMode: {
    classSuffix: '',
    preference: "system",
    fallback: "light",
    componentName: "ColorScheme"
  },
  googleFonts: {
    families: {
      Inter: true
    }
  }
})
