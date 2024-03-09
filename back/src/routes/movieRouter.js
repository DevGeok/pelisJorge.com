const express = require("express");
const movieControllers = require("../controllers/movieControllers");

const movieRouter = express.Router();

movieRouter.get("/",movieControllers.getMovies);

movieRouter.post("/", movieControllers.addMovieToRepo);

module.exports = movieRouter;