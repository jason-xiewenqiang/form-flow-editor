import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import useElement from './ElementPlus'
import 'normalize.css'
import 'nprogress/nprogress.css'
import './less/global.less'

const app = createApp(App)

useElement(app)
app.use(store, key)
app.use(router)
app.mount('#app')
