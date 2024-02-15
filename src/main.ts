import './style/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerComponents } from './components/register'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerComponents(app)

// then the toast can be used in anywhere like this:
app.mount('#app')
