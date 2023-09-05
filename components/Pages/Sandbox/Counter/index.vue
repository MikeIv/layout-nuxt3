<template>
  <section class="drag-cards layout-useful__wrapper">
    <CommonButtonBack link="/sandbox" />
    <CommonHeader title="Типы счетчиков" />
    <h2>{{ $route.params }}</h2>
    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h3">{{ storeCounter.title }}:</h3>
      <button class="sandbox__btn-count a-font__h2" @click="storeCounter.decreaseCount">-</button>
      <p class="sandbox__counter a-font__h3">{{ storeCounter.count }}</p>
      <button class="sandbox__btn-count a-font__h2" @click="storeCounter.increaseCount">+</button>
      <p class="sandbox__counter sandbox__text a-font__l">{{ storeCounter.subtitle }}: {{ storeCounter.oddOrEven }} <span>Store</span></p>
    </div>

    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h3">{{ counterData.title }}:</h3>
      <button class="sandbox__btn-count a-font__h2" @click="decreaseCounterData(1)">-</button>
      <p class="sandbox__counter a-font__h3">{{ counterData.count }}</p>
      <button class="sandbox__btn-count a-font__h2" @click="increaseCounterData(1)">+</button>
      <p class="sandbox__counter sandbox__text a-font__l">{{ storeCounter.subtitle }}: {{ storeCounter.oddOrEven }}
        <span>watch</span></p>
    </div>

    <div class="sandbox__section">
      <h3 class="sandbox__label a-font__h3">{{ storeCounter.title }}:</h3>
      <button class="sandbox__btn-count a-font__h2" @click="decreaseCounter">-</button>
      <p class="sandbox__counter a-font__h3">{{ counter }}</p>
      <button class="sandbox__btn-count a-font__h2" @click="increaseCounter">+</button>
      <p class="sandbox__counter sandbox__text a-font__l">{{ storeCounter.subtitle }}: {{ storeCounter.oddOrEven }}
        <span>watchEffect</span></p>
    </div>

    <div class="sandbox__block">
      <h3 class="sandbox__label a-font__h4">Заголовок: {{ counterData.title }}</h3>
      <input class="sandbox__input" type="text" v-model="counterData.title" v-focus />
    </div>

  </section>
</template>

<script setup>
import {watch, watchEffect} from 'vue'
import {useCounterStore} from '@/stores/counter';



const route = useRoute();

/*
Counter
 */

// Данные из Stores
const storeCounter = useCounterStore();

const increaseCounter = () => {
  counter.value ++;
};
const decreaseCounter = () => {
  counter.value --;
};

const increaseCounterData = (amount) => {
  counterData.count += amount;
};
const decreaseCounterData = (amount) => {
  counterData.count -= amount;
};

// Использование без Stores
const counter = ref(0);
const counterData = reactive({
  count: 0,
  title: 'Счетчик',
  subtitle: 'Четность',
});

// Computed counter
const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'четное';
  return 'нечетное';
});



// Watch counter
watchEffect(() => {
  console.log('newCount: ' + counter.value)
  if (counter.value === 12) {
    console.log('Предельное значение')
    alert('Предельное значение')
  }
})

watch(() => counterData.count, (newCount) => {
  console.log('newCount: ' + newCount)
  if (newCount === 10) {
    alert('Предельное значение')
  }
})


</script>

<style lang="scss">
@import 'counter';
</style>