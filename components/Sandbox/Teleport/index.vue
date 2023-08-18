<template>
  <section class="teleport layout-useful__wrapper">
    <CommonButtonBack link="/sandbox" />
    <h1>Телепорт</h1>
    <AButton v-if="!showModal" @click="showModal = true" bgColor="accent" label="Показать окно" size="medium" />
    <teleport to="body">
      <div class="teleport__modal" v-if="showModal">
        <h2 class="teleport__modal-header a-font__h2">Заголовок</h2>
        <p class="teleport__modal-content a-font__m">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium dolor
          facilis natus odit quibusdam ratione ut veniam voluptas. Corporis ducimus, hic modi nulla quasi quod similique tempora. Dolores, ea, nesciunt!</p>
        <AButton @click="showModal = false" bgColor="accent" label="Скрыть окно" size="medium" />
      </div>
    </teleport>
  </section>

</template>

<script setup lang="ts">
import AButton from "@/components/_ui/AButton/a_button"


const showModal = ref(false)

</script>

<style lang="scss" scoped>
@import "teleport.scss";
</style>