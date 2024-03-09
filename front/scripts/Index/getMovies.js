const axios = require('axios')
import { renderCards } from "../searchPage/renderCards.js";
import {moviesToHTML} from "./moviesToHTML.js";
import { tempData } from "./tempData.js";

export async function getMovies () {
   const url = "http://localhost:3000/movies";
try {
  const response = await axios.get(url);
  if (Array.isArray(response.data) === true)
    renderCards(response.data, moviesToHTML);
} catch(error) {
  console.log("La api no funcionó por el error:", error.message); 
  renderCards(tempData, moviesToHTML)
}
}