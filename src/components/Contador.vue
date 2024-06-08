<template>
  <h2>{{ presentar }}</h2>
  <p>{{ numero }} <sup>2</sup>= {{ calcular }}</p>

  <div>
    <button @click="incrementar">+1</button>
    <button @click="disminuir">-1</button>
  </div>
</template>

<script>
//Las propiedades re
export default {
  //primera forma o forma basica de declarar un props
  //props: ["titulo","num"],

  props: {
    titulo: String,
    num: {
      type: Number,
      //Que siempre el atributo sera requerido
      required: false,
      default: 10,
      validator(value) {
        //toda la programacion que retorne un valor booleano
        return value >=0;
      },
    },
  },

  data() {
    //Opcion de Option API
    return {
      //proiedad reactiva como props con el this
      numero: this.num,
    };
  },

  methods: {
    calcularCuadrado() {
      console.log("Ingreso al metodo");
      //Recordar siempre poner la palabra this.
      return this.numero * this.numero;
    },

    calcularCuadrado2(num1, num2) {
      console.log("Ingreso al metodo");
      return num1 * num2;
    },

    incrementar() {
      this.numero++;
    },

    disminuir() {
      this.numero--;
    },
  },

  //Propiedades computadas (son similares a los metodos pero no son metodos)
  //como se maneja en cache es mucho mas eficiente como no es un metodo no recibira parametros

  computed: {
    calcular() {
      //cadad uno es una propiedad computada
      console.log("Ingreso a la propiedad computada");
      return this.numero * this.numero;
    },

    presentar() {
      if (this.titulo !== undefined) {
        return this.titulo;
      } else {
        return "texto que quiero";
      }
    },
  },
};
</script>

<style>
/*h2 {
  color: red;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 80px;
}*/

button {
  cursor: pointer;
  border-radius: 5px;
  border: 400px;
  margin: 10px;
  padding: 15px 40px;
  background: rgb(22, 74, 87);
  color: white;
  font-size: 20px;
}

button:hover {
  background: rgb(42, 150, 177);
}

p {
  font-size: 25px;
}

h2 {
  font-size: 30px;
}
</style>