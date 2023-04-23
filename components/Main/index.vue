<template>
  <section class="main flex w-full">
    <img v-if="!isMobile" src="~/assets/images/my-logo.svg" alt="My Logo" class="main__logo" />
    <p class="main__attention a-font__s">В разработке <span>(v0.1.2)</span></p>
    <MainNav />
  </section>
</template>

<script setup>
const { isMobile } = useResponsive();
</script>

<style scoped lang="scss">
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-left: 10px solid var(--a-white);

  &__logo {
    position: absolute;
    top: 0;
    left: -10px;
    max-width: rem(100);
  }

  &__attention {
    margin-bottom: rem(60);
    color: var(--a-accentText);
    text-transform: uppercase;
    opacity: 35%;
    user-select: none;

    span {
      text-transform: none;
    }
  }
}
</style>
