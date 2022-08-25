<template>
  <footer>
    <!-- Top Footer -->
    <div id="top-footer">
      <div class="container">
        <div class="row">
          <div class="col-4">landrick</div>
          <div class="col-4">links</div>
          <div class="col-4">newsletter</div>
        </div>
      </div>
    </div>
    <hr />
    <!-- Bottom Footer -->
    <div id="bottom-footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="copywrite">Copy</div>
          </div>
          <div class="col">
            <div class="payment-methods">payment methods</div>
          </div>
        </div>
        <!-- Back to Top Button -->
        <div class="back-to-top"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

footer {
  color: $secondary-text-color;
  background-color: $footer-bg-color;
}
</style>
