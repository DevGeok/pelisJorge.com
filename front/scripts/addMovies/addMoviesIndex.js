import { addMovie } from "./addMovie.js";
import { emptyForm } from "./emptyForm.js";
import { mockFormInfo } from "./mockIndex.js";



const emptyFormButton = document.getElementById("emptyForm");
emptyFormButton.addEventListener("click",emptyForm); 

const addMovieButton = document.getElementById("addMovie");
addMovieButton.addEventListener("click", addMovie);

const mockInfoButton = document.getElementById("mockInfo");
mockInfoButton.addEventListener("click", mockFormInfo);




