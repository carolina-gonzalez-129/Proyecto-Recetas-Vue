<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Pagina principal</router-link>

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
          <li class="nav-item" v-if="esAdmin">
            <router-link class="nav-link" to="/informes">Informes</router-link>
          </li>

        </ul>
      </div>
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

     const esAdmin = computed(() => globalStore.getActiveUsername==='admin')
    const userLogged = computed(() => globalStore.isUserLoggedIn);
    const userNotLogged = computed(() => !globalStore.isUserLoggedIn);

    return {
      userLogged,
      userNotLogged,
      esAdmin,
    };
  },
};
</script>

<style scoped>
.src-componentes-navbar {
  color: #c800ff;
}
.navbar {
  height: 16px;
}
</style>