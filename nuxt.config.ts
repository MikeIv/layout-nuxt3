// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfolio',
      meta: [{ name: 'description', content: 'Сайт портфолио и полезные ресурсы' }],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }],
    },
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/styles', import.meta.url)),
    // 'assets': '/<rootDir>/assets',
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/tools";',
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

  modules: ['@vueuse/nuxt', '@nuxt/content', '@nuxtjs/i18n', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icons', '@nuxtjs/color-mode'],

  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },

  types: {
    files: [
      {
        expand: true,
        cwd: 'types',
        src: ['**'],
        dest: 'types/'
      }
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

  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
