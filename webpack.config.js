'use strict';

var webpack = require('webpack');
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
        // loader: 'ng-annotate!ts',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        // loader: "html",
        // currently need minimize=false for beta.8 so that the UglifyJsPlugin works for prod
        loader: "html?minimize=false",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.DefinePlugin({
      PRODUCTION: process.env.NODE_ENV === 'production'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  var c = webpackConfig;
  c.output.path = __dirname + '/dist';
  c.output.filename = "assets/js/[hash].bundle.js";
  c.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }));
  c.plugins.push(new webpack.optimize.UglifyJsPlugin({
    // currently need mangle: false for beta.8 so that the UglifyJsPlugin works for prod
    mangle: false,
    compress: {
      warnings: false
    }
  }));
}

module.exports = webpackConfig;
