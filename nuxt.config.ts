// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
    // assets: '/<rootDir>/assets',
  },
  css: ['~/assets/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@vueuse/nuxt', '@nuxt/content'],
});
