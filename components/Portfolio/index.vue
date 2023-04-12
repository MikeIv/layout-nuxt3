<template>
  <section class="portfolio layout__wrapper">
    <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">{{
      locale.name
    }}</a>
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="(item, index) in dataList" :key="index">
        <!--        <AButton :label="$t('button_name.next')" />-->
        <AButton class="portfolio__mob-icon shadow" onlyIcon="rounded" bgColor="accent">
          <IconsMobile />
        </AButton>
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
import AButton from '~/components/_ui/AButton/a_button.vue';

const jobs = portfolio;

/*
Data reactive
 */
const { portf } = portfolioData();
const dataList = portf.value.reverse();
console.log('dataList', dataList);
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
