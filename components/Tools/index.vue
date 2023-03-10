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
      <div class="tools__section" :id="item.id" v-for="(item, index) in contentList" :key="index">
        <div class="tools__logo-wrapper">
          <component :is="item.icon" class="tools__section-logo"></component>
        </div>
        <h2 class="tools__subtitle a-font__h3">{{ item.name }}</h2>
        <div class="tools__section-plugin-block" v-if="item.plugIn.length">
          <h4 class="tools__section-header a-font__h4">Plug-in's</h4>
          <ul class="tools__section-list-plugin">
            <li class="tools__section-item-plugin" v-for="plugin in item.plugIn">{{ plugin.name }}</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="tools__section">
      <h2 class="tools__subtitle a-font__h3">SVG</h2>
      <component :is="IconsTelegram"></component>
    </div>
  </section>
</template>

<script setup>
import { IconsCss, IconsHtml, IconsJs, IconsNuxt, IconsTelegram, IconsVue, IconsWebStorm } from '#components';

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
    id: 'js',
    cell: 'item-05',
    icon: IconsJs,
    href: 'https://learn.javascript.ru/',
    title: 'Js Doc',
  },
  {
    cell: 'item-06',
    icon: IconsHtml,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    title: 'HTML Doc',
  },
  {
    cell: 'item-07',
    icon: IconsCss,
    href: 'https://developer.mozilla.org/ru/docs/Web/CSS',
    title: 'CSS Doc',
  },
];

const contentList = [
  {
    id: 'vue',
    icon: IconsVue,
    name: 'Vue',
    plugIn: [],
  },
  {
    id: 'nuxt',
    icon: IconsNuxt,
    name: 'Nuxt',
    plugIn: [],
  },
  {
    id: 'webstorm',
    icon: IconsWebStorm,
    name: 'WebStorm',
    plugIn: [
      { name: '.env files support' },
      { name: '.ignore' },
      { name: 'Atom Material Icons' },
      { name: 'Color Highlighter' },
      { name: 'Indent Rainbow' },
      { name: 'Material Theme UI' },
      { name: 'Rainbow Brackets' },
      { name: 'Tabnine AI Code Completion' },
    ],
  },
  {
    id: 'js',
    icon: IconsJs,
    name: 'Js',
    plugIn: [],
  },
  {
    id: 'html',
    icon: IconsHtml,
    name: 'Html',
    plugIn: [],
  },
  {
    id: 'css',
    icon: IconsCss,
    name: 'Css',
    plugIn: [],
  },
];
</script>

<style scoped lang="scss">
@import './tools.scss';
</style>
