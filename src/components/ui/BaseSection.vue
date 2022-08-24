<template>
  <div :class="{ 'text-center': centered }">
    <!-- Label -->
    <span v-if="label" class="label my-2">{{ label }}</span>
    <!-- Title -->
    <h2 :class="['title', titleSize]">{{ title }}</h2>
    <!-- Description -->
    <p :class="['description', 'py-3', descriptionSize, { 'mx-auto': centered }]">
      {{ description }}
    </p>
    <!-- Custom content -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseSection",
  props: {
    centered: {
      type: Boolean,
      default: false,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    titleSize: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    descriptionSize: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

.label {
  display: inline-block;
  color: $tertiary-text-color;
  background-color: $secondary-bg-color;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.1rem 0.4rem;
  border: 1px solid $btn-border;
  border-radius: 1rem;
}

.title {
  font-weight: 700;
  color: $primary-text-color;

  &.w-70 {
    width: 70%;
  }
}

.description {
  color: $secondary-text-color;
}
</style>
