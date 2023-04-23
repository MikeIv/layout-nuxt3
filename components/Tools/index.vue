<template>
  <section class="tools layout__wrapper">
    <h1 class="tools__title a-font__h1 hidden">Инструменты</h1>
    <div class="tools__header">
      <ul class="tools__header-list">
        <li class="tools__header-item item-header">{{ $t('tools.technologies') }}</li>
        <li class="tools__header-item" :class="item.cell" v-for="(item, index) in titleList" :key="index" v-if="titleList">
          <div class="tools__header-img-wrapper">
            <nuxt-icon :name="item.icon" filled />
<!--            <component :is="item.icon"></component>-->
          </div>
          <div class="tools__header-link-group">
            <a :href="`${item.href}`" class="tools__header-sourse a-font__s" target="_blank">{{ item.title }}</a>
            <a :href="`#${item.id}`" class="tools__header-link a-font__s">#</a>
          </div>
        </li>
      </ul>
    </div>
    <section class="tools__content">
      <div class="tools__section" :id="item.id" v-for="(item, index) in toolsContent" :key="index">
        <div class="tools__logo-wrapper">
          <nuxt-icon :name="item.icon" filled />
        </div>
        <h2 class="tools__subtitle a-font__h3">{{ item.name }}</h2>
        <div class="tools__section-plugin-block" v-if="item.plugIn.length">
          <h4 class="tools__section-header a-font__h4">Plug-in's</h4>
          <ul class="tools__section-list-plugin">
            <li class="tools__section-item-plugin" v-for="plugin in item.plugIn">{{ plugin.name }}</li>
          </ul>
        </div>
        <div class="tools__section-plugin-block" v-if="item.links.length">
          <h4 class="tools__section-header a-font__h4">{{$t('tools.links') }}</h4>
          <ul class="tools__section-list-plugin">
            <li class="tools__section-item-plugin" v-for="link in item.links">
              <Alink :href="link.href" :linkText="link.text" type="btn" bgColor="accent" fontSize="s" />
            </li>
          </ul>
        </div>
        <div class="tools__section-plugin-block" v-if="item.npm">
          <h4 class="tools__section-header a-font__h4">{{$t('tools.dependencies') }}</h4>
          <ul class="tools__section-list-plugin">
            <li class="tools__section-item-plugin" v-for="link in item.npm">
              <Alink :href="link.href" :linkText="link.text" type="btn" bgColor="primary" fontSize="s" />
            </li>
          </ul>
        </div>
        <div class="tools__section-plugin-block" v-if="item.modules">
          <h4 class="tools__section-header a-font__h4">{{$t('tools.modules') }}</h4>
          <ul class="tools__section-list-plugin">
            <li class="tools__section-item-plugin" v-for="link in item.modules">
              <Alink :href="link.href" :linkText="link.text" type="btn" bgColor="primary" fontSize="s" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import Alink from '~/components/_ui/ALink/a_link.vue';

const { toolsTitle } = toolsTitleList();
const titleList = toolsTitle.value;

const { toolsDescription } = toolsData();
const toolsContent = toolsDescription.value;
</script>

<style lang="scss">
@import './tools.scss';
</style>
