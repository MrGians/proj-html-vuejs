<template>
  <ul id="list">
    <li :class="marker" v-for="item in list" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
export default {
  name: "BaseList",
  props: {
    list: {
      type: Array,
      required: true,
    },
    marker: {
      type: String,
      default: "checkmark",
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

#list {
  color: $secondary-text-color;
  padding: 0;

  & li {
    display: flex;
    align-items: baseline;
    padding: 0.3rem 0;
  }
  & li.checkmark::before {
    content: "\2713";
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1rem;
    height: 1rem;
    font-size: 0.7rem;
    font-weight: bold;
    color: $tertiary-bg-color;
    border: 1px solid $tertiary-bg-color;
    border-radius: 50%;
    margin-right: 1rem;
  }
  & li.arrow::before {
    content: "\203A";
    font-size: 1.3rem;
    font-weight: 500;
    margin-right: 1rem;
  }
}
</style>
