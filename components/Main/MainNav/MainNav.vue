<template>
  <ul class="main-nav">
    <li class="main-nav__item" v-for="(item, index) in routeLinks" :key="index">
      <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const { routeLinks } = useRouteLinks();
</script>

<style lang="scss">
@import './main-nav.scss';
</style>
