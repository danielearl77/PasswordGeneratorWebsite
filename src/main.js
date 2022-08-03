import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import './assets/site.css'

const app = createApp(App)

app.use(router)

app.component('Navbar',Navbar)
app.component('Footer',Footer)

app.mount('#app')
