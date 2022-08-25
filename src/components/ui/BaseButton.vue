<template>
  <button :class="classes">{{ content + " " }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    classes: {
      type: String,
      default: "cs-btn cs-btn-primary",
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

.cs-btn {
  display: inline-block;
  font-weight: 500;
  padding: 0.3rem 0.8rem;
  border-radius: 0.3rem;

  &.cs-btn-primary {
    color: $white;
    background-color: $tertiary-bg-color;
    border: 1px solid $tertiary-bg-color;
  }
  &.cs-btn-outline {
    color: $tertiary-text-color;
    background-color: $primary-bg-color;
    border: 1px solid $tertiary-text-color;
  }
  &.cs-btn-footer {
    color: $tertiary-text-color;
    background-color: $footer-bg-btn;
    border: none;
    box-shadow: 0px 2px 2px 0px $tertiary-text-color;
  }

  &:hover::after {
    content: "\01F852";
  }
}
</style>
