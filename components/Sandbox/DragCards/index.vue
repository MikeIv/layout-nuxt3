<template>
  <section class="drag-cards layout-useful__wrapper">
    <CommonButtonBack link="/sandbox" />
    <CommonHeader title="Карточки" />
    <h2>{{ $route.params }}</h2>
    <div class=""></div>

  </section>
</template>

<script setup>
const route = useRoute();

</script>

<style lang="scss">
@import './drag-cards.scss';
</style>