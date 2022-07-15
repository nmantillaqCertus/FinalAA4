$(document).ready(function(){
  listarPokemon(); 
})

function obtenerPokemon(val) {
  let NombrePokemon = $("#idPokemon").val().trim();
  if(val !="" & val != undefined){
    NombrePokemon = val;
  }
  if (NombrePokemon != "") {
    var settings = {
      "url": "https://pokeapi.co/api/v2/pokemon/" + NombrePokemon,
      "method": "GET",
      "async" : false,
      "timeout" : 0,
    };

    $.ajax(settings).done(function (response) {
      //objetPokemon = response;
      dibujarPokemon(response);
      console.log(response);
    });
  }
}

function dibujarPokemon(pokemon) {
  let objetPokemon = pokemon;
  $("#idDatos").empty();
  $("#idDatos").append(`
        <p>Nombre: ${objetPokemon.name}</p>
        <p>Experiencia: ${objetPokemon.base_experience}</p>  
        <p>Peso: ${objetPokemon.height}</p>  
          
    `);

  let movimientos = objetPokemon.moves;

  $("#idHabilidad").empty();
    movimientos.forEach((m) => {
        $("#idHabilidad").append(`
            <li>${m.move.name}</li>
        `)  
    });
}


function listarPokemon(){
    var settings = {
    "url" : "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    "method" : "GET",
    "async" : false,
    "timeout" : 0
    };

    $.ajax(settings).done(function(response){
     
    $("#idListPokemon").empty();
    response.results.forEach(p=>{
      let idAux = p.url.split("/")[6];
      $("#idListPokemon").append(`
          <li style="cursor:pointer" class="list-group-item" onclick="obtenerPokemon(${idAux})">${p.name}</li>`)
    }); 
  });
}
