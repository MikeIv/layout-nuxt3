<template>
  <div class="layout">
    <Header />
    <NuxtLink to="/">
      <img src="~/assets/images/my-logo.svg" alt="My Logo" class="layout__logo" />
    </NuxtLink>

    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss">
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  padding-bottom: rem(80);
  &__logo {
    position: fixed;
    top: 0;
    left: 0;
    max-width: rem(80);
    z-index: 10;

    @media screen and (min-width: $mobile) {
      max-width: rem(100);
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: rem(100) rem(12);

    @media screen and (min-width: $tablet) {
      max-width: rem(768);
      padding: rem(100) rem(40);
    }
    @media screen and (min-width: $tabletMax) {
      max-width: rem(832);
    }
    @media screen and (min-width: $desktopMin) {
      max-width: rem(1080);
    }
  }

  .nuxt-icon {
    display: flex;
    width: 100%;
    height: 100%;

    svg {
      object-fit: cover;
      width: auto;
      height: 100%;
      margin: 0;
    }
  }
}
</style>
