const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = $('#nombrePokemon');
const buscar =$('#buscarPokemon'); 
const borrar =$('#eliminarPokemon');
const appCard = $('#app');

buscar.on('click', insertarPokemon);

borrar.on('click', borrarPokemon);

function insertarPokemon(){
    window.fetch(`${baseUrl}${pokemon.val()}`) //Para hacer solicitudes a la API
    .then (respuesta =>{
        if (respuesta.status === 404){ 
            alert('Este pokemon no está disponible');
        }else{
            return respuesta.json();
        }
    })
    .then (respuestaJSON =>{
        const resultado = []

        for (let pokemonInfo in respuestaJSON){
            resultado.push([pokemonInfo , respuestaJSON[pokemonInfo]]);
        }
        console.table(resultado); //mostrar tabla con las propiedades
    })
}
function borrarPokemon(){
    console.log("presionaste la x");
}