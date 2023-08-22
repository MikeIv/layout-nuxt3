<template>
  <!--  <ul class="main-nav">-->
  <!--    <li class="main-nav__item" v-for="(item, index) in routeLinks" :key="index">-->
  <!--      <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>-->
  <!--    </li>-->
  <!--  </ul>-->

  <nav class="main-nav">
    <ul class="main-nav__list">
      <NuxtLink class="main-nav__item a-font__h4" :to="localePath('/portfolio')">{{ $t('navigation.portf') }}</NuxtLink>
      <NuxtLink class="main-nav__item a-font__h4" :to="localePath('/tools')">{{ $t('navigation.tools') }}</NuxtLink>
      <NuxtLink class="main-nav__item a-font__h4" :to="localePath('/useful')">{{ $t('navigation.useful') }}</NuxtLink>
      <NuxtLink class="main-nav__item a-font__h4" :to="localePath('/sandbox')">{{ $t('navigation.sandbox') }}</NuxtLink>
      <NuxtLink class="main-nav__item a-font__h4" :to="localePath('/contacts')">{{
        $t('navigation.contacts')
      }}</NuxtLink>
    </ul>
  </nav>
</template>

<script setup>
const { routeLinks } = useRouteLinks();
</script>

<style lang="scss">
@import 'main-nav';
</style>
