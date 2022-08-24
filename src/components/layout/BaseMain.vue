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
      <section id="build-tools">
        <div class="row">
          <div class="col">
            <!-- Dev-Tools| Left -->
            <div class="dev-tool">
              <BaseSection
                title="Build tools and extensive documention"
                description="You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
              >
                <!-- Dev-Tools List -->
                <ul class="tool-list">
                  <li>Digital Marketing Solutions for Tomorrow</li>
                  <li>Our Talented & Experienced Marketing Agency</li>
                  <li>Create your own skin to match your brand</li>
                </ul>
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

#build-tools {
  color: $secondary-text-color;

  .row {
    align-items: center;

    .dev-tool {
      .tool-list {
        padding: 0;

        & li {
          display: flex;
          align-items: baseline;
          padding: 0.3rem 0;
        }
        & li::before {
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
      }
    }
  }
}
</style>
