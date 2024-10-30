import { createRouter, createWebHistory } from 'vue-router';
import ListaDeRecetas from './components/ListaDeRecetas.vue';
import DetalleReceta from './components/DetalleReceta.vue';
import FormularioReceta from './components/FormularioReceta.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Logout from "./components/Logout.vue";

const routes = [
    { path: '/recetas', component: ListaDeRecetas },
    { path: '/receta/:id', component: DetalleReceta },
    { path: '/agregar', component: FormularioReceta },
    {path: '/eliminar', component: ListaDeRecetas},
    {path: '/modificar/:id', component: FormularioReceta},
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/logout', component: Logout },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
