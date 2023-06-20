import { createApp } from "vue";
import { createPinia } from 'pinia';
import { useCategoryStore } from './pinia/categories';

import router from "./routes";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(useCategoryStore);
app.use(pinia);
app.use(router);
app.mount("#app");
