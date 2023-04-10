<template>
  <button type="button" :class="classes" :disabled="disabled" @click.prevent.stop="onClickBtn">
    <i :class="icons"></i>
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'AButton',

  props: {
    label: {
      type: String,
    },

    disabled: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      validator: (value) => ['xlarge', 'large', 'medium', 'small'].includes(value),
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['accent', 'primary', 'default'].includes(value),
    },
    fontSize: {
      type: String,
      validator: (value) => ['l', 'm', 's'].includes(value),
    },
    bgColor: {
      type: String,
      validator: (value) =>
        ['accent', 'primary', 'secondary', 'ghost-accept', 'ghost-primary', 'none', 'custom', 'gradient'].includes(
          value,
        ),
    },
    addIcon: {
      type: String,
      validator: (value) => ['fonts-icon'].includes(value),
    },
    iconPosition: {
      type: String,
      validator: (value) => ['left', 'right'].includes(value),
    },
    onlyIcon: {
      type: String,
      validator: (value) => ['rounded', 'square'].includes(value),
    },
    iconType: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'a-button': true,
        [`a-button--${this.size || 'medium'}`]: true,
        [`a-button--${this.bgColor}`]: true,
        [`a-button--${this.addIcon}`]: true,
        [`a-button--${this.onlyIcon}`]: true,
        [`a-button--${this.type}`]: true,
      };
    },
    fontsize() {
      return {
        [`a-font__btn-${this.fontSize}`]: true,
      };
    },
    icons() {
      return {
        'a-button__icon': true,
        [`a-button__icon--${this.addIcon}`]: true,
        [`a-button__icon--${this.iconPosition}`]: true,
        [`${this.iconType}`]: true,
      };
    },
  },

  methods: {
    onClickBtn() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">
@import './a_button.scss';
</style>
