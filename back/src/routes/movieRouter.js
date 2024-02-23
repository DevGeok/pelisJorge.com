const express = require("express");
const movieControllers = require("../controllers/movieControllers");

const movieRouter = express.Router();

movieRouter.get("/",movieControllers.getMovies);

module.exports = movieRouter;