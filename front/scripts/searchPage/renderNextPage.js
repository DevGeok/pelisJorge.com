import { getMovies } from "./getMovies.js";
import { page } from "./searchIndex.js";
import { searchTitle } from "./searchIndex.js";
import { lastPage } from "./searchIndex.js";

//renderNext.js
export function renderNextPage(event){
    event.preventDefault();
    page +=1;
    getMovies(searchTitle,page);
    lastPage.classList.remove("d-none");
  }