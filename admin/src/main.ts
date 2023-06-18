//import './assets/main.css'

import { createApp,ref,reactive } from 'vue'
import { createPinia,defineStore } from 'pinia'
import getPicture from './utils/get-picture'
import VueWechatTitle from 'vue-wechat-title'

import axios from 'axios'
import QS from 'qs'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(ref)
app.use(reactive)
app.use(createPinia())
app.use(router)
app.use(VueWechatTitle)

app.config.globalProperties.$getPicture=getPicture
// app.config.globalProperties.$axios = axios;

app.mount('#app')
