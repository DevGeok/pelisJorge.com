import { getMovies } from "./getMovies.js"
import { renderNextPage } from "./renderNext.js";
import { renderlastPage } from "./renderLast.js";

document.addEventListener('DOMContentLoaded', getMovies)

const nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click",renderNextPage);

const lastPage = document.getElementById("lastPage");
lastPage.addEventListener("click",renderlastPage);



$(document).ready(function() {
    // Al hacer clic en el botón para abrir el modal
    $(document).on('click', '.video-btn', function() {
      var videoUrl = $(this).attr('data-thevideo'); // Asegúrate de usar attr en lugar de data si el atributo se establece dinámicamente
      $('#videoModal iframe').attr('src', videoUrl);
      $('#videoModal').modal('show');
    });
  
    // Cuando el modal se cierra, no importa cómo se cierra
    $('#videoModal').on('hidden.bs.modal', function() {
        $('#videoModal iframe').attr('src', ""); // Esto asegura que se detiene el video
    });
  });

  $('#video').attr('src', '');










