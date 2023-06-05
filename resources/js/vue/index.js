import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'

const app = createApp({})

app.component('App', App)
app.mount('#app')
