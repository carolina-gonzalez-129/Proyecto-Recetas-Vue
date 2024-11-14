import { createRouter, createWebHistory } from 'vue-router';
import ListaDeRecetas from './components/ListaDeRecetas.vue';
import DetalleReceta from './components/DetalleReceta.vue';
import FormularioReceta from './components/FormularioReceta.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Logout from "./components/Logout.vue";
import LandingPage from "./components/LandingPage.vue";
import Informes from './components/Informes.vue';


const routes = [
    { path: '/recetas', component: ListaDeRecetas },
    { path: '/receta/:id', component: DetalleReceta },
    { path: '/agregar', component: FormularioReceta },
    {path: '/eliminar/:id', component: ListaDeRecetas},
    {path: '/modificar/:id', component: FormularioReceta},
    { path: '/login', component: Login },
    { path: '/', component: LandingPage },
    { path: '/register', component: Register },
    { path: '/logout', component: Logout },
    { path: '/informes', component: Informes },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
