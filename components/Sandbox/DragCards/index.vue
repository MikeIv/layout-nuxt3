<template>
  <section class="drag-cards layout-useful__wrapper">
    <NuxtLink to="/sandbox" class="drag-cards__btn-back">
      <span class="a-font__s">назад</span>
    </NuxtLink>
    <h2>{{ $route.params }} – Карточки</h2>
    <div class=""></div>

  </section>
</template>

<script setup>
const route = useRoute();

</script>

<style lang="scss">
@import './drag-cards.scss';
</style>