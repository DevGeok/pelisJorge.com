const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
   title: String,
   year: Number,
   director: String,
   duration: String,
   genre: Array,
   rate: Number,
   poster: String,
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports= Movies;

