<template>
  <div>
    <BaseHeader v-bind="headerLinks" :partners="premiumPartner" />
    <BaseMain
      :quickstartTabs="quickstartTabs"
      :keyFeatures="keyFeatures"
      :buildTools="devBuildTools"
      :businessPlans="businessPlans"
    />
  </div>
</template>

<script>
// Data
import {
  quickstartTabs,
  keyFeatures,
  headerLinks,
  premiumPartner,
  devBuildTools,
  businessPlans,
} from "./assets/data/index.js";
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
      devBuildTools,
      businessPlans,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
