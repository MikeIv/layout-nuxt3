<template>
  <section class="header shadow" :class="{ mobile: isMobile }">
    <nav v-if="isDesktop || isTabled" class="header__nav">
      <!--  Одноязычный вариант    -->

      <!--      <ul class="header__nav-list">-->
      <!--        <li class="header__item a-font__s" v-for="(item, index) in routeLinks" :key="index">-->
      <!--          <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>-->
      <!--        </li>-->
      <!--      </ul>-->

      <!--  Мультиязычный вариант    -->
      <ul class="header__nav-list">
        <NuxtLink class="header__item a-font__s" :to="localePath('/portfolio')">{{ $t('navigation.portf') }}</NuxtLink>
        <NuxtLink class="header__item a-font__s" :to="localePath('/tools')">{{ $t('navigation.tools') }}</NuxtLink>
        <NuxtLink class="header__item a-font__s" :to="localePath('/sandbox')">{{ $t('navigation.sandbox') }}</NuxtLink>
        <NuxtLink class="header__item a-font__s" :to="localePath('/contacts')">{{
          $t('navigation.contacts')
        }}</NuxtLink>
      </ul>
    </nav>

    <a
      class="header__lang a-font__s"
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="setLocale(locale.code)"
      >{{ locale.name }}</a
    >

    <div v-if="isMobile" class="header__mobile-toggle">
      <button class="header__toggle-nav" :class="{ active: showNav }" @click="toggleNav" ref="navigation">
        <span></span>
      </button>

      <nav v-if="showNav" class="header__mobile-menu">
        <ul class="header__nav-list header__nav-list--mob">
<!--          <li class="header__item-mob a-font__m-m" v-for="(item, index) in routeLinks" :key="index" @click="toggleNav">-->
<!--            <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>-->
<!--          </li>-->

          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/portfolio')">{{ $t('navigation.portf') }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/tools')">{{ $t('navigation.tools') }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/sandbox')">{{ $t('navigation.sandbox') }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/contacts')">{{
              $t('navigation.contacts')
            }}</NuxtLink>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
const { routeLinks } = useRouteLinks();

const { isMobile, isTabled, isDesktop } = useResponsive();

const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value;
};

/*
Lang Switcher
 */

const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
