import { tryFetchVideo } from "./tryFetchVideo.js";
import {showVideoModal} from "./showVideoModal.js";

//handleVideoData.js
export function handleVideoData(data, movieId, languages, index) {
    if (data && data.results && data.results.length > 0) {
      console.log(`Video encontrado con idioma: ${languages[index] || 'sin especificar'}`);
      showVideoModal(data.results);
    } else {
      tryFetchVideo(movieId, languages, index + 1);
    }
  }