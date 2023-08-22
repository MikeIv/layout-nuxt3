import {useI18n} from 'vue-i18n'

export const portfolioData = () => {
  const { tm } = useI18n()
  const workData = tm('portfolio')
  const portf = ref(workData);

  return {
    portf,
  };
};
