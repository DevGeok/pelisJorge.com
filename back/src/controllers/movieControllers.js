const movieServices = require("../services/movieServices")


module.exports = {
  getMovies : async (req, res) => {
    try {
      res.status(200).json(await movieServices.getRepoFromMongo());
      console.log("Sí se pudo!");
    } catch (error) {
      res.status(500).statusMessage = `No se pudo obtener las movies, ${error}`;
      res.status(500).send();
    };
  }, 
  
  addMovieToRepo : async (req, res) => {
    try {
      const newMovie = req.body;
      const movieAdded = await movieServices.addMovieToRepo(newMovie);
      
      // Si todo salió correctamente enviar mensaje descriptivo al cliente con el status 201. 
      res.status(201).json({
        message: "Pelicula agregada exitosamente",
        movie: movieAdded
      });
    } catch (error) {
      res.status(500).statusMessage = `No se pudo agregar las movies, ${error}`;
      res.status(500).send();
    };
  },
};