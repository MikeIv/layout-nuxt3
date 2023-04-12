<template>
  <section class="portfolio layout__wrapper">
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="(item, index) in dataList" :key="index">
        <!--        <AButton :label="$t('button_name.next')" />-->
        {{ index }}
        <AButton
          v-if="item.imgMob"
          :index="index"
          @handleClick="switchShow(index)"
          class="portfolio__mob-view shadow"
          onlyIcon="rounded"
          bgColor="accent"
        >
          <IconsMobile />
        </AButton>
        <AButton class="portfolio__item-info-toggle shadow" onlyIcon="rounded" bgColor="accent">
          <IconsInformation />
        </AButton>
        <div class="portfolio__img-wrapper">
          <img
            v-if="toggleView(index) && item.imgMob"
            :src="`/images/portfolio/${item.imgMob}`"
            alt="image"
            class="portfolio__img"
          />
          <img v-else :src="`/images/portfolio/${item.img}`" alt="image" class="portfolio__img" />
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

/*
mobileVersion
 */

// const showMobile = () => {
//   const showMobileVersion = ref(true);
//   showMobileVersion.value = !showMobileVersion.value;
//   console.log(showMobileVersion.value);
// };

const showMobile = ref(false);
const selectItem = ref(null);

const switchShow = (index) => {
  console.log(index);
  selectItem.value = index;
  console.log('selectItem.value', selectItem.value);
  console.log(showMobile.value);
  return (showMobile.value = !showMobile.value);
};

const toggleView = (index) => {
  console.log('TOGGLE', index);
  if (selectItem.value === index) return switchShow;
};
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
