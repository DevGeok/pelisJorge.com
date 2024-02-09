document.addEventListener('DOMContentLoaded',renderCards)

function renderCards(){
    $.get("https://www.omdbapi.com/?s=cars&apikey=95cfef3e", (data,status)=>{
    console.log(data);
    const cardsContainer = document.getElementById("cardsContainer");
    data.Search.forEach(element => {
        let  movieHTML = document.createElement("section");
        movieHTML.classList.add ("card", "cardSize","shadow-lg", "p-3", "mx-4", "rounded","bg-opaco-90", "my-2"); 
        //let generos = element.genre.join(" ");
        let imdbLink = `"https://www.imdb.com/title/${element.imdbID}/"`;
        movieHTML.innerHTML =      //Agrego template
        `
        <h5 class="card-title text-center movieTitle">
        <a class="noSubrayado text-monospace" target="_blank" href=${imdbLink}>${element.Title}</a>
        </h5>
        <div>
        <a target="_blank" href=${imdbLink}><img class="card-img-top" src="${element.Poster}" alt="${element.Title} Image broken"/></a>
        </div>
         <ul class="card-body list-group p-1 m-1">
          <li class="list-group-item">Año: <strong>"${element.Year}"</strong></li>
          <li class="list-group-item">Ver en IMBD: click <a target="_blank" href=${imdbLink}><strong>aquí</strong></a></li>
          </ul>
          `;
       cardsContainer.appendChild(movieHTML);      
    });
  })
}



















