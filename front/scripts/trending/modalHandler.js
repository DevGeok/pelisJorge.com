import { clearVideoModalOnClose } from "./modalControlers/clearVideoModalOnClose.js";
import { fetchVideoForMovie } from "./modalControlers/fetchVideoForMovie.js";

export function setupModalHandler() {
  $(document).ready(function() {
    $(document).on('click', '.video-btn', function() {
      const movieId = $(this).data('movieid');
      fetchVideoForMovie(movieId);
    });

    clearVideoModalOnClose();
  });
}
