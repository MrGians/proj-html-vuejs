import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faTablet } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faGear,
  faMagnifyingGlass,
  faStackOverflow,
  faGithub,
  faUserLarge,
  faLayerGroup,
  faTablet,
  faPenToSquare,
  faMaximize,
  faCircleCheck,
  faAngleDown,
  faAngleRight,
  faArrowRight,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faEnvelope
);
Vue.component("FaIcon", FontAwesomeIcon);

import BaseButton from "./components/ui/BaseButton";
Vue.component("BaseButton", BaseButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
