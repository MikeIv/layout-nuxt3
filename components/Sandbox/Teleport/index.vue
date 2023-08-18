<template>
  <section class="teleport layout-useful__wrapper">
    <CommonButtonBack link="/sandbox" />
    <h1>Телепорт</h1>
    <AButton v-if="!showModal" @click="showModal = true" bgColor="accent" label="Показать окно" size="medium"
             class="teleport__button" />
    <CommonModal v-model="showModal" header="Заголовок 2">
      <template #title>Заголовок 1</template>
      <p class="teleport__content-modal a-font__l">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Consequuntur
        dolorum esse id
        labore nostrum porro
        praesentium quas quisquam tempore veritatis! Consequuntur doloremque exercitationem expedita odio provident, sint soluta ullam ut.</p>
    </CommonModal>
  </section>

</template>

<script setup lang="ts">
import AButton from "@/components/_ui/AButton/a_button"


const showModal = ref(false)

</script>

<style lang="scss" scoped>
@import "teleport.scss";
</style>