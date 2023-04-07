<template>
  <section class="portfolio layout__wrapper">
    <h1 class="portfolio__title a-font__h1">Портфолио</h1>
    {{ test }}

    <li v-for="(item, index) in dataList" :key="index">{{ item.name }} - {{ index }}</li>
  </section>
</template>

<script setup>
import { portfolio } from '/content/portfolio';

const test = portfolio;
const { portf } = portfolioData();
console.log('DATA-PORTFOL', portf.value);
const dataList = portf.value;
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
