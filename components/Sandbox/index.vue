<template>
  <section class="sandbox layout__wrapper">
    <h1 class="sandbox__title a-font__h1">Vue 3 Nuxt 3</h1>
    <h2 class="sandbox__subtitle a-font__h2">Компоненты и методы</h2>

    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h3">{{ counterData.title }}:</h3>
      <button class="sandbox__btn-count a-font__h2" @click="decreaseCounter(1)">-</button>
      <p class="sandbox__counter a-font__h3">{{ counterData.count }}</p>
      <button class="sandbox__btn-count a-font__h2" @click="increaseCounter(1)">+</button>
    </div>

    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h4">Редактирование заголовка</h3>
      <div class="sandbox__block">
        <input class="sandbox__input" type="text" v-model="counterData.title" v-avtofocus />
      </div>
    </div>

    <div class="sandbox__section-test">
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
      <li v-for="item in currency" :key="item.index">
        <p>{{ item.value }}</p>
      </li>
    </div>
  </section>
</template>

<script setup>
const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');

const counter = ref(0);

const increaseCounter = (amount) => {
  counterData.count += amount;
};
const decreaseCounter = (amount) => {
  counterData.count -= amount;
};

const counterData = reactive({
  count: 0,
  title: 'Счетчик',
});

const { numArr } = useTestFunc();
console.log('numArr', numArr.value);
const dataTest = numArr.value;

const filterdata = dataTest.splice(1, 0, 'one', 'two', '12345');
console.log('DATA', dataTest);
const transformdata = dataTest.reverse();

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

const { data } = await useFetch(url, options);
console.log('dataDD', data);
const currency = data.value.suggestions;
console.log('currency', currency);
</script>

<style scoped lang="scss">
@import './sandbox.scss';
</style>
