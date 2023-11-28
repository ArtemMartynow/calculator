import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components/global/index.js' 

import './assets/num-btn.css'
import './assets/signs-btn.css'
import './assets/up-btn.css'

const app = createApp(App)
app.use(globalComponents)
app.mount('#app')