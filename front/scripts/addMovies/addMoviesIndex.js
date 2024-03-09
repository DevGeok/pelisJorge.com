import { emptyForm } from "./emptyForm.js";

const emptyFormButton = document.getElementById("emptyForm");
emptyFormButton.addEventListener("click",emptyForm); 

const addMovieButton = document.getElementById("addMovie");
addMovieButton.addEventListener("click", addMovie);

function addMovie(){
const newMovie = getMovieFormInfo();
const isDataComplete = verifyData(newMovie);

};


function verifyData(newMovie){
   const isDataComplete = Object.values(newMovie).every(value => {
    return value});
     
    if(isDataComplete === false){
      confirm("Hay campos sin llenar, todos los campos son obligatorios")
    };   
    return isDataComplete;
};

function getMovieFormInfo() {

    const movieTitle = document.getElementById("movieTitle").value;
    const movieYear = document.getElementById("movieYear").value;
    const movieDirector = document.getElementById("movieDirector").value;
    const movieDuration = document.getElementById("movieDuration").value;
    const movieGenre = document.getElementById("movieGenre").value;
    const movieRate = document.getElementById("movieTitle").value;
    const moviePoster = document.getElementById("moviePoster").value;

    const newMovie = {
       movieTitle,
       movieYear,
       movieDirector,
       movieDuration,
       movieGenre,
       movieRate,
       moviePoster,
   };
   
   return newMovie;
 };