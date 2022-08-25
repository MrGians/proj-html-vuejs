import Vue from "vue";
import App from "./App.vue";

// # Font Awesome
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
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faEnvelope
);
Vue.component("FaIcon", FontAwesomeIcon);

// # Vue Global Components
import BaseButton from "./components/ui/BaseButton";
import BaseSection from "./components/ui/BaseSection";
import FeatureCard from "./components/ui/FeatureCard";
import BaseTab from "./components/ui/BaseTab";
import BaseList from "./components/ui/BaseList";
import BusinessCard from "./components/ui/BusinessCard";
import BaseInput from "./components/ui/BaseInput";
Vue.component("BaseButton", BaseButton);
Vue.component("BaseSection", BaseSection);
Vue.component("FeatureCard", FeatureCard);
Vue.component("BaseTab", BaseTab);
Vue.component("BaseList", BaseList);
Vue.component("BusinessCard", BusinessCard);
Vue.component("BaseInput", BaseInput);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
