<template>

  <div class="pokemon-container">
    <img v-show="mostrar"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/610.svg"
      alt="No se pudo mostrar la imagen">
    <img v-show="!mostrar" class="oculta-pokemon"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/610.svg"
      alt="No se pudo mostrar la imagen">
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false,
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

.pokemon-container{
  height: 350px;
}
</style>