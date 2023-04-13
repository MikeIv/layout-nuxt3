<template>
  <section class="portfolio layout__wrapper">
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="(item, index) in dataList" :key="index">
        <!--        <AButton :label="$t('button_name.next')" />-->
        <AButton
          v-if="item.imgMob"
          :index="index"
          @handleClick="switchShow(index)"
          class="portfolio__mob-view shadow"
          onlyIcon="rounded"
          bgColor="accent"
        >
          <IconsMobile v-if="!toggleView(index)" />
          <IconsDesktop v-if="toggleView(index)" />
        </AButton>
        <AButton
          v-if="item.name"
          :index="index"
          @handleClick="switchDescription(index)"
          class="portfolio__item-info-toggle shadow"
          onlyIcon="rounded"
          bgColor="accent"
        >
          <IconsInformation v-if="!toggleDescription(index)" />
          <IconsClose v-if="toggleDescription(index)" />
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
        <article class="portfolio__description" v-if="toggleDescription(index)">
          <h4 class="portfolio__description-title a-font__h4">{{ item.name }}</h4>
        </article>
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
const showDescription = ref(false);
const selectItem = ref(null);

const switchShow = (index) => {
  selectItem.value = index;
  showMobile.value = !showMobile.value;
};

const switchDescription = (index) => {
  console.log(index);
  selectItem.value = index;
  console.log('selectItem.value', selectItem.value);
  console.log('showDescription.value', showDescription.value);
  showDescription.value = !showDescription.value;
};

const toggleView = (index) => {
  console.log('TOGGLE', index);
  if (selectItem.value === index) return showMobile.value;
};

const toggleDescription = (index) => {
  console.log('TOGGLE', index);
  if (selectItem.value === index) return showDescription.value;
};
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
