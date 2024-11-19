<template>
  <div class="container mt-5 expanded-content">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="username" class="form-label">Nombre de Usuario</label>
        <input
            type="text"
            class="form-control"
            id="username"
            v-model="credentials.username"
            required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
            type="password"
            class="form-control"
            id="password"
            v-model="credentials.password"
            required
        />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
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
      credentials: {
        username: '',
        password: ''
      },
      globalStore : useGlobalStore()
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/users', {
          params: {
            username: this.credentials.username,
            password: this.credentials.password,
          },
        });
        if (response.data.length > 0) {
          alert('Se pudo iniciar sesion');
          this.globalStore.setActiveUsername(this.credentials.username)
          this.$router.push('/agregar');
        } else {
          alert('Algo fallo');
        }
      } catch (error) {
        console.error(error);
        alert('No estas registrado o las credenciales son incorrectas');
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 60px;
  text-align: center;
}
.bg-dark {
  background-color: #2c3e50 !important;
}
.expanded-content {
  min-height: 70vh;
}

</style>