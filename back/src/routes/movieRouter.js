const express = require("express");
const movieControllers = require("../controllers/movieControllers");
const { addMovieMiddleware } = require("../middlerwares/moviesMiddlewares");

const movieRouter = express.Router();

movieRouter.get("/",movieControllers.getMovies);

movieRouter.post("/", addMovieMiddleware, movieControllers.addMovieToRepo);

module.exports = movieRouter;