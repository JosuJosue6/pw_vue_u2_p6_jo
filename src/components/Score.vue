<template>
    <div class="score-container">
        <p>Score: {{ puntaje }}</p>
        <p>Intentos: {{ intentos }}</p>
    </div>
</template>

<script>
export default {

    data() {
        return {
            puntaje: 0,
        }
    },

    props: {
        intentos: {
            type: Number,
            required: true,
        },

        acerto: {
            type: Boolean,
            required: true,
        }
    },

    watch: {
        acerto(newVal) {

            switch (this.intentos) {
                case 0:
                    this.puntaje = 0;
                    break;
                case 1:
                    this.puntaje = 10;
                    break;
                case 2:
                    this.puntaje = 8;
                    break;
                case 3:
                    this.puntaje = 5;
                    break;
                case 4:
                    this.puntaje = 3;
                    break;
                case 5:
                    this.puntaje = 2;
                    break;
                case 6:
                    this.puntaje = 1;
                    break;
                case 7:
                    this.puntaje = 0;
                    break;

                default:
                    break;
            }

        }
    }
}
</script>

<style scoped>
.score-container {
    font-size: 20px;
    border: 2px solid black;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;
    width: 400px;
    height: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>