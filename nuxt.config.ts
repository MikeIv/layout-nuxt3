// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfolio',
      meta: [{ name: 'description', content: 'Мой сайт' }],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }],
    },
  },
  alias: {
    '@': resolve(__dirname, '/'),
    // assets: '/<rootDir>/assets',
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/tools/_mixins.scss";',
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@vueuse/nuxt', '@nuxt/content', '@nuxtjs/i18n', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icons'],

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**'
    ]
  },

  i18n: {
    locales: [
      { code: 'ru', name: 'Ru', file: 'ru.json' },
      { code: 'en', name: 'Eng', file: 'en.json' },
    ],
    langDir: '/locales/',
    defaultLocale: 'ru',
    lazy: true,
    vueI18n: {
      legacy: false,
      locale: 'ru',
      messages: {},
    },
  },
});
