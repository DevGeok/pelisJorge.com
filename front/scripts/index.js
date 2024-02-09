document.addEventListener('DOMContentLoaded',renderCards)

function renderCards(){
    $.get("https://students-api.2.us-1.fl0.io/movies", (data,status)=>{
      
    const cardsContainer = document.getElementById("cardsContainer");
    data.forEach(element => {
        let  movieHTML = document.createElement("section");
        movieHTML.classList.add ("card", "cardSize","shadow-lg", "p-3", "mx-4", "rounded","bg-opaco-90", "my-2"); 
        let generos = element.genre.join(" ");
        movieHTML.innerHTML =      //Agrego template
        `
        <h5 class="card-title text-center">
        <a class="noSubrayado text-monospace" href="${element.poster}">${element.title}</a>
        </h5>
        <div>
        <img class="card-img-top" src="${element.poster}" alt="${element.title} Image broken"/>
        </div>
         <ul class="card-body list-group p-1 m-1">
          <li class="list-group-item">Calificación: <strong>${element.rate}</strong></li>
          <li class="list-group-item">Géneros: <strong>${generos}</strong></li>
          <li class="list-group-item">Duración: <strong>${element.duration}</strong></li>
         </ul>
          `;
       cardsContainer.appendChild(movieHTML);      
    });
  })
}



















