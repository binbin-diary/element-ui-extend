const path = require('path');
const base = require('./webpack.config.js')
const merge = require('webpack-merge')
const Components = require('../config/component.json');

module.exports = merge(base, {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  }
})