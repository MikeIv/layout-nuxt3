<template>
  <section class="articles layout-useful__wrapper">
    <CommonButtonBack link="/useful" />
    <h1 class="articles__header hidden">Полезные статьи</h1>
    <h3 class="articles__title a-font__h3">Статьи</h3>
    <div class="articles__info">
      <h4 class="articles__info-text a-font__h4">Axios в Nuxt (asyncData и fetch)</h4>
      <blockquote class="articles__info-quote">В этом руководстве мы узнаем, как использовать модуль Axios и как
      сделать запрос на стороне
      сервера, используя asyncData и fetch.</blockquote>
      <a
        class="articles__info-link a-font__m"
        href="https://badtry.net/nachalo-raboty-s-axios-v-nuxt/VueAndNuxt.vue"
        target="_blank"
        >подробнее...</a
      >
    </div>
    <div class="articles__info">
      <h4 class="articles__info-text a-font__h4">watch and watchEffect</h4>
      <blockquote class="articles__info-quote">Composition API предоставляет нам два разных метода для обработки побочных эффектов - watch и watchEffect.</blockquote>
      <div class="articles__info-list-link">
        <a
          class="articles__info-link a-font__m"
          href="https://habr.com/ru/companies/simbirsoft/articles/697910/"
          target="_blank"
      >подробнее...</a
      > <a
          class="articles__info-link a-font__m"
          href="https://www.thisdot.co/blog/vue-3-composition-api-watch-and-watcheffect/"
          target="_blank"
      >подробнее...</a>
      </div>

    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import 'articles';
</style>
