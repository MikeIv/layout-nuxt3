<template>
  <section class="useful layout__wrapper">
    <h1 class="useful__title a-font__h1 hidden">Полезное</h1>
    <div class="useful__block">
      <h2>Снипеты</h2>
      <ul class="useful__list">
        <li class="useful__item">
          <NuxtLink to="/useful/1" class="main__gallery-link">
            <span class="a-font__s">Post 1</span>
          </NuxtLink>
        </li>
        <li class="useful__item">
          <NuxtLink to="/useful/snippets-css/css" class="main__gallery-link">
            <span class="a-font__s">Post 2</span>
          </NuxtLink>
        </li>
        <li class="useful__item">
          <NuxtLink to="/useful/snippets-js/js" class="main__gallery-link">
            <span class="a-font__s">Post 2</span>
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
