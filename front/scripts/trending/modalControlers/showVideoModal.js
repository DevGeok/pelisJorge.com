import { searchTrailer } from "./searchTrailer.js";

//showVideoModal.js
export function showVideoModal(results) {
    const youtubeId = results[searchTrailer(results)].key;
    const videoUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    $('#videoModal iframe').attr('src', videoUrl);
    $('#videoModal').modal('show');
  }