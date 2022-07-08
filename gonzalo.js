

function obtenerPokemon(){
    let NombrePokemon = $("#idPokemon").val().trim()
    if (NombrePokemon!=0){
        var settings = {
            "url": "https://pokeapi.co/api/v2/pokemon/" + NombrePokemon,
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            dibujarPokemon(response);
            //console.log(response);
            //objectPokemon = response
          });
    }
}
function dibujarPokemon(pokemon){
    let objectPokemon = pokemon
    $("#idDatos").empty();
    $("#idDatos").append(`
        <p>Nombre: ${objectPokemon.name}</p>
        <p>Experiencia:${objectPokemon.base_experience}</p>
        <p>Peso:${objectPokemon.height}</p>
    `);

    let movimientos = objectPokemon.moves
    $("#idHabilidades").empty();
    movimientos.forEach(m => {
        $("#idHabilidades").append(`
        <li>Habilidades: ${m.move.name}</li>
    `)
    })
    
    
}