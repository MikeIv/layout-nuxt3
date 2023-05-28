export const checkResult = () => {
  const nameFirst = ref();
  const age = ref();

  onMounted(() => {
    resultData();
  });
  const resultData = () => {
    nameFirst.value = 'Anna';
    age.value = 30;
  };

  return {
    nameFirst,
    age,
  };
};
