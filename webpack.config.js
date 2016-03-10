'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  context: __dirname + '/src',
  entry: "./main.ts",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ]
}

module.exports = webpackConfig;
