<template>
  <section class="portfolio layout__wrapper">
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="(item, index) in dataList" :key="index">
        <div class="portfolio__img-wrapper">
          <img :src="`/images/portfolio/${item.img}`" alt="image" class="portfolio__img" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
/*
import JSON
*/

import { portfolio } from '/content/portfolio';

const jobs = portfolio;

/*
Data reactive
 */
const { portf } = portfolioData();
const dataList = portf.value;
console.log('dataList', dataList);
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
