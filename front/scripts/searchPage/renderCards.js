import { movieCardToHTML } from "./movieCardToHtml.js";

// renderCards.js
export function renderCards(movies) {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; // Limpiar contenedor existente
    movies.forEach(movie => {
      const movieCard = movieCardToHTML(movie);
      cardsContainer.appendChild(movieCard);
    });
  }