<template>
  <section class="articles layout-useful__wrapper">
    <NuxtLink to="/useful" class="articles__btn-back">
      <span class="a-font__s">назад</span>
    </NuxtLink>
    <h1 class="articles__header hidden">Полезные статьи</h1>
    <h3 class="articles__title a-font__h3">Статьи</h3>
    <div class="articles__info">
      <h4 class="articles__info-text a-font__h4">Axios в Nuxt (asyncData и fetch)</h4>
      <blockquote class="articles__info-quote">В этом руководстве мы узнаем, как использовать модуль Axios и как
      сделать запрос на стороне
      сервера, используя asyncData и fetch.</blockquote>
      <a
        class="articles__info-link a-font__m"
        href="https://badtry.net/nachalo-raboty-s-axios-v-nuxt/"
        target="_blank"
        >подробнее</a
      >
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import 'articles';
</style>
