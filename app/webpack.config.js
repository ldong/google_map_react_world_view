var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /.json?$/,
        loader: 'json'
      }
    ]
  },
  devServer: {
    contentBase: '.'
  },
  devtool: '#source-map'
};
