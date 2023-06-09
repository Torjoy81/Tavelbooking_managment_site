// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  modules: [
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@nuxtjs/supabase",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["./store"],
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  plugins: ["~/plugins/v-calender.client.ts"],
  pinia: {
    autoImports: ["defineStore"],
  },
  ssr: false,
});
