<template>
  <button type="button" :class="classes" :disabled="disabled" @click.prevent.stop="handleClick">
    <i :class="icons"></i>
    <slot></slot>
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
/*
props
 */

const props = defineProps({
  bgColor: {
    type: String,
    validator: (value) => ['accent', 'primary', 'secondary', 'ghost-accept'].includes(value),
  },
  label: {
    type: String,
  },
  onlyIcon: {
    type: String,
    validator: (value) => ['rounded', 'square'].includes(value),
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

  addIcon: {
    type: String,
    validator: (value) => ['fonts-icon'].includes(value),
  },
  iconPosition: {
    type: String,
    validator: (value) => ['left', 'right'].includes(value),
  },
  iconType: {
    type: String,
  },
});

/*
emit
 */

const emit = defineEmits(['handleClick']);
const handleClick = () => {
  console.log('handleClick');
  emit('handleClick');
};

/*
computed
 */

const classes = computed(() => {
  return {
    'a-button': true,
    [`a-button--${props.size || 'medium'}`]: true,
    [`a-button--${props.bgColor}`]: true,
    [`a-button--${props.addIcon}`]: true,
    [`a-button--${props.onlyIcon}`]: true,
    [`a-button--${props.type}`]: true,
  };
});

const fontsize = computed(() => {
  return {
    [`a-font__btn-${props.fontSize}`]: true,
  };
});

const icons = computed(() => {
  return {
    'a-button__icon': true,
    [`a-button__icon--${props.addIcon}`]: true,
    [`a-button__icon--${props.iconPosition}`]: true,
    [`${props.iconType}`]: true,
  };
});
</script>

<!--<script>-->
<!--export default {-->
<!--  name: 'AButton',-->

<!--  methods: {-->
<!--    onClickBtn() {-->
<!--      this.$emit('click');-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<style scoped lang="scss">
@import './a_button.scss';
</style>
