import { onMounted, onUnmounted, ref } from 'vue';

export const useWindowResize = () => {
  const height = ref(null);
  const width = ref(null);

  const resizeWin = () => {
    // @ts-ignore
    height.value = window.innerHeight;
    // @ts-ignore
    width.value = window.innerWidth;

    onMounted(() => {
      resizeWin();
      window.addEventListener('resize', resizeWin);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resizeWin);
    });

    return { height, width };
  };
};
