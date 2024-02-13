export function moviesToHTML(movies) {
    let movieHTML = document.createElement("section");
    movieHTML.classList.add(
      "card",
      "cardSize",
      "shadow-lg",
      "p-1",
      "mx-2",
      "rounded",
      "bg-opaco-90",
      "my-4",
      "position-relative"
    );
  
    const poster = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movies.poster_path}`;
    const whereWatch = `https://www.themoviedb.org/movie/${movies.id}/watch?translate=false&locale=MX`;
  
    // Crear un div para la sinopsis que se mostrará al pasar el mouse
    let sinopsisDiv = `<div class="sinopsis">${movies.overview}</div>`;
  
    // Botón para ver el trailer que abrirá el modal
    let videoButtonHTML = `<button type="button" class="btn btn-link video-btn noSubrayado text-monospace" data-toggle="modal" data-target="#videoModal" data-thevideo=""><strong>CLICK AQUÍ</strong></button>`;
  
    // Comenzar a construir el HTML de la tarjeta
    movieHTML.innerHTML = `
      <h5 class="card-title text-center">
        <a class="noSubrayado text-monospace" target="_blank" href="${poster}">${movies.title}</a>
      </h5>
      <div class="image-container" style="position: relative;">
        <img class="card-img-top" src="${poster}" alt="El poster de ${movies.title}"/>
        ${sinopsisDiv}
      </div>
      <ul class="card-body list-group p-1 m-1">
        <li class="list-group-item">Calificación: <strong>${parseFloat(movies.vote_average.toFixed(1))}</strong></li>
        <li class="list-group-item">Lanzamiento: <strong>${movies.release_date}</strong></li>
        <li class="list-group-item">¿Dónde ver?: <a class="noSubrayado text-monospace" target="_blank" href="${whereWatch}"><strong> CLICK AQUÍ</strong></a></li>
        <li class="list-group-item">Ver el Trailer:${videoButtonHTML}</li>
      </ul>
    `;
  
    // Añadir el evento para mostrar/ocultar la sinopsis al pasar el mouse
    const imageContainer = movieHTML.querySelector(".image-container");
    const sinopsis = movieHTML.querySelector(".sinopsis");
    sinopsis.style.display = "none";
    imageContainer.addEventListener("click", function () {
      sinopsis.style.display = sinopsis.style.display === "none" ? "block" : "none";
    });
  
    // Realizar llamada AJAX para obtener el ID del video de YouTube
    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${movies.id}/videos?language=es-US`,
      method: "GET",
      headers: {
        "accept": "application/json",
        "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI5MDJjOTNhM2EzZjc1MmNiYzQ1MzMzMDU1M2U4YyIsInN1YiI6IjY1Y2EyZWFjNDM1MDExMDE4M2ViMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYiUyh8VEHIV-uN868CbUPFSM_O3I3hOhRjMjtemKTE'
  },
      success: function(data) {
        if (data && data.results && data.results.length > 0) {
          // Suponemos que el trailer está en la primera posición
          const youtubeId = data.results[0].key;
          const videoUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  
          // Encuentra el botón que acabas de crear y actualiza el atributo data-thevideo
          movieHTML.querySelector('.video-btn').setAttribute('data-thevideo', videoUrl);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error(`Error al obtener el video debido a: ${textStatus}`, errorThrown);
      }
    });
  
    return movieHTML;
  }
