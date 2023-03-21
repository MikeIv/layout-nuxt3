<template>
  <section class="header shadow">
    <div v-if="isMobile" class="header__mobile-toggle">
      <button class="header__toggle-nav" :class="{ active: showNav }" @click="toggleNav" ref="navigation">
        <span></span>
      </button>

      <nav v-if="showNav" class="header__mobile-menu">
        <ul class="header__list">
          <li class="header__item-mob a-font__m-m" v-for="(item, index) in routeLinks" :key="index" @click="toggleNav">
            <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <nav v-if="isDesktop || isTabled" class="header__nav">
      <ul class="header__nav-list">
        <li class="header__item a-font__s" v-for="(item, index) in routeLinks" :key="index">
          <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
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
