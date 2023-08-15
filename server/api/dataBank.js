export default defineEventHandler(async (url, options) => {
  const { data } = await useFetch(url, options);

  return data;
});
