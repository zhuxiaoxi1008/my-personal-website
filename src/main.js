import './assets/main.css'

import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(elementPlus)

app.use(createPinia())
app.use(router)

import globalVariable from './globalVariable'
app.use(globalVariable)

import iconPlugin from './icon-plugin'
app.use(iconPlugin)

app.mount('#app')
