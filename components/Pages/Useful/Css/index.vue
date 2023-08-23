<template>
  <section class="css layout-useful__wrapper">
    <CommonButtonBack link="/useful" />
    <h1 class="css__header hidden">Сниппеты CSS и SASS</h1>
    <h2 class="css__title a-font__h3">Sass</h2>
    <h2 class="css__subtitle a-font__h4">Rem Function</h2>
    <div class="css__section-code">
      <AButton
        title="Copy Code"
        @handleClick="copy(remFunc)"
        class="css__btn-copy"
        onlyIcon="square"
        bgColor="ghost"
        size="small"
      >
        <nuxt-icon v-if="!copied" name="copy" filled />
        <nuxt-icon v-else name="check-box" filled />
      </AButton>
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

<script setup>
import AButton from '~/components/_ui/AButton/a_button.vue';

const { remFunc } = snippetCssData();
const { text, copy, copied } = useClipboard();
</script>

<style lang="scss">
@import 'css';
</style>
