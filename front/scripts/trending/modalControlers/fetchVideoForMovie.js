import { tryFetchVideo } from "./tryFetchVideo.js";

export function fetchVideoForMovie(movieId) {
    const languages = ['es-MX', 'es-US', 'es-ES', ''];
    tryFetchVideo(movieId, languages, 0);
  }