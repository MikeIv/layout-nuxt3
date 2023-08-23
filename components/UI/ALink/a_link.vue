<template>
  <a :href="href" :class="[classes, fontsize]" :target="target">
    {{ linkText }}
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'a_link',
  props: {
    href: {
      type: String,
      default: '#',
    },
    linkText: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      validator: (value) => ['btn'].includes(value),
    },
    target: {
      type: String,
      default: '_blank',
    },
    color: String,
    bgColor: {
      type: String,
      validator: (value) =>
        ['accent', 'primary', 'secondary', 'ghost-accept', 'ghost-primary', 'none', 'custom', 'gradient'].includes(
          value,
        ),
    },
    fontSize: {
      type: String,
      validator: (value) => ['s', 'xs'].includes(value),
    },
  },

  computed: {
    classes() {
      return {
        'a-link': true,
        [`a-link--${this.color}`]: true,
        [`a-link--${this.type}`]: true,
        [`a-link--${this.bgColor}`]: true,
      };
    },
    fontsize() {
      return {
        [`a-font__${this.fontSize}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">
@import './a_link.scss';
</style>
