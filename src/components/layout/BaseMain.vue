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
              <div class="feature-card">
                <!-- Feature Icon -->
                <div class="icon-box">
                  <FaIcon icon="fa-solid fa-user-large" />
                </div>
                <!-- Title -->
                <h4 class="title pt-4">Title</h4>
                <!-- Description -->
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, ratione deleniti.
                  Sunt aspernatur, exceptmagni
                </p>
                <!-- Feature Redirect Link -->
                <a class="redirect" href="#">Read More</a>
              </div>
            </div>
            <div class="col">
              <div class="feature-card">
                <!-- Feature Icon -->
                <div class="icon-box">
                  <FaIcon icon="fa-solid fa-user-large" />
                </div>
                <!-- Title -->
                <h4 class="title pt-4">Title</h4>
                <!-- Description -->
                <p class="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, ratione deleniti.
                  Sunt aspernatur, exceptmagni dsgfsdfsd sdfsdf sdf sd sdf sdf dsf sdfsfdsdfa
                  fegthtr gdgdgd stur, exceptmagni dsgfsdfsd sdfsdf sdf sd sdf sdf dsf sdfsfdsdfa
                  fegthtr gdgdgd stur, exceptmagni dsgfsdfsd sdfsdf sdf sd sdf sdf dsf sdfsfdsdfa
                  fegthtr gdgdgd sgfsdg fe e gthrt sfsg erg sfsgrg
                </p>
                <!-- Feature Redirect Link -->
                <a class="redirect" href="#">Read More</a>
              </div>
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
export default {
  name: "BaseMain",
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

section {
  margin: 5rem auto;
}

#key-features {
  .feature-card {
    height: 100%;
    font-weight: 500;
    padding: 1rem;
    border: 1px solid $secondary-bg-color;
    border-radius: 5px;

    .icon-box {
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.5rem;
      color: $tertiary-text-color;
      background-color: $secondary-bg-color;
      border-radius: 10px;
    }

    .description {
      color: $secondary-text-color;
    }
  }
}
</style>
