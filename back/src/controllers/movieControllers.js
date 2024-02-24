const movieServices = require("../services/movieServices")

module.exports = {
    getMovies : (req, res) => {
      try {
        console.log("Esta mierda funcionó");
        res.status(200).json(movieServices.getMovies());        
      } catch (error) {
        res.status(500).statusMessage = 'Faltan datos en esta movie, sorry 4U';
        res.status(500).send();
      } 
    },
};