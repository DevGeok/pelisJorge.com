import { getMovies } from "./getMovies.js";
import { page } from "./searchIndex.js";
import { searchTitle } from "./searchIndex.js";
import { lastPage } from "./searchIndex.js";

//renderLast.js
export function renderlastPage(event){
    page -=1;
    event.preventDefault();
    getMovies(searchTitle,page);
    if(page === 1) lastPage.classList.add("d-none");
  
  }