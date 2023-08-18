<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
// Provide & Inject
import {provide} from "vue";

const userData = reactive({
  name: 'Mike',
  username: 'grym'
})

provide('userData', userData)
</script>