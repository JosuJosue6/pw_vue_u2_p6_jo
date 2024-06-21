<template>

    <h1>Selecciona el Pokemon correcto :3</h1>
    <PokemonImagen :idPokemon="649" :mostrarPokemon="true" />
    <PokemonOpciones :pokemons="arreglo" />

</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';

import PokemonOpciones from '../components/PokemonOpciones.vue';

import obtenerPokemonFachada from '../clientes/ClientePokemonAPI.js';

export default {

    data(){
        return{
            arreglo: [],
        }
    },

    components: {
        PokemonImagen,
        PokemonOpciones
    },

    methods: {
        async cargaInicial() {
            const vectorInicial = await obtenerPokemonFachada(4);
            this.arreglo = vectorInicial;
        }
    },
    /**Cada vez que se monte la pagina web o se sobre escriba este
     * metodo se sobreescribira
     */
    mounted(){
        /**Los metodos del ciclo de vida no necesitan un await */
        this.cargaInicial();
    }
}
</script>

<style></style>