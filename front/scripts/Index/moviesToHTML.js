//movieToHtml.js
let id = 0;
export function moviesToHTML(movies){
      let movieHTML = document.createElement("section");
      movieHTML.classList.add("card", "cardSize", "shadow-lg", "p-1", "mx-2", "rounded", "bg-opaco-90", "my-4", "position-relative");
      let generos = movies.genre.join(", "); // Cambio hecho aquí para separar los géneros por comas.
      movieHTML.id= `ancla${id}`
      movieHTML.innerHTML = 
      `
      <h5 class="card-title text-center" id="">
      <a class="noSubrayado text-monospace" href="#ancla${id++}">${movies.title}</a>
      </h5>
      <div>
      <img class="card-img-top" src="${movies.poster}" alt="El poster de ${movies.title}"/>
      </div>
      <ul class="card-body list-group p-1 m-1">
          <li class="list-group-item">Año: <strong>${movies.year}</strong></li>
          <li class="list-group-item">Director: <strong>${movies.director}</strong></li>
          <li class="list-group-item">Calificación: <strong>${movies.rate}</strong></li>
          <li class="list-group-item">Géneros: <strong>${generos}</strong></li>
          <li class="list-group-item">Duración: <strong>${movies.duration}</strong></li>
      </ul>
      `;
      return movieHTML;
  };