const tempData = require("../tempData");
const axios = require("axios");
const Movies = require("../models/Movies");

class Movie {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (typeof title !== "string" || typeof director !== "string" || typeof poster !== "string") return (this.error = "error");

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

const instanceMovies = (movies) => {
  let repository = [];
  movies.forEach((movie) => {
    const newMovie = new Movie(movie.title, movie.year, movie.director, movie.duration, movie.genre, movie.rate, movie.poster);
    repository.push(newMovie);
    if (newMovie.error !== undefined) throw Error("Algo pasa con tu App pecueca");
  });
  return repository;
}

const url = "https://students-api.2.us-1.fl0.io/movies";

async function getRepoFromApp() {
  try {
    const res = await axios(url);
    const newData = res.data;
    return instanceMovies(newData)
  } catch (error) {
    throw Error("Algo pasa con tu App pecueca en service");
  }
}

module.exports = {
  getRepoFromLocal: () => {
          return instanceMovies(tempData) 
    },

  getRepoFromApp,

  getRepoFromMongo: async () => {
    try {
      let repository = [];
      const movies = await Movies.find(/*{title: { $regex: 'star', $options: 'i' }}*/);
      return instanceMovies(movies)
    } catch (error) {
      throw Error(`Hubo problemas al tratar de obtener el Repo de la DB, ${error}`);
    }
  },
};

