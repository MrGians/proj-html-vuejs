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
          :centered="true"
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
      <section id="build-tools">
        <div class="row align-items-center">
          <div class="col">
            <!-- Dev-Tools| Left -->
            <div class="dev-tool">
              <BaseSection
                title="Build tools and extensive documention"
                description="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
              >
                <!-- Dev-Tools List -->
                <BaseList :list="buildTools" />
                <!-- Read More Button -->
                <BaseButton classes="cs-btn cs-btn-primary" content="Read More" />
              </BaseSection>
            </div>
          </div>
          <div class="col">
            <!-- Image Section | Right -->
            <figure>
              <img class="w-100" src="./../../assets/img/1.png" alt="Build Tools" />
            </figure>
          </div>
        </div>
      </section>
      <!-- Business Plan Section -->
      <section id="business-plan">
        <BaseSection
          :centered="true"
          title="Our rates for developer from landrick team"
          description="Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
          descriptionSize="w-50"
        >
          <!-- Business Cards -->
          <div class="row">
            <div v-for="plan in businessPlans" :key="plan.id" class="col">
              <BusinessCard :plan="plan" :isBest="plan.id === 2" />
            </div>
          </div>
        </BaseSection>
      </section>
      <!-- Find out Section -->
      <section id="find-out">
        <BaseSection
          :centered="true"
          title="Want to be among the first to find out?"
          description="Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
          descriptionSize="w-50"
        >
          <!-- Get Started Form -->
          <div class="get-started w-50 mx-auto">
            <BaseInput @set-address="getAddress" />
            <BaseButton class="nested" classes="cs-btn cs-btn-primary" content="Get Started" />
          </div>
        </BaseSection>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "BaseMain",
  props: {
    quickstartTabs: Array,
    keyFeatures: Array,
    buildTools: Array,
    businessPlans: Array,
  },
  methods: {
    getAddress(address) {
      this.$emit("get-address", address);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

section {
  margin: 6.5rem auto;
}

#find-out {
  .get-started {
    position: relative;

    &:first-child {
      height: 60px;
    }
    .nested {
      position: absolute;
      top: 0;
      right: 4px;
      height: 50px;
      border-radius: 2rem;
      margin-top: 4px;
    }
  }
}
</style>
