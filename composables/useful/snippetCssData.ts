export const snippetCssData = () => {
  const remFunc = ref(
    '' +
      "@use 'sass:math';\n" +
      '\n' +
      "@import '../variables/base-font-size';\n" +
      '$size: math.div($base-font-size, 1px);\n' +
      '@function rem($px) {\n' +
      '  @return math.div($px, $size) + rem;\n' +
      '}',
  );

  return {
    remFunc,
  };
};
