// searchMovies.js

import {searchTitle} from "./searchIndex.js";
import {page} from "./searchIndex.js";
import {lastPage} from "./searchIndex.js";
import { getMovies } from "./getMovies.js";

export function searchMovies(event){
    event.preventDefault();
    searchTitle = document.querySelector('[name="titleWanted"]').value 
    if (searchTitle !=="") nextPage.classList.remove("d-none");
    getMovies(searchTitle,page);
    lastPage.classList.add("d-none");
  }