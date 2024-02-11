import { renderCards } from "../searchPage/renderCards.js";
import {moviesToHTML} from "./moviesToHTML.js";

export function getMovies(searchTitle, page) {
  const url = "https://students-api.2.us-1.fl0.io/movies";

  $.get(url).done((data) => {
       if (Array.isArray(data) === true) {
      renderCards(data, moviesToHTML);
    } else {
      console.error('Error obteniendo movies:', data.Error);
    }
  }).fail((jqXHR, textStatus, errorThrown) => {
    console.error(`Error al obtener las movies debido a un error: ${textStatus}`, errorThrown);
  });
}