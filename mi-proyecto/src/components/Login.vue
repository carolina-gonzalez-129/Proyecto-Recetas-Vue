<template>
  <div class="container mt-5">
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
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
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
          this.$router.push('/agregar');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>