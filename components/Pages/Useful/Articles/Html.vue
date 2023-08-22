<template>
  <section class="articles layout-useful__wrapper">
    <CommonButtonBack link="/useful" />
    <h1 class="articles__header hidden">Полезные статьи и видео</h1>
    <h3 class="articles__title a-font__h3">Статьи</h3>
    <div class="articles__info">
      <h4 class="articles__info-text a-font__h4">Атрибут role</h4>
      <blockquote class="articles__info-quote">
        Атрибут role в HTML5 позволяет наиболее четко указать семантическое предназначение блока/элемента страницы при
        взаимодействии пользователя с сайтом.
      </blockquote>
      <a class="articles__info-link a-font__m" href="http://sauron.org.ua/post/823" target="_blank">подробнее</a>
    </div>
    <h3 class="articles__title a-font__h3">Видео</h3>
    <div class="articles__info">
      <h4 class="articles__info-text a-font__h4">Zurb Foundation for Emails</h4>
      <blockquote class="articles__info-quote">Руководство по Foundation for Emails</blockquote>
      <a
        class="articles__info-link a-font__m"
        href="https://www.youtube.com/watch?v=diULmp4dYdE&list=PLR_ZJO3q73HalAe5sRs7ByjHvptmbflsL&index=6"
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
