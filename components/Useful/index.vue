<template>
  <section class="useful layout__wrapper">
    <h1 class="useful__title a-font__h1 hidden">Полезное</h1>
    <div class="useful__block">
      <h2 class="useful__block-header a-font__h3">Сниппеты</h2>
      <ul class="useful__block-list">
        <li class="useful__block-item">
          <NuxtLink to="/useful/snippets-css/css" class="useful__block-link a-font__m">
            <nuxt-icon name="css" filled />
            <span class="a-font__s">Сниппеты CSS и SASS</span>
          </NuxtLink>
        </li>
        <li class="useful__item">
          <NuxtLink to="/useful/snippets-js/js" class="useful__block-link a-font__m">
            <nuxt-icon name="js" filled />
            <span class="a-font__s">Сниппеты JavaScript</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="useful__block">
      <h2 class="useful__block-header a-font__h3">Разное</h2>
      <ul class="useful__block-list">
        <li class="useful__block-item">
          <NuxtLink to="/useful/different/console" class="useful__block-link a-font__m">
            <img class="useful__block-item-logo" src="~/assets/images/logo-cmder-light.jpg" alt="logo" />
            <span class="a-font__s">Консольные команды</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './useful.scss';
</style>
