import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

import "../style.css";

const movieRatingApp = createApp(App);

movieRatingApp.use(router).mount("#app");
