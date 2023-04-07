export const useRouteLinks = () => {
  const routeLinks = ref([
    {
      name: 'Портфолио',
      route: '/portfolio',
    },
    {
      name: 'Инструменты',
      route: '/tools',
    },
    {
      name: 'Песочница',
      route: '/sandbox',
    },
    {
      name: 'Контакты',
      route: '/contacts',
    },
  ]);

  return {
    routeLinks,
  };
};
