import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import "./index.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueAxios, axios)
  .mount("#app");
