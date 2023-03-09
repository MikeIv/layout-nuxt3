<template>
  <section class="tools layout__wrapper">
    <h1 class="tools__title a-font__h1">Инструменты</h1>
    <div class="tools__header">
      <ul class="tools__header-list">
        <li class="tools__header-item item-header">Технологии</li>
        <li class="tools__header-item" :class="item.cell" v-for="(item, index) in techList" :key="index">
          <div class="tools__header-img-wrapper">
            <component :is="item.icon"></component>
          </div>
          <div class="tools__header-link-group">
            <a :href="`${item.href}`" class="tools__header-sourse a-font__s" target="_blank">{{ item.title }}</a>
            <a :href="`#${item.id}`" class="tools__header-link a-font__s">#</a>
          </div>
        </li>
      </ul>
    </div>
    <section class="tools__content">
      <div class="tools__section" id="vue">
        <div class="tools__logo-wrapper">
          <IconsVue class="tools__section-logo" />
        </div>
        <h2 class="tools__subtitle a-font__h3">Vue</h2>
      </div>
      <div class="tools__section" id="nuxt">
        <div class="tools__logo-wrapper">
          <IconsNuxt class="tools__section-logo" />
        </div>
        <h2 class="tools__subtitle a-font__h3">Nuxt</h2>
      </div>
      <div class="tools__section">
        <h2 class="tools__subtitle a-font__h3">SVG</h2>
        <component :is="IconsTelegram"></component>
      </div>
    </section>
  </section>
</template>

<script setup>
import { IconsNuxt, IconsTelegram, IconsVue, IconsWebStorm } from '#components';

const techList = [
  {
    id: 'vue',
    cell: 'item-02',
    icon: IconsVue,
    href: 'https://v3.ru.vuejs.org/',
    title: 'Vue.js Doc',
  },
  {
    id: 'nuxt',
    cell: 'item-03',
    icon: IconsNuxt,
    href: 'https://nuxt.com/',
    title: 'Nuxt Doc',
  },
  {
    id: 'webstorm',
    cell: 'item-04',
    icon: IconsWebStorm,
    href: 'https://www.jetbrains.com/webstorm/',
    title: 'WebStorm',
  },
  {
    cell: 'item-05',
    icon: IconsNuxt,
    href: 'https://nuxt.com/',
    title: 'Nuxt Doc',
  },
  {
    cell: 'item-06',
    icon: IconsNuxt,
    href: 'https://nuxt.com/',
    title: 'Nuxt Doc',
  },
  {
    cell: 'item-07',
    icon: IconsNuxt,
    href: 'https://nuxt.com/',
    title: 'Nuxt Doc',
  },
];
</script>

<style scoped lang="scss">
@import './tools.scss';
</style>
