<template>
  <section class="portfolio layout__wrapper" v-if="workList">
    <ul class="portfolio__list">
      <li class="portfolio__item" v-for="(item, index) in workList" :key="index">
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
            :src="`${$t('/images/portfolio/')}${item.imgMob}`"
            alt="image"
            class="portfolio__img"
          />
          <img v-else :src="`${$t('/images/portfolio/')}${item.img}`" alt="image" class="portfolio__img" />
        </div>
        <article class="portfolio__description" v-if="toggleDescription(index)">
          <div class="portfolio__description-head">
            <h4 class="portfolio__description-title a-font__h4">{{ item.name }}</h4>
            <Alink :href="item.link" linkText="посмотреть" type="btn" bgColor="primary" fontSize="s" />
          </div>
          <p class="portfolio__description-text a-font__m">{{ item.description }}</p>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
/*
import
*/
import AButton from '~/components/_ui/AButton/a_button.vue';
import Alink from '~/components/_ui/ALink/a_link.vue';

/*
Data reactive i18n not working
 */
const { portf } = portfolioData();
const dataList = portf.value;

/*
Data from i18n working
 */
const { tm } = useI18n();
const workList = tm('portfolio');
console.log('workList', workList);

/*
mobileVersion
 */

const showMobile = ref(false);
const showDescription = ref(false);
const selectItem = ref(null);

const switchShow = (index) => {
  selectItem.value = index;
  showMobile.value = !showMobile.value;
};

const switchDescription = (index) => {
  selectItem.value = index;
  showDescription.value = !showDescription.value;
};

const toggleView = (index) => {
  if (selectItem.value === index) return showMobile.value;
};

const toggleDescription = (index) => {
  if (selectItem.value === index) return showDescription.value;
};
</script>

<style scoped lang="scss">
@import './portfolio.scss';
</style>
