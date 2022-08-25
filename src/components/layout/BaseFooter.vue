<template>
  <footer>
    <!-- Top Footer -->
    <div id="top-footer">
      <div class="container">
        <div class="row">
          <!-- Logo & Social Links | Left -->
          <div class="col-4 left-col">
            <img class="w-50" src="./../../assets/img/logo-light.png" alt="Landrick logo" />
            <p class="py-4 pe-4">
              Start working with Landrick that can provide everything you need to generate
              awareness, drive traffic, connect.
            </p>
            <!-- Social -->
            <ul class="social">
              <li v-for="icon in socialLinks" :key="icon.id">
                <a class="social-icon" :href="icon.url"><FaIcon :icon="icon.type" /></a>
              </li>
            </ul>
          </div>
          <!-- Footer Links | Middle -->
          <div class="col-4 middle-col">
            <div class="row">
              <!-- Company Links -->
              <div class="col">
                <h4 class="title">Company</h4>
                <BaseList :list="companyLinks" marker="arrow" :isLink="true" />
              </div>
              <!-- Usefull Links -->
              <div class="col">
                <h4 class="title">Usefull Links</h4>
                <BaseList :list="usefullLinks" marker="arrow" :isLink="true" />
              </div>
            </div>
          </div>
          <!-- Newsletter | Right -->
          <div class="col-4 right-col">
            <div class="newsletter ps-5">
              <h4 class="title">Newsletter</h4>
              <p class="py-4">Sign up and receive the latest tips via email.</p>
              <!-- Newsletter Input Field -->
              <!-- TODO Fix input group layout -->
              <div class="newsletter-field pb-3">
                <label class="form-label"
                  >Write your email <span class="text-danger"> * </span></label
                >
                <div class="d-flex align-items-center">
                  <span class="w-50"> <FaIcon icon="fa-regular fa-envelope" /> Your Email: </span>
                  <BaseInput
                    class="w-50"
                    @set-address="getAddress"
                    classes="cs-footer w-100"
                    placeholder=""
                  />
                </div>
              </div>
              <!-- Newsletter Subscribe Button -->
              <BaseButton classes="cs-btn cs-btn-footer w-100" content="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <!-- Bottom Footer -->
    <div id="bottom-footer" class="py-3">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="copywrite">&copy; 2020 Landrick. Design by Shreethemes.</div>
          </div>
          <div class="col">
            <div class="payment-methods">
              <img v-for="card in paymentMethods" :key="card.id" :src="card.src" :alt="card.text" />
            </div>
          </div>
        </div>
        <!-- Back to Top Button -->
        <div class="back-to-top"></div>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseList from "../ui/BaseList.vue";
import BaseInput from "../ui/BaseInput.vue";
export default {
  name: "BaseFooter",
  props: {
    socialLinks: Array,
    companyLinks: Array,
    usefullLinks: Array,
    paymentMethods: Array,
  },
  components: { BaseList, BaseInput },
  methods: {
    getAddress(address) {
      this.$emit("get-address", address);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../assets/styles/style.scss";

footer {
  color: $secondary-text-color;
  background-color: $footer-bg-color;
}

#top-footer {
  padding: 3rem 0;

  .title {
    color: $white;
  }

  .left-col {
    .social {
      display: flex;
      flex-wrap: wrap;
      padding: 0;

      .social-icon {
        height: 35px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $white;
        background-color: $footer-bg-color;
        padding: 0.5rem;
        border: 1px solid $white;
        border-radius: 5px;
        margin: 0 0.25rem 0.25rem 0;

        &:hover {
          color: $footer-bg-color;
          background-color: $white;
        }
      }
    }
  }
}

#bottom-footer {
  .payment-methods {
    display: flex;
    justify-content: end;
    flex-wrap: wrap;

    img {
      max-height: 30px;
      padding: 0 0.3rem 0.3rem;
    }
  }
}
</style>
