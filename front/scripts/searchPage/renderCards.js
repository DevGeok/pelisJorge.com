// renderCards.js
export function renderCards(movies,movieCardToHTML) {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; // Limpiar contenedor existente
    movies.reverse().forEach(movie => {
      const movieCard = movieCardToHTML(movie);
      cardsContainer.appendChild(movieCard);
    });
  }