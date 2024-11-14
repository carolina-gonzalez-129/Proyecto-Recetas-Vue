<template>
  <div>
    <h1>Informes para el admin</h1>
    <h2>Mejor Receta</h2>
    <p v-if="topReceta">{{ topReceta }}</p>
    <p v-else>No se ha encontrado ninguna receta.</p>

    <h3>Usuario mas activo</h3>
    <p v-if="topUser.length > 0">{{ topUser[0].name }} - {{ topUser[0].recipeCount }} recetas</p>
    <p v-else>No se ha encontrado al user con más recetas.</p>
  </div>
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <p>&copy; 2024 Food Connections.</p>
    <p><a href="mailto:contacto@foodconnections.com" class="text-white">contacto@foodconnections.com</a></p>
  </footer>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      topReceta: null,
      topUser: [],
    };
  },
  methods: {
    async fetchReceta() {
      try {
        const response = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas');
        const recipes = response.data;
        this.topReceta = recipes.length > 0 ? recipes[0].nombre : null;
      } catch (error) {
        console.error(error);
      }
    },

    async fetchUser() {
      try {
        const response = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas');
        const recipes = response.data;

        const userCounts = {};
        recipes.forEach(recipe => {
          const autor = recipe.autor;
          userCounts[autor] = (userCounts[autor] || 0) + 1;
        });

        this.topUser = Object.keys(userCounts).map(userName => ({
          name: userName,
          recipeCount: userCounts[userName],
        }));

        this.topUser.sort((a, b) => b.recipeCount - a.recipeCount);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchUser();
    this.fetchReceta();
  },
};
</script>

<style scoped>

.bg-dark {
  background-color: #2c3e50 !important;
}





</style>
