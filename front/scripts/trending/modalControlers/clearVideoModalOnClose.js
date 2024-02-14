//clearVideoModalOnClose.js
export function clearVideoModalOnClose() {
    $('#videoModal').on('hidden.bs.modal', function() {
      $('#videoModal iframe').attr('src', '');
    });
  }
  