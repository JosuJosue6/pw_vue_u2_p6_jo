const obtenerVectorNumerico = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerPokemon = async (longitud) => {
    const vectorNumerico = obtenerVectorNumerico(longitud);
    const vectorFinal = [];
    for (let i = 0; i < longitud; i++) {
        vectorFinal[i] = await construirPokemon(vectorNumerico[i]);
    }
    return vectorFinal;
}

async function construirPokemon(identificador) {

    const data = await consumirAPI(identificador);

    const obj = {
        nombre: data.name,
        //id: identificador
        id: data.id
    }
    return obj;
}

const consumirAPI = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(p => p.json());
}
/**Exportar funcionalidades en archivos externos
 * Default
 * Solo se exporta una unica funcionalidad.
 * 
 * Todos las funciones que yo quiera
 * Para esto es necesario una fachada, que usa el mismo nombre del metodo a esportar
 */

const obtenerPokemonFachada = async (longitud) => {
    return await obtenerPokemon(longitud);
}

export default obtenerPokemonFachada;