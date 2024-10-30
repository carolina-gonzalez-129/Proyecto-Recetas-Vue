import { createApp } from 'vue'
import './style.css'
import 'bootstrap';
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router';
import 'bootswatch/dist/vapor/bootstrap.min.css';
//le puse ese tema de vapor


const pinia = createPinia()
const app =
createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
