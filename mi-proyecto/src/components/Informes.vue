<template>
  <div class="container mt-5 expanded-content">
    <h1 class="titulo">Informes para el administrador</h1>
    <div class="image-container">
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0rvqaR6k7TI46PzU0Ut9jZEz9hlRTx1W7g&s"
          alt="Imagen generada por DALL-E"
          class="img-fluid rounded shadow-lg">
    </div>

    <h2 class="titulo2">Receta mas vista </h2>

    <h3 class ="mas_popular" v-if="topReceta && contador_max > 0" style="text-align: center;">
      {{ topReceta }} - {{ contador_max }} clicks
    </h3>
    <h3 v-else>
      No se ha encontrado ninguna receta
    </h3>

    <h2 class="titulo2">Usuario mas activo </h2>
    <h3 class ="mas_popular" v-if="topUser.length > 0">
      {{ topUser[0].name }} - {{ topUser[0].recipeCount }} recetas
    </h3>
    <h3 v-else>
      No se ha encontrado al user con más recetas.
    </h3>

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
      contador_max:0,

    };
  },
  methods: {
    async fetchReceta() {
      try {
        const response = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas');
        const recipes = response.data;

        if(recipes.length>0 ) {

          const funcionComparadora = (r1, r2) => {
            return r1.contador_clicks - r2.contador_clicks
          };
          const ordenadosPorClicks = recipes.sort(funcionComparadora);
          //el orden es ascendente asiq seria el ultimo elemento

          const receta = ordenadosPorClicks[ordenadosPorClicks.length - 1];
          this.topReceta = receta.nombre;
          this.contador_max = receta.contador_clicks;
        }
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
.titulo {
  font-style: italic;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}
.image-container {
  margin: 30px auto;
  max-width: 60%;
}
.img-fluid {
  width: 50%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.container {
  text-align: center;
}
.titulo2 {
  font-style: normal;
  font-weight: 300;
  text-align: center;

}
.mas_popular {
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 22px;
  margin-bottom: 30px;
}



.expanded-content {
  min-height: 70vh;
}



</style>
