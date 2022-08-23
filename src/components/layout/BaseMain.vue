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
            <div class="col">
              <FeatureCard
                icon="fa-solid fa-layer-group"
                title="Modular"
                description="Composed in a pseudo-Latin language which more or less corresponds."
                redirect="Read More"
              />
            </div>
            <div class="col">
              <FeatureCard
                icon="fa-solid fa-tablet"
                title="Responsive"
                description="Composed in a pseudo-Latin language which more or less corresponds."
                redirect="Read More"
              />
            </div>
            <div class="col">
              <FeatureCard
                icon="fa-regular fa-pen-to-square"
                title="Customizable"
                description="Composed in a pseudo-Latin language which more or less corresponds."
                redirect="Read More"
              />
            </div>
            <div class="col">
              <FeatureCard
                icon="fa-solid fa-maximize"
                title="Scalable"
                description="Composed in a pseudo-Latin language which more or less corresponds."
                redirect="Read More"
              />
            </div>
          </div>
        </BaseSection>
      </section>
      <!-- Quickstart Section -->
      <section id="quickstart"></section>
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
export default {
  name: "BaseMain",
  components: { FeatureCard },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

section {
  margin: 5rem auto;
}

#key-features {
}
</style>
