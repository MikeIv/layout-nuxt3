<template>
  <NuxtLink :to="link" class="button-back">
    <span class="a-font__s">назад</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";

const props = defineProps({
  link: String
})

</script>

<style lang="scss" scoped>
@import "button-back.scss";
</style>