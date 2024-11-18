<template>
  <div class="detalle-receta">
    <div class="header-receta">
      <h1 class="titulo-receta">{{ receta.nombre }}</h1>
      <img class="imagen-receta" :src="receta.imagen" alt="Imagen de la receta">
    </div>

    <p class="descripcion-receta">{{ receta.descripcion }}</p>


    <div class="contenido-receta">
      <h2 class="subtitulo">Ingredientes</h2>
      <ul class="lista-ingredientes">
        <li v-for="ingrediente in receta.ingredientes" :key="ingrediente">{{ ingrediente }}</li>
      </ul>

      <h2 class="subtitulo">Pasos</h2>
      <ul class="lista-pasos">
        <li v-for="paso in receta.pasos" :key="paso">{{ paso }}</li>
      </ul>
    </div>

    <div class="info-receta">
      <p class="autor-receta">Autor: {{ receta.autor }}</p>
      <section class="acciones">
        <router-link
            v-if="receta.id && globalStore.getActiveUsername === receta.autor || globalStore.getActiveUsername === 'admin'"
            class="btn btn-modificar"
            :to="`/modificar/${receta.id}`"
        >
          Modificar
        </router-link>

        <a
            v-if="receta.id && globalStore.getActiveUsername === receta.autor || globalStore.getActiveUsername === 'admin' "
            class="btn btn-eliminar"
            @click.prevent="irAeliminarReceta"
        >
          Eliminar
        </a>

        <a v-if="receta.id && globalStore.getActiveUsername === 'admin'">
          {{ receta.contador_clicks }} visitas
        </a>
      </section>
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
import {computed} from "vue";

export default {

  data() {
    return {
      globalStore: useGlobalStore(),
      receta: {},

    };
  },
  created() {
    this.fetchReceta();
  },
  methods: {
    async fetchReceta() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(`https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas/${id}`);
        this.receta = response.data;
        this.receta.contador_clicks += 1;
        await axios.put(`https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas/${id}`, {
          contador_clicks: this.receta.contador_clicks,
        });

      } catch (error) {
        console.error(error);
      }
    },
    async irAeliminarReceta() {
      try {
        await axios.delete(`https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas/${this.receta.id}`);
        alert('Receta eliminada');
        this.$router.push(`/recetas`);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.bg-dark {
  background-color: #2c3e50 !important;
}
.detalle-receta {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-receta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 8px;
}

.titulo-receta {
  font-size: 3rem;
  font-weight: bold;
  flex: 1;
  text-align: left;
  color: #333;
}

.imagen-receta {
  width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.descripcion-receta {
  font-size: 1.5rem;
  margin: 20px 0;
  color: #555;
}

.contenido-receta {
  margin-top: 40px;
}

.subtitulo {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 30px;
  color: #333;
}

.lista-ingredientes,
.lista-pasos {
  padding-left: 20px;
  list-style-type: disc;
  font-size: 1.2rem;
  color: #555;
}

.autor-receta {
  font-size: 1rem;
  color: #888;
  margin-top: 20px;
  text-align: right;
}

.acciones {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-modificar {
  background-color: #007bff;
  color: white;
}

.btn-modificar:hover {
  background-color: #0056b3;
}

.btn-eliminar {
  background-color: #dc3545;
  color: white;
}

.btn-eliminar:hover {
  background-color: #c82333;
}


@media (max-width: 992px) {
  .header-receta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .titulo-receta {
    font-size: 3.5rem;
  }

  .imagen-receta {
    width: 100%;
    max-width: 400px;
  }

  .subtitulo {
    font-size: 1.6rem;
  }
}

@media (max-width: 576px) {
  .header-receta {
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
  }

  .titulo-receta {
    font-size: 2rem;
  }

  .imagen-receta {
    width: 100%;
    max-width: 300px;
  }

  .descripcion-receta {
    font-size: 1.1rem;
  }

  .subtitulo {
    font-size: 1.4rem;
  }

  .btn {
    width: 100%;
    max-width: 200px;
  }

  .acciones {
    flex-direction: column;
    align-items: center;
  }


}
</style>
