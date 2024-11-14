<template>
  <div class="container mt-5">
    <h2 class="titulo-recetas">Recetas</h2>
    <div class="row">
      <div
          class="col-4 col-sm-4 col-md-4 col-lg-4 mb-4"
          v-for="receta in recetas"
          :key="receta.id"
      >
        <div class="card h-100">
          <img
              v-if="receta.imagen"
              :src="receta.imagen"
              alt="Imagen de la receta"
              class="card-img-top"
          >
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{{ receta.nombre }}</h5>
            <p class="card-text">{{ receta.descripcion }}</p>
            <router-link :to="'/receta/' + receta.id" class="btn btn-primary">Ver Receta</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <p>&copy; 2024 Food Connections.</p>
    <p><a href="mailto:contacto@foodconnections.com" class="text-white">contacto@foodconnections.com</a></p>
  </footer>

</template>


<script>
import axios from 'axios';
import { useGlobalStore } from "../../store/global.js";

export default {
  data() {
    return {
      recetas: [],
      globalStore: useGlobalStore(),
    };
  },
  created() {
    this.cargarRecetas();
  },
  methods: {
    async cargarRecetas() {
      try {
        const response = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas');
        this.recetas = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async eliminarReceta(id) {
      const receta = this.recetas.find(r => r.id === id);
      if (receta.autor === this.globalStore.getActiveUsername) {
        try {
          await axios.delete(`https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas/${id}`);
          alert('Receta eliminada');
        } catch (error) {
          console.error('Error al eliminar la receta:', error);
        }
      } else {
        alert('No tenes permisos para eliminar esta receta porque no eres su autor');
      }
    },
    irAModificarReceta(id) {
      const receta = this.recetas.find(r => r.id === id);
      if (receta.autor === this.globalStore.getActiveUsername) {
        this.$router.push(`/modificar/${id}`);
      } else {
        alert('No tenes permisos para modificar esta receta porque no eres su autor');
      }
    }
  }
};
</script>

<style scoped>
.titulo-recetas {
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.card {
  height: 100%;
}

@media (min-width: 992px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .col-12 {
    max-width: 100%;
  }
}
.bg-dark {
  background-color: #2c3e50 !important;
}

</style>
