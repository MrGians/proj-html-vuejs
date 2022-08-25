<template>
  <div>
    <input
      :class="classes"
      v-model="address"
      @keyup.enter="setAddress"
      type="email"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeholder: {
      type: String,
      default: "Email Address",
    },
    classes: {
      type: String,
      default: "w-100",
      required: false,
    },
  },
  methods: {
    setAddress() {
      this.$emit("set-address", this.address);
    },
  },
  data() {
    return {
      address: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

input {
  padding: 1rem 1.5rem;
  border: 1px solid grey;
  border-radius: 2rem;
}

.cs-footer {
  color: $white;
  background-color: $footer-bg-input;
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 0.3rem;
}
</style>
