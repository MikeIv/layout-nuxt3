export const toolsTitleList = () => {
  const toolsTitle = ref([
    {
      id: 'js',
      cell: 'item-02',
      icon: 'js',
      href: 'https://learn.javascript.ru/',
      title: 'Js Doc',
    },
    {
      id: 'vue',
      cell: 'item-03',
      icon: 'vue',
      href: 'https://v3.ru.vuejs.org/',
      title: 'Vue.js Doc',
    },
    {
      id: 'nuxt',
      cell: 'item-04',
      icon: 'nuxt',
      href: 'https://nuxt.com/',
      title: 'Nuxt Doc',
    },
    {
      id: 'html',
      cell: 'item-05',
      icon: 'html',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      title: 'HTML Doc',
    },
    {
      id: 'css',
      cell: 'item-06',
      icon: 'css',
      href: 'https://developer.mozilla.org/ru/docs/Web/CSS',
      title: 'CSS Doc',
    },
    {
      id: 'webstorm',
      cell: 'item-01',
      icon: 'webstorm',
      href: 'https://www.jetbrains.com/webstorm/',
      title: 'WebStorm',
    },
  ]);

  return {
    toolsTitle,
  };
};
