const axios = require('axios')
import { renderCards } from "../searchPage/renderCards.js";
import {moviesToHTML} from "./moviesToHTML.js";
import { tempData } from "./tempData.js";

export async function getMovies () {
   const url = "https://students-api.2.us-1.fl0.io/movies";
try {
  const response = await axios.get(url);
  if (Array.isArray(response.data) === true)
    renderCards(response.data, moviesToHTML);
} catch(error) {
  console.log("La api de soyHenry no funcionó por el error:", error.message); 
  renderCards(tempData, moviesToHTML)
}
}