<template>
    <div class="opciones-container">

        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id"
                @click="$emit('seleccionPokemon', { ident: pokemon.id, name: pokemon.nombre, test: 'Test', test2: test3 })">{{ pokemon.nombre
                }}</li>
        </ul>

    </div>
</template>

<script>
export default {

    data() {
        return {
            test3: 'Holi'
        }
    },
    props: {
        pokemons: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;

}

li {
    border: 2px solid rgb(0, 0, 0, 1);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    background: white;
    padding: 20px;

}

li:hover {
    background: rgb(0, 0, 0, 0.2);
}

.opciones-container {
    display: flex;
    justify-content: center;
}
</style>