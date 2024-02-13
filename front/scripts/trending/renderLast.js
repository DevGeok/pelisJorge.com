import { getMovies } from "./getMovies.js";
import { page } from "./getMovies.js";

//renderLast.js
export  function renderlastPage(event){
    page -=1;
    event.preventDefault();
    getMovies(page);
    if(page === 1) lastPage.classList.add("d-none");
  }  
