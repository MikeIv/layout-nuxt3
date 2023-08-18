<template>
  <section class="console layout-useful__wrapper">
    <CommonButtonBack link="/useful" />
    <h1 class="console__header hidden">Консольные команды</h1>
    <h2 class="console__title a-font__h3">Консоль</h2>
    <h2 class="console__subtitle a-font__h4">File exist</h2>
    <div class="console__section-code">
      <pre class="console__section-pre" aria-label="Шаблон кода">
        <code class="console__code">which [-a] filename</code>
      </pre>
    </div>
    <div class="console__info">
      <p class="console__info-text a-font__m">Пример:</p>
      <p class="console__info-code">
        $ which git<br />
        <span>/cmd/git</span>
      </p>
      <a
        class="console__info-link a-font__m"
        href="https://andreyex.ru/operacionnaya-sistema-linux/komanda-which-v-linux-s-primerami/"
        target="_blank"
        >подробнее</a
      >
    </div>
    <h2 class="console__subtitle a-font__h4">File path (win)</h2>
    <div class="console__section-code">
      <pre class="console__section-pre" aria-label="Шаблон кода">
        <code class="console__code">where filename</code>
      </pre>
    </div>
    <div class="console__info">
      <p class="console__info-text a-font__m">Пример:</p>
      <p class="console__info-code">
        $ where git<br />
        <span>C:\Program Files\Git\cmd\git.exe</span>
      </p>
      <a
        class="console__info-link a-font__m"
        href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/where"
        target="_blank"
        >подробнее</a
      >
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import 'console';
</style>
