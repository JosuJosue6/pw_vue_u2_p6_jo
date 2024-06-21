<template>

  <div class="pokemon-container">
    <img v-show="mostrarPokemon" :src="imagenFuente" alt="No se pudo mostrar la imagen">
    <img v-show="!mostrarPokemon" class="oculta-pokemon" :src="imagenFuente" alt="No se pudo mostrar la imagen">
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false,
    }
  },

  props: {
    idPokemon: {
      type: Number,
      required: true,
    },
    mostrarPokemon: {
      type: Boolean,
      required: true,
    }
  },

  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
    }
  }
}
</script>

<style scoped>
.oculta-pokemon {
  filter: brightness(0);
}

img {
  height: 300px;
  width: 300px;
  position: absolute;
  right: 40%;
}

.pokemon-container {
  height: 350px;
}
</style>