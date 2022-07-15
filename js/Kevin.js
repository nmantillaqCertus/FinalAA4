$.when($.ready).then(function(){
    secciones();
    cargarPelis();
    cargarEstrenos();
    hacerelalbum();
    localCine();
    comida();
    bebida();
});

function secciones(){
    $("#idInicio").on("click", function(){
        $("#myCarousel").show();
        $("#seccion01").show();
        $("#seccion02").hide();
        $("#seccion03").hide();
        $("#seccion04").hide();
        $(window).scroll(function(){
            if($("#navegacion").offset().top > 571){
              $("#navegacion").addClass("bg-dark");
            }
            else{
              $("#navegacion").removeClass("bg-dark");
            }
          })
        // document.getElementById("navegacion").style.backgroundColor = "";
    });

    $("#idBotonPeliculas").on("click", function(){
        $("#myCarousel").hide();
        $("#seccion01").hide();
        $("#seccion02").show();
        $("#seccion03").hide();
        $("#seccion04").hide();
        // document.getElementById("navegacion").style.backgroundColor = "hsla(0, 0%, 0%)";
        $(window).scroll(function(){
            if($("#navegacion").offset().top > 63){
              $("#navegacion").addClass("bg-dark");
            }
            else{
              $("#navegacion").removeClass("bg-dark");
            }
          });
        $("#botonCartelera").on("click", function(){
            $("#catalogoPelis").show();
            $("#catalogoEstrenos").hide();
        });

        $("#botonEstrenos").on("click", function(){
            $("#catalogoPelis").hide();
            $("#catalogoEstrenos").show();
        })
    });

    $("#idBotonCine").on("click", function(){
        $("#myCarousel").hide();
        $("#seccion01").hide();
        $("#seccion02").hide();
        $("#seccion03").show();
        $("#seccion04").hide();
        $(window).scroll(function(){
            if($("#navegacion").offset().top > 63){
              $("#navegacion").addClass("bg-dark");
            }
            else{
              $("#navegacion").removeClass("bg-dark");
            }
          })
        // document.getElementById("navegacion").style.backgroundColor = "hsla(0, 0%, 0%)";
    });

    $("#idBotonDulces").on("click", function(){
        $("#myCarousel").hide();
        $("#seccion01").hide();
        $("#seccion02").hide();
        $("#seccion03").hide();
        $("#seccion04").show();
        $(window).scroll(function(){
            if($("#navegacion").offset().top > 63){
              $("#navegacion").addClass("bg-dark");
            }
            else{
              $("#navegacion").removeClass("bg-dark");
            }
          });

        // document.getElementById("navegacion").style.backgroundColor = "hsla(0, 0%, 0%)";

        $("#botonCanchita").on("click", function(){
            $("#canchita").show();
            $("#bebidas").hide();
        });
    
        $("#botonBebidas").on("click", function(){
            $("#canchita").hide();
            $("#bebidas").show();
        });
    }); 
}
function cargarPelis(){
    if(peliculasCartelera.length!=0){
        $("#catalogoPelis").empty();
        for(let p = 0; p < peliculasCartelera.length; p++){
            $("#catalogoPelis").append(`
            <div class="col">
                <div class="card shadow-sm">
                    <img class="img1" src="${peliculasCartelera[p].imgPelicula}" alt="">      
                  <div class="card-body">
                    <p class="card-text">${peliculasCartelera[p].namePelicula}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">${peliculasCartelera[p].descripcionPelicula}</small>
                    </div>
                  </div>
                </div>
              </div>`);
        }
    }
}
function cargarEstrenos(){
    if(peliculasProximos.length!=0){
        $("#catalogoEstrenos").empty();
        for(let p = 0; p < peliculasProximos.length; p++){
            $("#catalogoEstrenos").append(`
            <div class="col">
                <div class="card shadow-sm">
                    <img class="img1"src="${peliculasProximos[p].imgPelicula}" alt="">      
                  <div class="card-body">
                    <p class="card-text">${peliculasProximos[p].namePelicula}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">${peliculasProximos[p].descripcionPelicula}</small>
                    </div>
                  </div>
                </div>
              </div>`);
        }
    }
}
function hacerelalbum(){
    if(peliculasCartelera.length!=0){
        $("#columna1").empty();
        $("#columna1").append(`
        <img class="img1"src="${peliculasCartelera[5].imgPelicula}" alt="" >`);
        $("#columna4").empty();
        $("#columna4").append(`
        <img class="img4"src="${peliculasCartelera[1].imgPelicula}" alt="" >`);
        $("#columna5").empty();
        $("#columna5").append(`
        <img class="img5"src="${peliculasCartelera[2].imgPelicula}" alt="" >`);
        $("#columna5").append(`
        <img class="img5"src="${peliculasCartelera[0].imgPelicula}" alt="" >`); 
    }
}
function localCine(){
    if(cines.length!=0){
        $("#cines").empty();
        for(let c = 0; c < cines.length; c++){
            $("#cines").append(`
            <div class="col">
                <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>     
                  <div class="card-body">
                    <p class="card-text">${cines[c].nameLocal}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-muted">${cines[c].direccionLocal}</small>
                    </div>
                    <div><small class="text-muted">${cines[c].pro}</small></div>
                  </div>
                </div>
              </div>`)
        }
        }
}
function comida(){
    if(palomitas.length!=0){
        $("#canchita").empty();
        for(let p = 0; p < palomitas.length; p++){
            $("#canchita").append(`
            <div class="col">
                <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>     
                  <div class="card-body">
                    <p class="card-text">${palomitas[p].namePalomitas}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      
                      <small class="text-muted">${palomitas[p].descripcionPalomitas}</small>
                    </div>
                    <br>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                  </div>
                </div>
              </div>`)
        }
    }
}
function bebida(){
    if(bebidas.length!=0){
        $("#bebidas").empty();
        for(let b = 0; b < bebidas.length; b++){
            $("#bebidas").append(`
            <div class="col">
                <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>     
                  <div class="card-body">
                    <p class="card-text">${bebidas[b].nameGaseosa}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      
                      <small class="text-muted">${bebidas[b].descripcionGaseosa}</small>
                    </div>
                    <br>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                  </div>
                </div>
              </div>`);
        }
    }
}