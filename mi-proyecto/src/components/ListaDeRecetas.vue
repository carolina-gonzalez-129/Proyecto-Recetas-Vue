<template>
  <div class="container mt-5">
    <h2>Lista de Recetas</h2>
    <ul class="list-group">
      <li
          v-for="receta in recetas"
          :key="receta.id"
          class="list-group-item d-flex justify-content-between align-items-center"
      >
        <router-link :to="'/receta/' + receta.id">{{ receta.nombre }}</router-link>
        <img v-if="receta.imagen" :src="receta.imagen" alt="Imagen de la receta" class="img-fluid rounded" style="max-height: 100px;">
        <div>
          <button @click="eliminarReceta(receta.id)" class="btn btn-danger rounded">Eliminar</button>
          <button @click="irAModificarReceta(receta.id)" class="btn btn-danger rounded">Modificar uwu</button>

        </div>


      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recetas: [],
    };
  },
  created() {
    this.cargarRecetas();
  },
  methods: {
    async cargarRecetas() {
      try {
        const response = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas');
        console.log(response.data);
        this.recetas = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async eliminarReceta(id) {
      try {
        const response = await axios.delete(`https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas/${id}`);
        this.recetas = this.recetas.filter(receta => receta.id !== id);
        alert('Pude eliminar la receta!')
      } catch (error) {
        console.error('Error al eliminar la receta:', error);
      }
    },
    irAModificarReceta(id) {
      this.$router.push(`/modificar/${id}`);
    }


  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
