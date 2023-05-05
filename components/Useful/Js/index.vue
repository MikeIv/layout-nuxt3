<template>
  <section class="js layout-useful__wrapper">
    <NuxtLink to="/useful" class="css__btn-back">
      <span class="a-font__s">назад</span>
    </NuxtLink>
    <h1 class="js__header hidden">Сниппеты JS</h1>
    <h2 class="js__title a-font__h3">Число</h2>
    <h2 class="js__subtitle a-font__h4">Среднее значение</h2>
    <div class="js__section-code">
      <pre class="js__section-pre" aria-label="Шаблон кода">
        <code class="js__code">
    const <span class="cnt">average</span> = <span class="accent">(</span>...nums<span class="accent">)</span> => nums.<span class="accent">reduce((</span>a, c<span class="accent">)</span> => a + c, 0<span class="accent">) /</span> nums.length
        </code>
      </pre>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './js.scss';
</style>
