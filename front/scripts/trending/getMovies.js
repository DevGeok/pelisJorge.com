import {renderCards } from "../searchPage/renderCards.js";
import {moviesToHTML} from "./moviesToHTML.js";

export let page = 1; // Variable de página definida globalmente
    
export function getMovies() {
  $.ajax({
      url: `https://api.themoviedb.org/3/trending/movie/week?language=es-US&page=${page}`,
      method: "GET",
      headers: {
          "accept": "application/json",
          "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI5MDJjOTNhM2EzZjc1MmNiYzQ1MzMzMDU1M2U4YyIsInN1YiI6IjY1Y2EyZWFjNDM1MDExMDE4M2ViMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYiUyh8VEHIV-uN868CbUPFSM_O3I3hOhRjMjtemKTE'
      },
      success: function(data) {

          renderCards(data.results,moviesToHTML);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.error(`Error al obtener las películas debido a: ${textStatus}`, errorThrown);
      }
  });
}