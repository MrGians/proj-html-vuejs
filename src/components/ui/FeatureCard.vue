<template>
  <div class="feature-card">
    <!-- Icon -->
    <div class="icon-box">
      <FaIcon :icon="icon" />
    </div>
    <!-- Title -->
    <h4 class="title pt-4">{{ title }}</h4>
    <!-- Description -->
    <p class="description">
      {{ description }}
    </p>
    <!-- Redirect Link -->
    <a v-if="redirect" class="redirect" href="#">{{ redirect }}</a>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icon() {
      return this.item.icon;
    },
    title() {
      return this.item.title;
    },
    description() {
      return this.item.description;
    },
    redirect() {
      return this.item.redirect;
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
