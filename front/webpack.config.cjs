const path = require('path');

module.exports = {
  // Define múltiples puntos de entrada
  entry: {
    index: './scripts/index/index.js', // El punto de entrada para la página principal
    search: './scripts/searchPage/searchIndex.js',  // El punto de entrada para la página de búsqueda
    trending: './scripts/trending/trendingIndex.js' // El punto de entrada para la página de trending
  },
  output: {
    path: path.resolve(__dirname, 'public'), // La carpeta de salida para todos los bundles
    filename: '[name].js' // Usar la sustitución de nombre para generar nombres de archivo basados en los nombres de entrada
  },
  // ... el resto de tu configuración de Webpack
};