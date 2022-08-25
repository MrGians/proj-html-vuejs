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
    <BaseFooter
      @get-address="logAddress"
      :socialLinks="socialLinks"
      v-bind="footerLinks"
      :paymentMethods="paymentMethods"
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
  socialLinks,
  footerLinks,
  paymentMethods,
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
      paymentMethods,
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
