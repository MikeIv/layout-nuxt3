<template>
  <section class="contacts layout__wrapper">
    <h1 class="contacts__title a-font__h1 hidden">Контакты</h1>

    <div class="contacts__section">
      <a href="https://t.me/Mike_Iv" class="contacts__item" target="_blank">
        <IconsTelegram />
        <p class="contacts__txt">@Mike_Iv</p>
      </a>
      <a href="mailto:mike@ivanov-post.ru" class="contacts__item" target="_blank">
        <IconsMail />
        <p class="contacts__txt">mike@ivanov-post.ru</p>
      </a>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@import './contacts.scss';
</style>
