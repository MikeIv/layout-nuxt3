<template>
  <teleport to="body">
    <div class="modal" v-if="modelValue">
      <h2 class="modal__header a-font__h2"><slot name="title" /></h2>
      <h2 class="modal__header a-font__h2">{{ header }}</h2>
      <slot></slot>
      <AButton @click="handleButtonClick" bgColor="accent" label="Скрыть окно" size="medium"
               class="modal__button" />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import AButton from "@/components/_ui/AButton/a_button"

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: "Заголовок по умолчанию"
  },
})

const emit = defineEmits(['update:modelValue'])

const handleButtonClick = () => {
  emit('update:modelValue', false)
}

</script>

<style lang="scss" scoped>
@import "modal";
</style>