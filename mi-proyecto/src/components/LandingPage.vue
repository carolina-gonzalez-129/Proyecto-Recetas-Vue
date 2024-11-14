<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">Food Connections</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/recetas">Explorar recetas</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonios">Testimonios</a>
          </li>
          <li class="nav-item" v-if="userNotLogged">
            <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
          </li>

          <li class="nav-item" v-if="userLogged">
            <router-link class="nav-link" to="/logout">Cerrar sesión</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="welcome-section d-flex align-items-center" style="height: 80vh;">

      <div class="text-section container text-left" style="flex: 1; padding-right: 40px;">
        <h1 class="display-3 text-white">Bienvenido al mejor sitio para crear y compartir recetas</h1>
        <p class="lead text-white">Aca podes descubrir y compartir las mejores recetas.</p>
        <div class="d-flex justify-content-start mt-4">
          <router-link v-if="userNotLogged" to="/login" class="btn btn-secondary mx-2">
            Iniciar sesión
          </router-link>
          <router-link to="/recetas" class="btn btn-info mx-2">Explorar recetas</router-link>
        </div>
      </div>


      <div class="image-container d-flex justify-content-end align-items-center" style="flex: 1;">
        <img src="https://t3.ftcdn.net/jpg/01/09/57/64/360_F_109576456_0wMZb71t1721o6BpkfMgpbosFn1hzBzq.jpg" alt="Imagen generada por DALL-E" class="img-fluid rounded shadow-lg" style="max-width: 60%; height: auto;">
      </div>
    </div>



    <div id="testimonios" class="testimonials my-5">
      <h2 class="text-center">Lo que dicen nuestros usuarios</h2>
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="testimonial-box p-3">
            <p>"¡Food Connections cambió la forma en que cocino! Siempre descubro recetas nuevas y deliciosas."</p>
            <small>- Pedro</small>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-box p-3">
            <p>"Me encanta cómo puedo encontrar recetas que se adaptan a mis gustos y dietas."</p>
            <small>- Carolina</small>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-box p-3">
            <p>"Food Connections cambió mi vida."</p>
            <small>- Germán González</small>
          </div>
        </div>
      </div>
    </div>

    <div class="benefits my-5">
      <h2 class="text-center">¿Por qué elegirnos?</h2>
      <div class="row mt-4">
        <div class="col-md-4 text-center">
          <i class="fa-solid fa-utensils fa-3x"></i>
          <h4>Recetas Diversas</h4>
          <p>Desde lo más tradicional hasta lo más innovador, tenemos algo para todos los gustos.</p>
        </div>
        <div class="col-md-4 text-center">
          <i class="fa-solid fa-users fa-3x"></i>
          <h4>Comunidad Activa</h4>
          <p>Conecta con otros amantes de la cocina y comparte tus creaciones.</p>
        </div>
        <div class="col-md-4 text-center">
          <i class="fa-solid fa-star fa-3x"></i>
          <h4>Calificaciones</h4>
          <p>Somos el sitio de recetas mejor puntuado de la web.</p>
        </div>
      </div>


    </div>

    <footer class="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2024 Food Connections.</p>
      <p><a href="mailto:contacto@foodconnections.com" class="text-white">contacto@foodconnections.com</a></p>
    </footer>
  </div>

</template>

<script>
import { useGlobalStore } from "../../store/global.js";
import { computed } from "vue";

export default {
  name: 'LandingPage',
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
.title-class {
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
}

.custom-paragraph {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
}

.bg-dark {
  background-color: #2c3e50 !important;
}

.text-white {
  color: #e0fdff !important;
}

.welcome-section {
  background-color: #2c3e50 !important;
  height: 80vh;
}

.text-section {
  z-index: 1;
}

.image-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.display-3 {
  font-size: 3rem;
  font-weight: 700;
}

.lead {
  font-size: 1.25rem;
}

.btn-secondary {
  background-color: #b0b0b0;
  color: white;
}

.btn-info {
  background-color: #3498db;
  color: white;
}

.testimonial-box {
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-box p {
  font-style: italic;
}

.benefits i {
  color: #f8b400;
}


.navbar {
  z-index: 1000;
}

.navbar-nav .nav-item {
  margin-left: 20px;
}
</style>
