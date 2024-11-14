<template>
  <div class="container mt-5">
    <button @click="logoutUser" class="btn btn-danger mt-3">Cerrar sesion</button>
  </div>
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <p>&copy; 2024 Food Connections.</p>
    <p><a href="mailto:contacto@foodconnections.com" class="text-white">contacto@foodconnections.com</a></p>
  </footer>
</template>
<script>
import {useGlobalStore} from "../../store/global.js";
export default {
  data() {
    return {
      globalStore: useGlobalStore(),
    }
  },
  methods:{
    logoutUser() {
      this.globalStore.logout();
      alert('Se cerro tu sesion');
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.bg-dark {
  background-color: #2c3e50 !important;
}
</style>