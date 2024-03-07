const movieServices = require("../services/movieServices")

async function getMovies(req, res) {
  try {
    res.status(200).json(await movieServices.getRepoFromMongo());
    console.log("Sí se pudo!");
  } catch (error) {
    res.status(500).statusMessage = "No se pudo obtener las movies";
    res.status(500).send();
  } 
}

module.exports = {
  getMovies
};