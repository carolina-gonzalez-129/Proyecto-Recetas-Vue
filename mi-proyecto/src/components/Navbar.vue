<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/"> Pagina principal </router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Iniciar sesion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Registrarme</router-link>
          </li>
          <!-- Estaria bueno dsps configurar esto para q la parte de agregar, eliminar y modificar
solo se muestren cuando el usuario se autentique-->
          <li class="nav-item">
            <router-link class="nav-link" to="/agregar">Agregar Receta</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/eliminar">Eliminar Receta</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/modificar/id">Modificar Receta</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.src-componentes-navbar {
  color: #c800ff;
}
</style>