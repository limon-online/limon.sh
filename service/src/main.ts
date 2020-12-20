import { createApp } from 'vue'

// Now bootstrap-vue isn't compatible with vue 3
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
