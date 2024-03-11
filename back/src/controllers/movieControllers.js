const movieServices = require("../services/movieServices");
const {catchAsync} = require("../utils/catchAsync");


const getMovies = async (req, res) => {
  res.status(200).send(await movieServices.getRepoFromMongo());

}; 

const addMovieToRepo = async (req, res) => {

  console.log("Entre");
  const newMovie = req.body;
  const movieAdded = await movieServices.addMovieToRepo(newMovie);
  
  // Si todo salió correctamente enviar mensaje descriptivo al cliente con el status 201. 
  res.status(201).json({
    message: `Pelicula "${newMovie.title}" agregada exitosamente`,
    movie: movieAdded
  });
};

module.exports = {
  
  getMovies : catchAsync(getMovies),
  
  addMovieToRepo: catchAsync(addMovieToRepo),

};