<template>
  <section class="sandbox layout__wrapper">
    <h1 class="sandbox__title a-font__h1 hidden">Vue 3 Nuxt 3</h1>
    <h2 class="sandbox__subtitle a-font__h2">Компоненты и методы</h2>

    <div class="sandbox__section sandbox__section-pages-links">
      <h3 class="sandbox__links-title a-font__h3">Компоненты</h3>
      <ul class="sandbox__pages-links">
        <li class="sandbox__pages-links-item" v-for="item in listItems" :key="item.id">
          <NuxtLink :to="item.path" class="sandbox__block-link a-font__m">
            <span class="a-font__s">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="sandbox__section">
      <pre>{{ testData }} --- !</pre>
      <div class="sandbox__block">
        <h3 class="sandbox__label a-font__h4">Информация</h3>
        <input class="sandbox__input" type="text" v-model="nameFirst" v-focus />
        <input class="sandbox__input" type="text" v-model="age"  />
        <p class="sandbox__counter sandbox__text a-font__l">{{ nameFirst }} – {{ age }}</p>
      </div>
    </div>

    <div class="sandbox__section">
      <p class="sandbox__section-text a-font__m">
        Исходные данные: <span>{{ dataTest }}</span>
      </p>
      <p class="sandbox__section-text a-font__m">
        Результат: <span>{{ filterdata }}</span>
      </p>
      <p class="sandbox__section-text a-font__m">
        Результат 2: <span>{{ transformdata }}</span>
      </p>

      <br />
      <ul class="sandbox__list">
        <li class="sandbox__item" v-for="item in reactApiData" :key="item.index">
          <p>{{ item.value }}</p>
        </li>
      </ul>

      <br>

      <ul class="sandbox__list">
        <li class="sandbox__item" v-for="item in $tm('portfolio')" :key="item">
          <p>{{ item.name }}</p>
        </li>
      </ul>
      <ul class="sandbox__list">
        <li class="sandbox__item">
          <p>{{  }}</p>
        </li>
      </ul>
    </div>
<!--    <div class="sandbox__section">-->
<!--      <h3 class="sandbox__label a-font__h3">Слайдер</h3>-->
<!--      <swiper-container class="sandbox__swiper">-->
<!--        <swiper-slide class="sandbox__swiper-item">Slide 1</swiper-slide>-->
<!--        <swiper-slide class="sandbox__swiper-item">Slide 2</swiper-slide>-->
<!--        <swiper-slide class="sandbox__swiper-item">Slide 3</swiper-slide>-->
<!--      </swiper-container>-->
<!--    </div>-->
  </section>
</template>

<script setup>
import {register} from 'swiper/element/bundle';
import {useFetch} from "nuxt/app";
import {dataBank} from "@/server/api/dataBank";

register();

const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');

// Components Title
const { listItems } = componentsTitle()


/*
Test function
 */

const { numArr } = useTestFunc();
const dataTest = numArr.value;

const filterdata = dataTest.splice(1, 0, 'one', 'two', '12345');
const transformdata = dataTest.reverse();

const { nameFirst, age } = checkResult();

const testData = ref();

const { data: otherData } = await useFetch('/api/testApi')
testData.value = otherData



/*
Get Data from reactive
 */
const apiData = ref(null)

const reactApiData = reactive(apiData)

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
const token = '0845425a22e3e674a4ef51f59dca016bc1c775b5';
const query = 'сбербанк';

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Token ' + token,
  },
  body: JSON.stringify({ query: query }),
};

dataBank(url, options).then((value) => {
  apiData.value = value.suggestions
})
    .catch(error => {
      error.message
    })

/*
Get global window
 */
if (process.client) {
  console.log('window:', window);
  console.log('global:', globalThis);
}


// Inject
const userData = inject('userData')
console.log('USER@@: ', userData)

</script>

<style lang="scss">
@import 'sandbox';
</style>
