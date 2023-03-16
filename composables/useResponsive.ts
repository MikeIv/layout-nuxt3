export const useResponsive = () => {
  const isMobile = ref(false);
  const isTabled = ref(false);
  const isDesktop = ref(false);

  onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
  });

  const updateWidth = () => {
    isMobile.value = window.innerWidth <= 640;

    isTabled.value = window.innerWidth > 640 && window.innerWidth <= 1280;

    isDesktop.value = window.innerWidth > 1280;
  };

  return {
    isMobile,
    isTabled,
    isDesktop,
  };
};
