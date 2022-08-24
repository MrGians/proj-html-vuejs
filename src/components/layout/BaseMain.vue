<template>
  <main>
    <div class="container">
      <!-- Key Features Section -->
      <section id="key-features">
        <BaseSection
          title="Key Features"
          description="Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
          descriptionSize="w-50"
        >
          <!-- Features Cards -->
          <div class="row">
            <div v-for="feature in keyFeatures" :key="feature.id" class="col">
              <FeatureCard :item="feature" />
            </div>
          </div>
        </BaseSection>
      </section>
      <!-- Quickstart Section -->
      <section id="quickstart">
        <BaseSection
          centered="true"
          label="Quickstart"
          title="Awesome isn't it? Let's dive in!"
          description="Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
          descriptionSize="w-50"
        >
          <!-- Quickstart Tabs -->
          <BaseTab :tabs="quickstartTabs" />
        </BaseSection>
      </section>
      <!-- Build tools Section -->
      <section id="build-tools"></section>
      <!-- Business Plan Section -->
      <section id="business-plan"></section>
      <!-- Find out Section -->
      <section id="find-out"></section>
    </div>
  </main>
</template>

<script>
import FeatureCard from "../ui/FeatureCard.vue";
import BaseSection from "../ui/BaseSection.vue";
import BaseTab from "../ui/BaseTab.vue";
export default {
  name: "BaseMain",
  components: { FeatureCard, BaseSection, BaseTab },
  props: {
    quickstartTabs: Array,
    keyFeatures: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

section {
  margin: 5rem auto;
}
</style>
