<template>
    <h1 v-if="!pokemonCorrecto">Cargando ...</h1>
    <div v-else>
        <h1>Selecciona el Pokemon correcto :3</h1>
        <div class="score">
            <Score :intentos="numIntentos" :acerto="seleccionCorrecta" />
        </div>
        <!--Cuando un elemento visual no esta listo para renderizarse es mejor controlarlo
    y no construirlo-->
        <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />
        <p v-show="seleccionCorrecta"> Has seleccionado el pokemon correcto, el pokemon es: {{ nombre }}</p>
        <div v-if="inicio">
            <p v-show="!seleccionCorrecta"> Has seleccionado el pokemon incorrecto, intenta de nuevo</p>
        </div>

        <div v-show="!seleccionCorrecta">
            <PokemonOpciones :pokemons="arreglo" @seleccionPokemon="revisarRespuesta($event)" />
        </div>

        <div v-show="seleccionCorrecta">
            <button @click="reiniciar()">Reiniciar</button>
        </div>

    </div>

</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';

import PokemonOpciones from '../components/PokemonOpciones.vue';

import obtenerPokemonFachada from '../clientes/ClientePokemonAPI.js';

import Score from '../components/Score.vue';

export default {

    data() {
        return {
            arreglo: [],
            pokemonCorrecto: null,
            mostrar: false,
            seleccionCorrecta: false,
            nombre: "",
            inicio: false,
            numIntentos: 0
        }
    },

    components: {
        PokemonImagen,
        PokemonOpciones,
        Score
    },

    methods: {
        async cargaInicial() {
            const vectorInicial = await obtenerPokemonFachada(7);
            this.arreglo = vectorInicial;

            const indice = Math.floor(Math.random() * 7);

            this.pokemonCorrecto = this.arreglo[indice];
        },

        revisarRespuesta(dato) {
            console.log("Se emitio un evento desde el HIJO");
            console.log(dato);
            this.numIntentos++;
            if (dato.ident == this.pokemonCorrecto.id) {
                this.mostrar = true;
                this.seleccionCorrecta = true;
                this.nombre = dato.name;
            } else {
                console.log("ERROR ...");
                this.inicio = true;
            }

        },

        reiniciar() {
            this.numIntentos = 0;
            this.seleccionCorrecta = false;
            this.inicio = false;
            this.mostrar = false;
            this.cargaInicial();
        }
    },
    /**Cada vez que se monte la pagina web o se sobre escriba este
     * metodo se sobreescribira
     */
    mounted() {
        /**Los metodos del ciclo de vida no necesitan un await 
         * Todo tiene un ciclo de vida a nivel de software, 
         * es importante cuando todo se monta en la pagina web
        */
        this.cargaInicial();

    }
}
</script>

<style scoped>
p {
    border: 3px solid black;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.score {
    display: flex;
    justify-content: center;
}

button {
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>