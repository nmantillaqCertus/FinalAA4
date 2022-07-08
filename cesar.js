




function obtenerPokemon(){

    let NombrePokemon = $("#idPokemon").val().trim();

    if( NombrePokemon != ""){
        var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/"+NombrePokemon,
        "method": "GET",
        "timeout": 0,
        };

        $.ajax(settings).done(function (response) {

            //objetPokemon = response;
            dibujarPokemon(response);
            console.log(response);

        });
    }
}


function dibujarPokemon(pokemon){
    let objetPokemon = pokemon;
    $("#idDatos").empty();
    $("#idDatos").append(`
        <p>Nombre: ${objetPokemon.name}</p>
        <p>Experiencia: ${objetPokemon.base_experience}</p>  
        <p>Peso: ${objetPokemon.height}</p>  
          
    `);

    let movimientos = objetPokemon.moves;

    $("#idHabilidad").empty();
    movimientos.forEach(m => {
        $("#idHabilidad").append(`
            <li>${m.move.name}</li>
        `)
    });
      
}