<template>
  <header>
    <div class="container">
      <!-- Main Navbar -->
      <nav id="navbar">
        <!-- Logo -->
        <a href="#">
          <img class="logo" src="./../assets/img/logo-dark.png" alt="Landrick Logo" />
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
    </div>
  </header>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<style lang="scss" scoped>
@import "./../assets/styles/style.scss";

header {
  background-color: $primary-bg-color;
}

#navbar {
  height: 50px;
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
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $secondary-text-color;
      padding: 0.5rem;
      margin: 0 0.3rem;

      &.cs-nav-icon {
        color: $tertiary-text-color;
        background-color: $secondary-bg-color;
        border-radius: 5px;
        box-shadow: 0px 2px 4px -1px currentColor;
      }
    }
  }
}
</style>
