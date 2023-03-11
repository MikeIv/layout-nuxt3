<template>
  <ul class="header">
    <li class="header__item a-font__s" v-for="(item, index) in routeLinks" :key="index">
      <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const routeLinks = [
  {
    name: 'Портфолио',
    route: '/portfolio',
  },
  {
    name: 'Инструменты',
    route: '/tools',
  },
  {
    name: 'Песочница',
    route: '/sandbox',
  },
  {
    name: 'Контакты',
    route: '/contacts',
  },
];
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
