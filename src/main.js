import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import './assets/site.css'

const app = createApp(App)

app.use(router)

app.component('Navbar',Navbar)
app.component('Footer',Footer)

app.component('TabView', TabView)
app.component('TabPanel',TabPanel)

app.mount('#app')
