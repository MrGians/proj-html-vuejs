<template>
  <div>
    <BaseHeader v-bind="headerLinks" :partners="premiumPartner" />
    <BaseMain
      :quickstartTabs="quickstartTabs"
      :keyFeatures="keyFeatures"
      :buildTools="devBuildTools"
      :businessPlans="businessPlans"
      @get-address="logAddress"
    />
    <BaseFooter />
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
  socialLinks,
  footerLinks,
} from "./assets/data/index.js";
// Components
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseMain from "./components/layout/BaseMain.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseMain, BaseFooter },
  data() {
    return {
      quickstartTabs,
      keyFeatures,
      headerLinks,
      premiumPartner,
      devBuildTools,
      businessPlans,
      socialLinks,
      footerLinks,
    };
  },
  methods: {
    logAddress(address) {
      console.log(address);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
