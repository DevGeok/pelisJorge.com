import { getMovies } from "./getMovies.js"
import { renderNextPage } from "./renderNext.js";
import { renderlastPage } from "./renderLast.js";

document.addEventListener('DOMContentLoaded', getMovies)

const nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click",renderNextPage);

const lastPage = document.getElementById("lastPage");
lastPage.addEventListener("click",renderlastPage);











