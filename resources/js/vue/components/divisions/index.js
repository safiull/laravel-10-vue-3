import { createApp } from 'vue/dist/vue.esm-bundler.js'
import Divisions from './index.vue'

const app = createApp({})

app.component('Divisions', Divisions)
app.mount('#app')
