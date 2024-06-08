<template>
<img src="./assets/logo.png" alt="No esta la imagen :c">
  <Contador titulo="Estudiante" :num="-1"/><!--Cada uno es una isntancia diferente e independiente-->
  <Contador titulo="Profesor" />
  <!--v-bind Esta directiva evalua lo que esta dentro de las ""
  como una sentencia JS (codificacion JS)
  El shortcut es :-->
  <Contador :num="calcularValor()"/>
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },

  methods: {
    calcularValor(){
      return 10+2;
    }
  }
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
