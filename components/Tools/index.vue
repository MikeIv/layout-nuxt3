<template>
  <section className="tools layout__wrapper">
    <h1 className="tools__title a-font__h1">Инструменты</h1>
    <div className="tools__header">
      <ul className="tools__header-list">
        <li className="tools__header-item cell-01">Технологии</li>
        <li className="tools__header-item cell-02">
          <div className="tools__header-img-wrapper">
            <IconsVue class="tools__header-image" />
          </div>
          <div className="tools__header-link-group">
            <a href="https://v3.ru.vuejs.org/" className="tools__header-sourse" target="_blank">Vue.js Doc</a>
            <button className="tools__header-link">#</button>
          </div>
        </li>
        <li className="tools__header-item cell-03">
          <div className="tools__header-img-wrapper">
            <IconsNuxt class="tools__header-image" />
          </div>
          <div className="tools__header-link-group">
            <a href="https://nuxt.com/" className="tools__header-sourse" target="_blank">Nuxt Doc</a>
            <button className="tools__header-link">#</button>
          </div>
        </li>
        <li className="tools__header-item cell-04">CSS</li>
        <li className="tools__header-item cell-05">CSS</li>
        <li className="tools__header-item cell-06">CSS</li>
        <li className="tools__header-item cell-07">CSS</li>
      </ul>
    </div>
    <div className="tools__section">
      <h2 className="tools__subtitle a-font__h3">SVG</h2>
      <IconsTelegram />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tools',
};
</script>

<style scoped lang="scss">
@import './tools.scss';
</style>
