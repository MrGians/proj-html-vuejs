<template>
  <div>
    <BaseHeader v-bind="headerLinks" :partners="premiumPartner" />
    <BaseMain :quickstartTabs="quickstartTabs" :keyFeatures="keyFeatures" />
  </div>
</template>

<script>
// Data
import { quickstartTabs, keyFeatures, headerLinks, premiumPartner } from "./assets/data/index.js";
// Components
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseMain from "./components/layout/BaseMain.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseMain },
  data() {
    return {
      quickstartTabs,
      keyFeatures,
      headerLinks,
      premiumPartner,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
