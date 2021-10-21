import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import 'normalize.css'
import 'nprogress/nprogress.css'
import './less/global.less'
import ElementPlus from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(ElementPlus, { locale: lang, size: 'small', zIndex: 3000 })
app.mount('#app')
