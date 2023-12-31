// import './assets/main.css'   
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import App from './App.vue'
import router from './router'

import "leaflet"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("Navbar", Navbar)
app.component("Footer", Footer)

app.mount('#app')
