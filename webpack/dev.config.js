const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

const config = merge(baseConfig, {
  mode : 'development',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: [path.resolve(__dirname, '../public'), path.resolve(__dirname, '../public/static')],
    publicPath: path.resolve(__dirname, '/'),
    historyApiFallback: true,
    noInfo: false
  }
});

module.exports = config;
