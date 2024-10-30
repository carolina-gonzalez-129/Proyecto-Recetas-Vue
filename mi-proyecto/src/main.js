import { createApp } from 'vue'
import './style.css'
import 'bootstrap';
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router';

const pinia = createPinia()
const app =
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
