<template>
  <section class="css layout-useful__wrapper">
    <NuxtLink to="/useful" class="css__btn-back">
      <span class="a-font__s">назад</span>
    </NuxtLink>
    <h1 class="css__header hidden">Сниппеты CSS и SASS</h1>
    <h2 class="css__title a-font__h3">Sass</h2>
    <h2 class="css__subtitle a-font__h4">Rem Function</h2>
    <div class="css__section-code">
      <pre class="css__section-pre" aria-label="Шаблон кода">
        <code class="css__code">
   @use <span class="accent">'sass:math'</span>;

   @import <span class="accent">'../variables/base-font-size'</span>;
   $size: <span class="ident">math</span>.<span class="accent">div(</span><span class="var">$base-font-size</span>, <span class="ident">1px</span><span class="accent">)</span>;
   @function <span class="accent">rem(</span><span class="var">$px</span><span class="accent">) {</span>
     @return <span class="ident">math</span>.<span class="accent">div(</span><span class="var">$px</span>, <span class="var">$size</span><span class="accent">)</span> <span class="ident">+ rem</span>;
   <span class="accent">}</span>
        </code>
      </pre>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './css.scss';
</style>
