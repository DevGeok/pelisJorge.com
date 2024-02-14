export function setupModalHandler() {
    $(document).ready(function() {
      // Al hacer clic en el botón para abrir el modal
      $(document).on('click', '.video-btn', function() {
        var movieId = $(this).data('movieid'); // Obtener el ID de la película desde el atributo de datos
  
        // Hacer la llamada AJAX aquí para obtener el ID del video de YouTube
        $.ajax({
          url: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=es-US`,
          method: "GET",
          headers: {
              "accept": "application/json",
              "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzI5MDJjOTNhM2EzZjc1MmNiYzQ1MzMzMDU1M2U4YyIsInN1YiI6IjY1Y2EyZWFjNDM1MDExMDE4M2ViMWYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYiUyh8VEHIV-uN868CbUPFSM_O3I3hOhRjMjtemKTE'
          },
          success: function(data) {
            if (data && data.results && data.results.length > 0) {
                console.log("Hola mundo");
              const youtubeId = data.results[buscaTrailer(data.results)].key;
              const videoUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
              // Establecer la URL en el iframe dentro del modal
              $('#videoModal iframe').attr('src', videoUrl);
              // Mostrar el modal
              $('#videoModal').modal('show');
            }
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.error(`Error al obtener el video debido a: ${textStatus}`, errorThrown);
          }
        });
      });
  
      // Cuando el modal se cierra
      $('#videoModal').on('hidden.bs.modal', function() {
        $('#videoModal iframe').attr('src', '');
      });
    });
  }


function buscaTrailer(arreglo) {
    let index =  arreglo.findIndex(objeto => objeto.type === "Trailer");
    console.log("Este es el index", index);
    if (index !== -1) return index; else return 0;
  }