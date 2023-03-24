<template>
  <section class="sandbox layout__wrapper">
    <h1 class="sandbox__title a-font__h1">Vue 3 Nuxt 3</h1>
    <h2 class="sandbox__subtitle a-font__h2">Компоненты и методы</h2>

    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
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
      <p>{{ data }}</p>
    </div>
  </section>
</template>

<script setup>
const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');
const counter = useCounter();

const { numArr } = useTestFunc();
console.log('numArr', numArr.value);
const dataTest = numArr.value;

const filterdata = dataTest.splice(1, 0, 'one', 'two', '12345');
console.log('DATA', dataTest);
const transformdata = dataTest.reverse();

const { data } = await useFetch('/api/testapi');
console.log('data', data);
</script>

<style scoped lang="scss">
@import './sandbox.scss';
</style>
