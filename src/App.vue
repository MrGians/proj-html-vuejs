<template>
  <div>
    <BaseHeader />
    <BaseMain />
  </div>
</template>

<script>
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseMain from "./components/layout/BaseMain.vue";
export default {
  name: "App",
  components: { BaseHeader, BaseMain },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>
