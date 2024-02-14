import { makeVideoRequest } from "./makeVideoRequest.js";

export function tryFetchVideo(movieId, languages, index) {
    if (index >= languages.length) {
      console.log("No se encontraron videos en ningún idioma.");
      return;
    }
  
    const language = languages[index];
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos${language ? '?language=' + language : ''}`;
    makeVideoRequest(url, movieId, languages, index);
  }