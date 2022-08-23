<template>
  <div class="feature-card">
    <!-- Feature Icon -->
    <div class="icon-box">
      <FaIcon :icon="icon" />
    </div>
    <!-- Title -->
    <h4 class="title pt-4">{{ title }}</h4>
    <!-- Description -->
    <p class="description">
      {{ description }}
    </p>
    <!-- Feature Redirect Link -->
    <a v-if="redirect" class="redirect" href="#">{{ redirect }}</a>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    redirect: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

.feature-card {
  height: 100%;
  font-weight: 500;
  padding: 1rem;
  border: 1px solid $secondary-bg-color;
  border-radius: 5px;

  .icon-box {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    color: $tertiary-text-color;
    background-color: $secondary-bg-color;
    border-radius: 10px;
  }

  .description {
    color: $secondary-text-color;
  }
}
</style>
