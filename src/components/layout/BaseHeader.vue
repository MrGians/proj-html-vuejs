<template>
  <header>
    <div class="container">
      <!-- Main Navbar -->
      <nav id="navbar">
        <!-- Logo -->
        <a href="#">
          <img class="logo" src="./../../assets/img/logo-dark.png" alt="Landrick Logo" />
        </a>
        <!-- Navigation -->
        <ul class="navigation">
          <li><a class="active" href="#">Home</a></li>
          <li><a href="#">Landing</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
        <!-- Navigation CTA Icon -->
        <ul class="navigation-icons">
          <li>
            <a href="#"><FaIcon icon="fa-solid fa-magnifying-glass" /></a>
          </li>
          <li>
            <a class="cs-nav-icon" href="#"><FaIcon icon="fa-brands fa-github" /></a>
          </li>
          <li>
            <a class="cs-nav-icon" href="#"><FaIcon icon="fa-brands fa-stack-overflow" /></a>
          </li>
          <li>
            <a class="cs-nav-icon" href="#"><FaIcon icon="fa-solid fa-user-large" /></a>
          </li>
        </ul>
      </nav>
      <!-- Settings -->
      <section id="settings">
        <FaIcon icon="fa-solid fa-gear" />
      </section>
      <!-- Jumbotron -->
      <section id="jumbotron">
        <div class="row">
          <div class="col">
            <!-- Deloper Toolset | Left -->
            <div class="dev-toolset">
              <BaseSection
                label="Development"
                title="A Complete Developer Toolset"
                titleSize="h1 w-70"
                description="Launch your campaign and benefit from our expertise on designing and managing conversion
      centered bootstrap4 html page."
              >
                <!-- CTA Buttons -->
                <BaseButton classes="cs-btn cs-btn-primary" content="Get Started" />
                <BaseButton classes="cs-btn cs-btn-outline ms-2" content="Documentation" />
                <span class="version pt-3">Current Version: v2.6.0</span>
              </BaseSection>
            </div>
          </div>
          <div class="col">
            <!-- Image Section | Right -->
            <figure>
              <img src="./../../assets/img/about.png" alt="About" />
            </figure>
          </div>
        </div>
      </section>
    </div>
    <hr />
    <!-- Premium Partner -->
    <section id="premium-partner" class="mx-3 py-5">
      <img src="./../../assets/img/amazon.svg" alt="Amazon" />
      <img src="./../../assets/img/google.svg" alt="Google" />
      <img src="./../../assets/img/lenovo.svg" alt="Lenovo" />
      <img src="./../../assets/img/paypal.svg" alt="Paypal" />
      <img src="./../../assets/img/shopify.svg" alt="Shopify" />
      <img src="./../../assets/img/spotify.svg" alt="Spotify" />
    </section>
  </header>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

header {
  background-color: $primary-bg-color;
  border-bottom-left-radius: 100%50px;
  border-bottom-right-radius: 100%100px;
}

#navbar {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 35px;
  }

  .navigation {
    display: flex;
    font-weight: 500;
    margin: 0;

    a {
      color: $primary-text-color;
      padding: 0 1rem;
      text-transform: uppercase;

      &.active {
        color: $tertiary-text-color;
      }
    }
  }
  .navigation-icons {
    display: flex;
    margin: 0;

    a {
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $secondary-text-color;
      padding: 0.5rem;
      margin: 0 0.3rem;

      &.cs-nav-icon {
        color: $tertiary-text-color;
        background-color: $secondary-bg-color;
        border: 1px solid $btn-border;
        border-radius: 5px;
        box-shadow: 0px 2px 4px -1px currentColor;
      }
    }
  }
}

#settings {
  position: absolute;
  top: 20%;
  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: $tertiary-text-color;
  background-color: $white;
  padding: 0.7rem;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}

#jumbotron {
  color: $secondary-text-color;
  padding: 7rem 0;

  .row {
    align-items: center;

    .dev-toolset {
      .version {
        display: block;
        font-size: 0.8rem;
      }
    }

    figure > img {
      width: 90%;
      margin: auto;
    }
  }
}

#premium-partner {
  display: flex;
  justify-content: center;

  img {
    max-height: 30px;
    padding: 0 2rem;
  }
}
</style>
