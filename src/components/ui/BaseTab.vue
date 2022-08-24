<template>
  <div id="tab">
    <ul class="tab-menu">
      <li
        v-for="(tab, i) in tabs"
        :key="tab.id"
        :class="{ active: currentActiveIndex === i }"
        @click="currentActiveIndex = i"
      >
        {{ tab.name }}
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(tab, i) in tabs" :key="tab.id" v-show="currentActiveIndex === i">
        <span class="green">$</span> {{ tab.content }} <span class="green">-g</span> claps.js
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTab",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentActiveIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

#tab {
  width: 70%;
  margin: 0 auto;
  background-color: $dark-grey;
  border-radius: 5px;
  padding: 1rem;

  .tab-menu {
    display: flex;
    justify-content: space-between;
    color: $white;
    background-color: $light-grey;
    padding: 0;
    border-radius: 5px;

    & > li {
      padding: 0.2rem;
      flex-grow: 1;
      border: 1px solid transparent;
      border-radius: 5px;
      cursor: pointer;

      &.active {
        background-color: $dark-grey;
        border: 1px solid $light-grey;
      }
    }
  }
  .tab-content {
    text-align: start;
    color: $secondary-text-color;
    & .green {
      color: $quickstart-text-color;
    }
  }
}
</style>
