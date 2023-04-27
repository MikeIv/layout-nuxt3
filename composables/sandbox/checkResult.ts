export const checkResult = () => {
  const name = ref();
  const age = ref();

  onMounted(() => {
    resultData();
  });
  const resultData = () => {
    name.value = 'John';
    age.value = 30;
    console.log(name.value);
    console.log(age.value);
  };

  return {
    resultData,
  };
};
