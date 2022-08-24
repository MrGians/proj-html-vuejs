<template>
  <div>
    <BaseHeader />
    <BaseMain :quickstartTabs="quickstartTabs" />
  </div>
</template>

<script>
// Data
import { quickstartTabs } from "./assets/data/index.js";
// Components
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseMain from "./components/layout/BaseMain.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseMain },
  data() {
    return {
      quickstartTabs,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
