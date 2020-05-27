const path = require('path');
const base = require('./webpack.config.js')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'index.js',
    chunkFilename: '[id].js',
    library: 'hl-vue-ui',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})