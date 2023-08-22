<template>
  <h1 class="header a-font__h1">{{ title }}</h1>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const props = defineProps({
  title: {
    type: String,
    default: "Заголовок по умолчанию"
  },
})
</script>

<style lang="scss" scoped>
@import "header.scss";
</style>