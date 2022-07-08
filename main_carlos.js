function get_data() {
    var nombreInput = $('#pokemon_name').val();
    console.log(nombreInput);
    consulta(nombreInput);
}

var pokedex;
var datosCard = {};
function consulta(pokemon) {
var settings = {
    "url": "https://pokeapi.co/api/v2/pokemon/"+pokemon,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    pokedex = response;
  });
  console.log(pokedex);
  datosCard.nombre = pokedex.name;
  datosCard.imagen = pokedex.sprites.back_default;
  
  $('#nombre_pokemon').html(datosCard.nombre);
  $('#fondo').attr("src",datosCard.imagen)
  
  console.log(datosCard);


}
