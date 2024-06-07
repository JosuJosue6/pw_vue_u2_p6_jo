<template>
<img src="./assets/logo.png" alt="No esta la imagen :c">
  <Contador titulo="Estudiante"/><!--Cada uno es una isntancia diferente e independiente-->
  <Contador titulo="Profesor"/>
  <Contador/>
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
