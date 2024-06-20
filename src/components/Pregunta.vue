<template>
  <img v-if="img"
    v-bind:src="img"
    alt="No se pudo"
  />
  <div class="oscuro"></div>
  <br />
  <div class="pregunta-container">
    <input
      v-model="pregunta"
      type="text"
      placeholder="Hazme una pregunta ..."
    />
    <p>Recuerda terminar la pregunta con un signo de interrogación (?)</p>
    <div v-show="mensaje" class="respuesta">
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta === "yes"? "SI!":"NO!" }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      img: null,
      mensaje: false
    };
  },
  /**observador debe crearse como un metodo, que tiene el mismo nombre de la
   * propiedad reactiva que quiero observar, tiene dos elementos o datos basicos
   * en el primer argumento va el value valor actual y el segundo, oldValue que es el valor antiguo
   */
  watch: {
    pregunta(value, oldValue) {
      this.mensaje = false;
      if (!value.includes("?")) {
        return;
      }
      //Consumir el API para obtener la respuesta
      //Para consumir se usa un concepto de un cliente.
      this.obtenerRespuesta();
      this.mensaje = true;
    },
  },

  methods: {
    async obtenerRespuesta() {
      this.respuesta = "Pensando ..."
      //toda pag o servicio web maneja un verbo http (tipo de request)
      //Vue para consumo de API's, fetch Solo sirve para hacer peticiones de tipo Get
      //Solo ciertas Apis responden con Get se puede hacer con el navegador
      //recibe como argumento la URL del API
      //el metodo then hace referencia a la respuesta y usa un .json() como metodo
      //Cuando se requiere una respuesta del API
      //await espera que el API responda
      //Siempre que mi metodo tenga un await en el cuerpo automaticamente debo declarar este metodo como ASINCRONO
      const data = await fetch("https://yesno.wtf/api").then((resp) =>
        resp.json()
      );

      const {answer,forced,image} = data;
      console.log(answer);
      this.respuesta = answer;
      this.img = image;
      return data;
    },
    //Cuando tengo un metodo construido que llama un metodo asincrono necesito llamar al metodo await
    /*async prueba (){
        const data2 = await this.obtenerRespuesta();
      }*/

     //Existe una excepcion en Option APi que (ciclo de vida de los componentes)cada ves que llamo a los observadores 
     //o a los metodos del ciclo de vida no hace falta que los llame con el await llamamos al metodo asincrono 
  },
};
</script>

<style scoped>
/*Se garantiza que este estilo se aplique al componente que deseamos*/
/*Que la imagen oupe toda la pag web*/
img,
.oscuro {
  max-height: 100%;
  height: 100vh; /**unidad que se necesita */
  max-width: 100%;
  width: 100vw;
  /**Este estilo quita o irrespeta la distribucion uno despues de otro
   */
  position: fixed;
  top: 0px;
  left: 0px;
}

.oscuro {
  background: rgb(0, 0, 0, 0.5);
  /**0.0 transparente y 1.0 es opaco */
}

.pregunta-container {
  /**Se soluciona el tema de que estaba atras de la imagen  */
  position: relative;
}

input {
  margin-top: 35%;
  width: 260px;
  padding: 15px 30px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
}

input:focus {
  outline: none;
}

h1,
p,
h2 {
  color: white;
}

p {
  font-size: 25px;
  margin-top: 20px;
}

h1 {
  font-size: 90px;
}

.respuesta {
  margin-top: 100px;
}
/**watch observador que mira las propiedades reactivas evaluando los cambios que hayan en la propiedad reactiva */


</style>