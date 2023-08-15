export const dataBank = async (url: string, options: any) => {
  const res = await fetch(url, options) // useFetch
  const json = await res.json()
  console.log('DATA@: ', json)
  return json
}