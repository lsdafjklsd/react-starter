var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  watch: true,
  entry: [
    './src/app'
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel?stage=0", "regenerator"]
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!cssnext-loader"
      }
    ]
  }
};
