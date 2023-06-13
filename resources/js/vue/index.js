import { createApp } from "vue/dist/vue.esm-bundler.js";
import router from "./routes";
import App from "./App.vue";

const app = createApp(App);
app.component(App);
app.use(router);
app.mount("#app");
