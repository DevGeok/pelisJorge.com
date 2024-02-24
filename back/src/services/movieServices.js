const tempData = require("../tempData");

class Movie{
   constructor(title, year, director, duration, genre, rate, poster){
    if(typeof title !== "string" || typeof director !== "string" || typeof poster !== "string")
    return  this.error = "error";
    
    
    this.title = title 
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate; 
    this.poster = poster;
  }

};



module.exports = {
    getMovies: () => {
        
            let repository = [];
            tempData.forEach((movie) => {
                const newMovie = new Movie(movie.title, movie.year, movie.director, movie.duration, movie.genre, movie.rate, movie.poster);
                repository.push(newMovie);
                if(newMovie.error !== undefined) throw Error("Faltan datos en esta movie, sorry 4U");
                });
                return repository;
        },     
    }



