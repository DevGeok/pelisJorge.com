//  movieCardToHTML.js
export function movieCardToHTML(movie) {
    let movieHTML = document.createElement("section");
    movieHTML.classList.add("card", "cardSize", "shadow-lg", "p-1", "mx-2", "rounded", "bg-opaco-90", "my-4", "position-relative");
  
    let imdbLink = `https://www.imdb.com/title/${movie.imdbID}/`;
    movieHTML.innerHTML = `
      <h5 class="card-title text-center movieTitle">
        <a class="noSubrayado text-monospace" target="_blank" href=${imdbLink}>${movie.Title}</a>
      </h5>
      <div>
        <a target="_blank" href=${imdbLink}><img class="card-img-top" src="${movie.Poster}" alt="Poster de ${movie.Title}"/></a>
      </div>
      <ul class="card-body list-group p-1 m-1">
        <li class="list-group-item">Año: <strong>${movie.Year}</strong></li>
        <li class="list-group-item">Ver en IMBD: click <a target="_blank" href=${imdbLink}><strong>aquí</strong></a></li>
      </ul>
    `;
    return movieHTML;
  }