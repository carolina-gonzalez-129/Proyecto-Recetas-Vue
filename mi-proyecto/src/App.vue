<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>

body {
  padding-top: 56px;
  background: linear-gradient(135deg, #f8c1dc, #e4a3ff);
  font-family: 'Poppins', sans-serif;
  color: #4a235a;
  margin: 0;
}

h1, h2, h3 {
  color: #b41f76;
  text-align: center;
  font-weight: bold;
}


a {
  color: #d63384;
  text-decoration: none;
}

a:hover {
  color: #f06292;
  text-decoration: underline;
}

button {
  background-color: #d45ab7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e86bbd;
}

input[type="text"], textarea {
  border: 2px solid #e4a3ff;
  padding: 10px;
  border-radius: 10px;
  background-color: #fbeafc;
  color: #4a235a;
  width: 100%;
  box-sizing: border-box;
}

input[type="text"]:focus, textarea:focus {
  border-color: #d45ab7;
  outline: none;
}


.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

</style>



