import { getMovies } from "./getMovies.js";
import { page } from "./getMovies.js";

//renderNext.js
export function renderNextPage(event){
    event.preventDefault();
    page +=1;
    getMovies(page);
    lastPage.classList.remove("d-none");
  }