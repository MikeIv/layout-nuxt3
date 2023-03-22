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
      <p>{{ basearr }}</p>
      <p>{{ arr }}</p>
    </div>
  </section>
</template>

<script setup>
const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');
const counter = useCounter();

const { numArr } = useTestFunc();
console.log('numArr', numArr.value);
// const arr = numArr.value;
const basearr = numArr.value;

const arr = numArr.value.slice(0, 2);
</script>

<style scoped lang="scss">
@import './sandbox.scss';
</style>
