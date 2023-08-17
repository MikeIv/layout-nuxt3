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
        <NuxtLink class="header__item a-font__s" :to="localePath('/useful')">{{ $t('navigation.useful') }}</NuxtLink>
        <NuxtLink class="header__item a-font__s" :to="localePath('/sandbox')">{{ $t('navigation.sandbox') }}</NuxtLink>
        <NuxtLink class="header__item a-font__s" :to="localePath('/contacts')">{{
          $t('navigation.contacts')
        }}</NuxtLink>
      </ul>
    </nav>
    <Abutton @click="darkMode" onlyIcon="square" bgColor="ghost"><nuxt-icon name="articlesLtr" filled /></Abutton>
    <div class="header__block">
<!--      <select v-model="$colorMode.preference">-->
<!--        <option value="system">System</option>-->
<!--        <option value="light">Light</option>-->
<!--        <option value="dark">Dark</option>-->
<!--        <option value="sepia">Sepia</option>-->
<!--      </select>-->
      <a href="https://github.com/MikeIv" class="header__link" target="_blank">
        <nuxt-icon name="github" class="icon-logo" />
      </a>

      <NuxtLink
        class="header__lang a-font__s"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}
      </NuxtLink>
    </div>

    <div v-if="isMobile" class="header__mobile-toggle">
      <button class="header__toggle-nav" :class="{ active: showNav }" @click="toggleNav" ref="navigation">
        <span></span>
      </button>

      <nav v-if="showNav" class="header__mobile-menu">
        <ul class="header__nav-list header__nav-list--mob">
          <!--          <li class="header__item-mob a-font__m-m" v-for="(item, index) in routeLinks" :key="index" @click="toggleNav">-->
          <!--            <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>-->
          <!--          </li>-->

          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/portfolio')">{{
            $t('navigation.portf')
          }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/tools')">{{
            $t('navigation.tools')
          }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/useful')">{{
            $t('navigation.useful')
          }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/sandbox')">{{
            $t('navigation.sandbox')
          }}</NuxtLink>
          <NuxtLink class="header__item-mob a-font__m-m" :to="localePath('/contacts')">{{
            $t('navigation.contacts')
          }}</NuxtLink>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
import Abutton from '~/components/_ui/AButton/a_button.vue';

const localePath = useLocalePath();
const { routeLinks } = useRouteLinks();

// Color mode
const colorMode = useColorMode()
const darkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
}

const { isMobile, isTabled, isDesktop } = useResponsive();

const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value;
};

/*
Lang Switcher
 */

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
