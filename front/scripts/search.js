//document.addEventListener('DOMContentLoaded',renderCards)

const button = document.getElementById("searchButton");
button.addEventListener("click",handler);

const nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click",renderNextPage);

const lastPage = document.getElementById("lastPage");
lastPage.addEventListener("click",renderlastPage);

let searchTitle = "";
let page=1;



function handler(event){
  event.preventDefault();
  searchTitle = document.querySelector('[name="titleWanted"]').value
  if (searchTitle !=="") nextPage.classList.remove("d-none");
  renderCards(searchTitle)
  console.log(searchTitle);
  document.querySelector('[name="titleWanted"]').value="";
  const form = document.getElementById("searchForm");

}


function renderNextPage(event){
  event.preventDefault();
  page +=1;
  renderCards(searchTitle,page);
  lastPage.classList.remove("d-none");
}

function renderlastPage(event){
  page -=1;
  event.preventDefault();
  renderCards(searchTitle,page);
  if(page === 1) lastPage.classList.add("d-none");

}

function renderCards(searchTitle,page){
    $.get(`https://www.omdbapi.com/?s=${searchTitle}&apikey=95cfef3e&page=${page}`, (data,status)=>{
    console.log(data);
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML="";
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
          <li class="list-group-item">Año: <strong>${element.Year}</strong></li>
          <li class="list-group-item">Ver en IMBD: click <a target="_blank" href=${imdbLink}><strong>aquí</strong></a></li>
          </ul>
          `;
       cardsContainer.appendChild(movieHTML);      
    });
  })
}



















