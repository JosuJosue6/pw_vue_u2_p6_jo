<template>
    <h1 v-if="!pokemonCorrecto">Cargando ...</h1>
    <div v-else>
        <h1>Selecciona el Pokemon correcto :3</h1>
        <!--Cuando un elemento visual no esta listo para renderizarse es mejor controlarlo
    y no construirlo-->
        <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />
        <p v-show="seleccionCorrecta"> Has seleccionado el pokemon correcto, el pokemon es: {{nombre  }}</p>
        <div v-if="inicio">
            <p v-show="!seleccionCorrecta"> Has seleccionado el pokemon incorrecto, intenta de nuevo</p>
        </div>
        
        <div v-show="!seleccionCorrecta">
            <PokemonOpciones :pokemons="arreglo" @seleccionPokemon="revisarRespuesta($event)" />
        </div>
        
        
    </div>

</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';

import PokemonOpciones from '../components/PokemonOpciones.vue';

import obtenerPokemonFachada from '../clientes/ClientePokemonAPI.js';

export default {

    data() {
        return {
            arreglo: [],
            pokemonCorrecto: null,
            mostrar: false,
            seleccionCorrecta: false,
            nombre: "",
            inicio: false
        }
    },

    components: {
        PokemonImagen,
        PokemonOpciones
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
            if (dato.ident == this.pokemonCorrecto.id) {
                this.mostrar = true;
                this.seleccionCorrecta = true;
                this.nombre = dato.name;
            }else{
                console.log("ERROR ...");
                this.inicio = true;
            }

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

<style>
p {
    border: 3px solid black ;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>