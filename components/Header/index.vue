<template>
  <section class="header">
    <div v-if="isMobile" class="header__mobile-toggle">
      <button class="header__toggle-nav" :class="{ active: showNav }" @click="toggleNav" ref="navigation">
        <span></span>
      </button>

      <div v-if="showNav" class="header__mobile-menu"></div>
    </div>

    <ul v-if="isDesktop || isTabled" class="header__nav">
      <li class="header__item a-font__s" v-for="(item, index) in routeLinks" :key="index">
        <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </section>
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

const { isMobile, isTabled, isDesktop } = useResponsive();

const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value;
};
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
