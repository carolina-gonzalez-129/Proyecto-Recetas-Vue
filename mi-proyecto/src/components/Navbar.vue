<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/"> Pagina principal </router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="userNotLogged">
            <router-link class="nav-link" to="/login">Iniciar sesion</router-link>
          </li>
          <li class="nav-item" v-if="userNotLogged">
            <router-link class="nav-link" to="/register">Registrarme</router-link>
          </li>
          <li class="nav-item" v-if="userLogged">
            <router-link class="nav-link" :to="`/recetas`">Lista de recetas</router-link>
          </li>
          <li class="nav-item" v-if="userLogged">
            <router-link class="nav-link" to="/agregar">Agregar Receta</router-link>
          </li>

          <li class="nav-item" v-if="userLogged">
            <router-link class="nav-link" to="/logout">Cerrar sesion</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
import {useGlobalStore} from "../../store/global.js";
import {computed} from "vue";
export default {
  name: 'Navbar',
  setup() {
    const globalStore = useGlobalStore();

    const userLogged = computed(() => globalStore.isUserLoggedIn);
    const userNotLogged = computed(() => !globalStore.isUserLoggedIn);

    return {
      userLogged,
      userNotLogged,
    };
  },
};
</script>

<style scoped>
.src-componentes-navbar {
  color: #c800ff;
}
</style>