const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Single entry point
  output: {
    filename: 'bundle.js', // Single output file
    path: path.resolve(__dirname, 'public'),
    clean: true, // Clean the output directory before emit
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  stats: 'verbose',
  performance: {
    maxAssetSize: 250000, // 250KB
    maxEntrypointSize: 250000,
  },
};
