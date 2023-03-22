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
      <p>{{ value }}</p>
    </div>
  </section>
</template>

<script setup>
const { $sayWord } = useNuxtApp();
$sayWord('это проверка работы функции');
const counter = useCounter();

const { numArr } = useTestFunc();

const value = numArr.splice(1, 2);
</script>

<style scoped lang="scss">
@import './sandbox.scss';
</style>
