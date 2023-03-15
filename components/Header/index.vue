<template>
  <ul class="header">
    <li class="header__item a-font__s" v-for="(item, index) in routeLinks" :key="index">
      <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
    </li>
  </ul>

  {{ widthWin }}
  {{ resizeWin() }}
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

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

const width = ref(null);

const resizeWin = () => {
  width.value = window.innerWidth;

  onMounted(() => {
    resizeWin();
    window.addEventListener('resize', resizeWin);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeWin);
  });

  return { width };
};
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
