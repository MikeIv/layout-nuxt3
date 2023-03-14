<template>
  <div class="a-popup" v-if="visible" :data-type="type">
    <div class="a-popup__backdrop" @click="closePopup"></div>
    <div class="a-popup__container">
      <div class="a-popup__close">
        <i class="a-popup__i si-close" @click="closePopup"></i>
      </div>
      <slot v-if="type !== 'iframe'"></slot>
      <div class="a-popup__iframe" v-else>
        <iframe
          :src="link"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a_popup',
};
</script>

<style scoped></style>
