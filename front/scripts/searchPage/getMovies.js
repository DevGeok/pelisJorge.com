const axios = require('axios')
import { renderCards } from "./renderCards.js";
import { movieCardToHTML } from "./movieCardToHtml.js";

// Función dedicada a la validación de searchTitle
function isValidSearchTitle(searchTitle) {
  return searchTitle && typeof searchTitle === 'string' && searchTitle.trim().length > 0;
}

export async function getMovies(searchTitle, page) {
  // Validación de searchTitle
  if (!isValidSearchTitle(searchTitle)) {
    console.error('Error: El título de búsqueda es inválido o está vacío.');
    return; // Salir de la función si searchTitle no es válido
  }


  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTitle)}&apikey=95cfef3e&page=${page}`;

  try {
    const response = await axios(url);
    renderCards(response.data.Search, movieCardToHTML);
  } catch (error) {
    console.error('Error obteniendo movies:',error.message);
  }
}