<template>
  <div class="layout layout-custom">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.layout {
  &-custom {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding-bottom: rem(80);
  }
}
</style>
