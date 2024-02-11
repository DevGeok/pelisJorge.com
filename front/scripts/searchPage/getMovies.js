import { renderCards } from "./renderCards.js";

// Función dedicada a la validación de searchTitle
function isValidSearchTitle(searchTitle) {
  return searchTitle && typeof searchTitle === 'string' && searchTitle.trim().length > 0;
}

export function getMovies(searchTitle, page) {
  // Validación de searchTitle
  if (!isValidSearchTitle(searchTitle)) {
    console.error('Error: El título de búsqueda es inválido o está vacío.');
    return; // Salir de la función si searchTitle no es válido
  }

  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(searchTitle)}&apikey=95cfef3e&page=${page}`;

  $.get(url).done((data) => {
    if (data.Response === "True") {
      renderCards(data.Search);
    } else {
      console.error('Error obteniendo movies:', data.Error);
    }
  }).fail((jqXHR, textStatus, errorThrown) => {
    console.error(`Error al obtener las movies debido a un error: ${textStatus}`, errorThrown);
  });
}