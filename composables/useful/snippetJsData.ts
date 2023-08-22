export const snippetJsData = () => {
  const average = ref('const average = (...nums) => nums.reduce((a, c) => a + c, 0) / nums.length');

  return {
    average,
  };
};
