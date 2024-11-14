
<template>
  <div class="container mt-5">
    <h2>{{ esEdicion ? 'Modificar Receta' : 'Agregar Receta' }}</h2>
    <form @submit.prevent="submitForm" class="mb-5">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="receta.nombre"
            @input="validateNombre"
        />
        <div v-if="nombreError" class="text-danger">{{ nombreError }}</div>
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea
            class="form-control"
            id="descripcion"
            v-model="receta.descripcion"
            @input="validateDescripcion"
        ></textarea>
        <div v-if="descripcionError" class="text-danger">{{ descripcionError }}</div>
      </div>
      <div class="mb-3">
        <label for="ingredientes" class="form-label">Ingredientes</label>
        <input
            type="text"
            class="form-control"
            id="ingredientes"
            v-model="nuevoIngrediente"
            @keyup.enter="agregarIngrediente"
        />
        <ul>
          <li v-for="(ingrediente, index) in receta.ingredientes" :key="index">{{ ingrediente }}</li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="pasos" class="form-label">Pasos</label>
        <input
            type="text"
            class="form-control"
            id="pasos"
            v-model="nuevoPaso"
            @keyup.enter="agregarPaso"
        />
        <ul>
          <li v-for="(paso, index) in receta.pasos" :key="index">{{ paso }}</li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="imagen" class="form-label">Imagen (opcional)</label>
        <input
            type="text"
            class="form-control"
            id="imagen"
            v-model="receta.imagen"
        />
      </div>

      <button type="submit" class="btn btn-primary">{{ esEdicion ? 'Modificar Receta' : 'Agregar Receta' }}</button>
    </form>
  </div>
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <p>&copy; 2024 Food Connections.</p>
    <p><a href="mailto:contacto@foodconnections.com" class="text-white">contacto@foodconnections.com</a></p>
  </footer>
</template>

<script>
import axios from 'axios';
import {useGlobalStore} from "../../store/global.js";

export default {
  data() {
    return {
      isSubmitting: false,
      esEdicion: false,
      globalStore: useGlobalStore(),
      receta: {
        nombre: '',
        descripcion: '',
        ingredientes: [],
        pasos: [],
        imagen: '',
        autor: ''
      },


    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.esEdicion = true;

    }
  },
  methods: {
    validateNombre() {
      if (!this.receta.nombre) {
        this.nombreError = 'Se requiere que ingreses un nombre';
      } else if (this.receta.nombre.length < 2) {
        this.nombreError = 'El nombre debe tener al menos 2 caracteres';
      } else {
        this.nombreError = '';
      }
    },

    validateDescripcion() {
      if (!this.receta.descripcion) {
        this.descripcionError = 'Se requiere que ingreses una descripcion';
      } else if (this.receta.descripcion.length < 2) {
        this.descripcionError = 'La descripción debe tener al menos 2 caracteres.';
      } else {
        this.descripcionError = '';
      }
    },
    agregarIngrediente() {
      if (this.nuevoIngrediente) {
        this.receta.ingredientes.push(this.nuevoIngrediente);
        this.nuevoIngrediente = '';
      }
    },
    agregarPaso() {
      if (this.nuevoPaso) {
        this.receta.pasos.push(this.nuevoPaso);
        this.nuevoPaso = '';
      }
    },
    async modificarReceta() {
      const id = this.$route.params.id;
        try {
          this.agregarPaso()
          this.agregarIngrediente()
          this.receta.autor = this.globalStore.getActiveUsername;
          const response = await axios.put(`https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas/${id}`, this.receta);
          alert('Pude modificar la receta!');
          this.$router.push('/recetas');

        } catch (error) {
          console.error(error);
        }

    },
    async agregarReceta() {
      try {
        this.agregarPaso()
        this.agregarIngrediente()
        const usuarioActual = this.globalStore.getActiveUsername;
        this.receta.autor = usuarioActual;
        const response = await axios.post('https://670ed6f63e7151861655ee25.mockapi.io/uwu/recetas', this.receta);
        alert('Receta agregada!');
        this.$router.push('/recetas');
      } catch (error) {
        console.error(error);
      }
    },
    async submitForm() {
      this.validateNombre();
      this.validateDescripcion();
      if (!this.nombreError && !this.descripcionError) {
        const globalStore = this.globalStore;
        if(!globalStore.isUserLoggedIn){
          alert('Tenes que estar logeado para subir una receta')
        }
        else{
        this.isSubmitting = true;
          const usuarioActual = globalStore.getActiveUsername;
        if (this.esEdicion) {
          await this.modificarReceta();
        } else {
          await this.agregarReceta();
        }
      }
        }
    }
  }
};
</script>

<style scoped>
.bg-dark {
  background-color: #2c3e50 !important;
}
.container {
  max-width: 600px;
}
textarea {
  background-color: rgba(241, 241, 241, 0.62);
  color: black;
}
</style>

