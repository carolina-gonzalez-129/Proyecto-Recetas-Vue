import { createApp } from 'vue'
import 'bootstrap';
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router';
import 'bootswatch/dist/sandstone/bootstrap.min.css';
import 'animate.css';


const pinia = createPinia()
const app =
createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')

