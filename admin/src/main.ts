//import './assets/main.css'

import { createApp,ref,reactive } from 'vue'
import { createPinia,defineStore } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ref)
app.use(reactive)
app.use(createPinia())
app.use(router)

app.mount('#app')
