<template>
  <div class="container mt-5">
    <button @click="logoutUser" class="btn btn-danger mt-3">Cerrar sesion</button>
  </div>
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

</style>