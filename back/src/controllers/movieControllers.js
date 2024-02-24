const movieServices = require("../services/movieServices")
const {getRepoFromLocal, getRepoFromApp } = require("../services/movieServices")

async function getMovies(req, res) {
  try {
    res.status(200).json(await getRepoFromApp());    
  } catch (error) {
    res.status(500).statusMessage = error.message;
    res.status(500).send({message:"HolaMundo"});
  } 
}

module.exports = {
  getMovies
};