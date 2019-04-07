const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge(baseConfig, {
  mode : 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
});

module.exports = config;
