export function getMovieFormInfo() {

    const title = document.getElementById("movieTitle").value;
    const year = document.getElementById("movieYear").value;
    const director = document.getElementById("movieDirector").value;
    const duration = document.getElementById("movieDuration").value;
    const genre = document.getElementById("movieGenre").value;
    const rate = document.getElementById("movieRate").value;
    const poster = document.getElementById("moviePoster").value;

    const newMovie = {
       title,
       year,
       director,
       duration,
       genre,
       rate,
       poster,
   };
   
   return newMovie;
 };