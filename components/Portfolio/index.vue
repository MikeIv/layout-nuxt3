<template>
  <section class="portfolio layout__wrapper">
    <h1 class="portfolio__title a-font__h1">Портфолио</h1>
    <li v-for="(item, index) in dataList" :key="index">{{ item.name }} - {{ index }}</li>
  </section>
</template>

<script setup>
const { portfolio } = portfolioData();
console.log('DATA-PORTFOL', portfolio.value);
const dataList = portfolio.value;
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
