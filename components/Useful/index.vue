<template>
  <section class="useful layout__wrapper">
    <h1 class="useful__title a-font__h1 hidden">Полезное</h1>
    <div class="useful__block">
      <h2>Снипеты</h2>
      <ul class="useful__list">
        <li class="useful__item">
          <NuxtLink to="/posts/id1" class="main__gallery-link">
            <span class="a-font__s">Post 1</span>
          </NuxtLink>
        </li>
        <li class="useful__item">
          <NuxtLink to="/posts/id2" class="main__gallery-link">
            <span class="a-font__s">Post 2</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style lang="scss">
@import './useful.scss';
</style>
