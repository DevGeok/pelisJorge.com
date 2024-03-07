const tempData = require("../tempData");
const axios = require("axios");
const Movies = require("../models/Movies")

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

const url=  "https://students-api.2.us-1.fl0.io/moves";

async function getRepoFromApp(){
            let repository = [];
            try {
              const res = await axios(url);
              const newData = res.data;
              console.log(newData);
              newData.forEach((movie) => {
                const newMovie = new Movie(movie.title, movie.year, movie.director, movie.duration, movie.genre, movie.rate, movie.poster);
                repository.push(newMovie);
                if(newMovie.error !== undefined) throw Error("Algo pasa con tu App pecueca");
              });
                return repository;
            } catch (error) {
              throw Error ("Algo pasa con tu App pecueca en service");
            }
     }   

module.exports = {
    getRepoFromLocal: () => {  console.log("Hola");
        
            let repository = [];
           tempData.forEach((movie) => {
                const newMovie = new Movie(movie.title, zmovie.year, movie.director, movie.duration, movie.genre, movie.rate, movie.poster);
                repository.push(newMovie);
                if(newMovie.error !== undefined) throw Error("Faltan datos en esta movie, sorry 4U");
                });
                return repository;
        }, 
        
        getRepoFromApp,

        getRepoFromMongo: async () => {
          const movies = await Movies.find({title: { $regex: 'star', $options: 'i' }})

           return movies; 
    },

  }

