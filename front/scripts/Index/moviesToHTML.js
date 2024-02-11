//movieToHtml.js

export function moviesToHTML(movies){
        let  movieHTML = document.createElement("section");
        movieHTML.classList.add ("card", "cardSize","shadow-lg", "p-3", "mx-4", "rounded","bg-opaco-90", "my-2"); 
        let generos = movies.genre.join(" ");
        movieHTML.innerHTML =      //Agrego template
        `
        <h5 class="card-title text-center">
        <a class="noSubrayado text-monospace" href="${movies.poster}">${movies.title}</a>
        </h5>
        <div>
        <img class="card-img-top" src="${movies.poster}" alt="El poster de ${movies.title}"/>
        </div>
         <ul class="card-body list-group p-1 m-1">
          <li class="list-group-item">Calificación: <strong>${movies.rate}</strong></li>
          <li class="list-group-item">Géneros: <strong>${generos}</strong></li>
          <li class="list-group-item">Duración: <strong>${movies.duration}</strong></li>
         </ul>
          `;
          return movieHTML;
    };