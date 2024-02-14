//searchTrailer.js
export function searchTrailer(arreglo) {
    let index = arreglo.findIndex(objeto => objeto.type === "Trailer");
    return index !== -1 ? index : 0;
  }
  