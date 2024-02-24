const path = require('path');

module.exports = {
  entry: {
    index: './scripts/index/index.js',
    search: './scripts/searchPage/searchIndex.js',
    trending: './scripts/trending/trendingIndex.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  //mode: "development", // Change to "production" when ready to deploy
  devtool: 'eval-source-map',
  // ... the rest of your webpack configuration
};
