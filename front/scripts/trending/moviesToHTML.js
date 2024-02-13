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
  const whereWatch = `https://www.themoviedb.org/movie/${movies.id}/watch?translate=false&locale=MX`

  // Crear un div para la sinopsis que se mostrará al pasar el mouse
  let sinopsisDiv = `<div class="sinopsis">${movies.overview}</div>`;

  movieHTML.innerHTML = `
      <h5 class="card-title text-center">
          <a class="noSubrayado text-monospace" target="_blank" href="${poster}">${movies.title}</a>
      </h5>
      <div class="image-container" style="position: relative;">
          <img class="card-img-top" src="${poster}" alt="El poster de ${
    movies.title
  }"/>
          ${sinopsisDiv}
      </div>
      <ul class="card-body list-group p-1 m-1">
          <li class="list-group-item">Calificación: <strong>${parseFloat(movies.vote_average.toFixed(1))}</strong></li>
          <li class="list-group-item">Lanzamiento: <strong>${movies.release_date}</strong></li>
          <li class="list-group-item">¿Dónde ver?: <a class="noSubrayado text-monospace" target="_blank" href="${whereWatch}"><strong> CLICK AQUÍ</strong></a></li>
      </ul>
      `;

  // Añadir el evento para mostrar/ocultar la sinopsis al pasar el mouse
  const imageContainer = movieHTML.querySelector(".image-container");

  // Asegurarse de que la propiedad display de la sinopsis se establece en 'none' inicialmente
  const sinopsis = movieHTML.querySelector(".sinopsis");
  sinopsis.style.display = "none";

  imageContainer.addEventListener("click", function () {
    // Alternar la visualización de la sinopsis con cada clic
    sinopsis.style.display =
      sinopsis.style.display === "none" ? "block" : "none";
  });

  return movieHTML;
}
