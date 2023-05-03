// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  modules: ["nuxt-headlessui", "nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["./store"],
  },
  image: {},
  plugins: ["~/plugins/v-calender.client.ts"],
  pinia: {
    autoImports: ["defineStore"],
  },
  ssr: false,
});
