import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'Счетчик',
    subtitle: 'Четность',
  }),

  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'четное';
      return 'нечетное';
    },
  },
});
