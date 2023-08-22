<template>
  <section class="js layout-useful__wrapper">
    <CommonButtonBack link="/useful" />
    <h1 class="js__header hidden">Сниппеты JS</h1>
    <h2 class="js__title a-font__h3">Число</h2>
    <h2 class="js__subtitle a-font__h4">Среднее значение</h2>
    <div class="js__section-code">
      <AButton
        title="Copy Code"
        @handleClick="copy(average)"
        class="js__btn-copy"
        onlyIcon="square"
        bgColor="ghost"
        size="small"
      >
        <nuxt-icon v-if="!copied" name="copy" filled />
        <nuxt-icon v-else name="check-box" filled />
      </AButton>
      <pre class="js__section-pre" aria-label="Шаблон кода">
        <code class="js__code">
    const <span class="cnt">average</span> = <span class="accent">(</span>...nums<span class="accent">)</span> => nums.<span class="accent">reduce((</span>a, c<span class="accent">)</span> => a + c, 0<span class="accent">) /</span> nums.length
        </code>
      </pre>
    </div>
  </section>
</template>

<script setup>
import AButton from '~/components/_ui/AButton/a_button.vue';

const { average } = snippetJsData();
const { text, copy, copied } = useClipboard();
</script>

<style lang="scss">
@import 'js';
</style>
