<template>
  <section class="hint layout-useful__wrapper">
    <CommonButtonBack link="/useful" />
    <h1 class="hint__header hidden">База знаний</h1>
    <h2 class="hint__title a-font__h3">База знаний</h2>
    <h3 class="hint__subtitle a-font__h4">Создание копии объекта</h3>
    <div class="hint__section-code">
      <AButton
        title="Copy Code"
        @handleClick="copy(average)"
        class="hint__btn-copy"
        onlyIcon="square"
        bgColor="ghost"
        size="small"
      >
        <nuxt-icon v-if="!copied" name="copy" filled />
        <nuxt-icon v-else name="check-box" filled />
      </AButton>
      <pre class="hint__section-pre" aria-label="Шаблон кода">
        <code class="hint__code">
    const <span class="cnt">copyObj</span> = Object<span class="accent">.assign</span>(<span class="cnt">obj</span>)
        </code>
      </pre>
    </div>
    <div class="hint__section-code">
      <AButton
        title="Copy Code"
        @handleClick="copy(average)"
        class="hint__btn-copy"
        onlyIcon="square"
        bgColor="ghost"
        size="small"
      >
        <nuxt-icon v-if="!copied" name="copy" filled />
        <nuxt-icon v-else name="check-box" filled />
      </AButton>
      <pre class="hint__section-pre" aria-label="Шаблон кода">
        <code class="hint__code">
    const <span class="cnt">copyObj</span> = <span class="accent">{</span><span class="cnt">...obj</span><span
            class="accent">}</span>
        </code>
      </pre>
    </div>
    <div class="hint__section-code">
      <AButton
        title="Copy Code"
        @handleClick="copy(average)"
        class="hint__btn-copy"
        onlyIcon="square"
        bgColor="ghost"
        size="small"
      >
        <nuxt-icon v-if="!copied" name="copy" filled />
        <nuxt-icon v-else name="check-box" filled />
      </AButton>
      <pre class="hint__section-pre" aria-label="Шаблон кода">
        <code class="hint__code">
    const <span class="cnt">copyObj</span> = JSON<span class="accent">.parse</span>(JSON<span class="accent">.stringify</span>(<span class="cnt">obj</span>))
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
@import 'hint';
</style>
