<template>
  <div class="layout layout-custom">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
.layout {
  &-useful {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding-bottom: rem(80);

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      max-width: rem(1080);
      margin: 0 auto;
      padding: rem(80) rem(12);
    }
  }
}
</style>
