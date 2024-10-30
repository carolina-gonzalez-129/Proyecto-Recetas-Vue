<template>
  <div class="container mt-5">
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="username" class="form-label">Nombre de Usuario</label>
        <input
            type="text"
            class="form-control"
            id="username"
            v-model="user.username"
            required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
            type="password"
            class="form-control"
            id="password"
            v-model="user.password"
            required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input
            type="email"
            class="form-control"
            id="email"
            v-model="user.email"
            required
        />
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isSubmitting: false,
      user: {
        username: '',
        password: '',
        email: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        //voy a añadir algo para q si se quiere registrar alguien q ya tiene un username
        //no se le permita
       const res = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/users/');
        const usersTodo = res.data;
        const userYaExiste = usersTodo.find(u=>u.username===this.user.username);
        if(userYaExiste){
          alert('Ya existe un usuario registrado con ese nombre, por favor elegi otro')
        }
        else {
          this.isSubmitting = true;
          await axios.post('https://670ed6f63e7151861655ee25.mockapi.io/uwu/users', this.user);
          alert('Se pudo registrar');
          this.$router.push('/login');
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
