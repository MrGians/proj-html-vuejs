<template>
  <div id="plan-card">
    <span v-if="isBest" class="label">Best</span>
    <span class="type">{{ plan.type }}</span>
    <div class="cost my-3">
      <h2>{{ plan.cost }}</h2>
      <span>{{ plan.billing }}</span>
    </div>
    <p class="description">{{ plan.description }}</p>
    <hr />
    <div class="features">
      <BaseList :list="plan.features" />
    </div>
    <div class="buy-now">
      <BaseButton classes="cs-btn cs-btn-primary w-100" content="Buy Now" />
    </div>
    <span class="payment-info my-2">{{ plan.paymentInfo }}</span>
  </div>
</template>

<script>
export default {
  name: "BusinessCard",
  props: {
    plan: {
      type: Object,
      required: true,
    },
    isBest: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

#plan-card {
  height: 100%;
  text-align: start;
  color: $secondary-text-color;
  padding: 1rem;
  border: 1px solid $secondary-bg-color;
  border-bottom: 4px solid $btn-border;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  & .label {
    position: absolute;
    top: 10px;
    right: -25px;
    color: $white;
    background-color: $business-plan-label;
    padding: 0 2rem;
    transform: rotate(45deg);
  }

  & .type {
    display: inline-block;
    color: $tertiary-text-color;
    background-color: $secondary-bg-color;
    font-weight: 500;
    padding: 0.4rem 1.3rem;
    border: 1px solid $btn-border;
    border-radius: 1rem;
  }
  & .cost h2 {
    color: $primary-text-color;
  }
  & .payment-info {
    display: inline-block;
    font-weight: 500;
  }

  &:hover {
    border-bottom-color: $tertiary-bg-color;
    transform: scale(1.04);
    box-shadow: 0px -3px 18px -10px $light-grey;
  }
}
</style>
