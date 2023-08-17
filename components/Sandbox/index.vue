<template>
  <section class="sandbox layout__wrapper">
    <h1 class="sandbox__title a-font__h1 hidden">Vue 3 Nuxt 3</h1>
    <h2 class="sandbox__subtitle a-font__h2">Компоненты и методы</h2>

    <div class="sandbox__section sandbox__section-pages-links">
      <h3 class="sandbox__links-title a-font__h3">Компоненты</h3>
      <ul class="sandbox__pages-links">
        <li class="sandbox__pages-links-item">
          <NuxtLink to="/sandbox/samples/drag-cards" class="sandbox__block-link a-font__m">
            <span class="a-font__s">Drag&DropCards</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h3">{{ storeCounter.title }}:</h3>
      <button class="sandbox__btn-count a-font__h2" @click="storeCounter.decreaseCount">-</button>
      <p class="sandbox__counter a-font__h3">{{ storeCounter.count }}</p>
      <button class="sandbox__btn-count a-font__h2" @click="storeCounter.increaseCount">+</button>
      <p class="sandbox__counter sandbox__text a-font__l">{{ storeCounter.subtitle }}: {{ storeCounter.oddOrEven }}</p>
    </div>

    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h3">{{ storeCounter.title }}:</h3>
      <button class="sandbox__btn-count a-font__h2" @click="decreaseCounter">-</button>
      <p class="sandbox__counter a-font__h3">{{ counter }}</p>
      <button class="sandbox__btn-count a-font__h2" @click="increaseCounter">+</button>
      <p class="sandbox__counter sandbox__text a-font__l">{{ storeCounter.subtitle }}: {{ storeCounter.oddOrEven }}</p>
    </div>

    <div class="sandbox__section">
      <pre>{{ testData }} --- !</pre>
      <div class="sandbox__block">
        <h3 class="sandbox__label a-font__h4">Заголовок: {{ counterData.title }}</h3>
        <input class="sandbox__input" type="text" v-model="counterData.title" v-focus />
      </div>
      <div class="sandbox__block">
        <h3 class="sandbox__label a-font__h4">Информация</h3>
        <input class="sandbox__input" type="text" v-model="nameFirst" v-focus />
        <input class="sandbox__input" type="text" v-model="age" v-focus />
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
import {checkResult} from '@/composables/sandbox/checkResult';
import {register} from 'swiper/element/bundle';
import {useCounterStore} from '@/stores/counter';
import {useFetch} from "nuxt/app";
import {dataBank} from "../../server/api/dataBank";

register();

const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');

/*
Counter
 */

// Данные из Stores
const storeCounter = useCounterStore();

const increaseCounter = () => {
  counter.value ++;
};
const decreaseCounter = () => {
  counter.value --;
};

// Использование без Stores
const counter = ref(0);
const counterData = reactive({
  count: 0,
  title: 'Счетчик',
  subtitle: 'Четность',
});

// Computed counter
const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'четное';
  return 'нечетное';
});



// Watch counter
watchEffect(() => {
  console.log('newCount: ' + counter.value)
  if (counter.value === 12) {
    console.log('Предельное значение')
    alert('Предельное значение')
  }
})

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
console.log('DATA: ', otherData)
testData.value = otherData



/*
Get Data from reactive
 */
const apiData = ref(null)

const reactApiData = reactive(apiData)
console.log('reactApiData: ', reactApiData)

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
  console.log('VALUE@: ', value)
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
</script>

<style lang="scss">
@import './sandbox.scss';
</style>
