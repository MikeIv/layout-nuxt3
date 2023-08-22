<template>
  <section class="posts-view layout-custom__wrapper">
    <h2>{{ $route.params.slug }} - {{ $route.params.id }}</h2>
    <div class="posts-view__img-wrapper"></div>
    <NuxtLink to="/" class="main__gallery-link">
      <span class="a-font__s">На главную</span>
    </NuxtLink>
  </section>
</template>

<script setup>
const route = useRoute();
const imgId = route.params.id;
</script>

<style lang="scss">
@import './posts-view.scss';
</style>
