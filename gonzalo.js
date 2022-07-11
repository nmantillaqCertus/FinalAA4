
$(document).ready(function(){
    listaPokemons()
})
function obtenerPokemon(NombrePokemon2){

    let NombrePokemon = $("#idPokemon").val().trim();
    if (NombrePokemon2!=null && NombrePokemon2!=undefined){
        NombrePokemon = NombrePokemon2;
    };
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
function listaPokemons(){
    let liPokemon;

    var settings = {
        "async":false,
        "url": "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        liPokemon = response.results;
      });

    $("#listaPokemon").empty();
    console.log(liPokemon);
    liPokemon.forEach(p => {        
        $("#listaPokemon").append(`
            <li class="list-group-item" onclick="obtenerPokemon('${p.name}')">${p.name}</li>
        `)
    });
    
    
    
}