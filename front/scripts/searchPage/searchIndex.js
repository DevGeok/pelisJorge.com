//search.js

import { searchMovies } from "./searchMovies.js";
import { renderNextPage } from "./renderNextPage.js";
import { renderlastPage } from "./renderLastPage.js";

export const nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click",renderNextPage);

export const lastPage = document.getElementById("lastPage");
lastPage.addEventListener("click",renderlastPage);

export let searchTitle = "";
export let page=1;

const button = document.getElementById("searchButton");
button.addEventListener("click",searchMovies);

















