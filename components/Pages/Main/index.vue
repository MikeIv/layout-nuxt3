<template>
  <section class="main flex w-full">
    <img v-if="!isMobile" src="~/assets/images/my-logo.svg" alt="My Logo" class="main__logo" />

    <div class="main__block">
      <UIALink href="https://github.com/MikeIv" class="main__link">
        <nuxt-icon name="github" class="icon-logo" />
      </UIALink>

      <NuxtLink
        class="main__lang a-font__s"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}
      </NuxtLink>
    </div>

    <PagesMainNav />

    <p class="main__attention a-font__s">{{ $t('info.develop') }} <span>(v0.1.9)</span></p>
  </section>
</template>

<script setup>

const { isMobile } = useResponsive();

/*
Lang Switcher
 */

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

</script>

<style lang="scss">
@import 'main';
</style>
