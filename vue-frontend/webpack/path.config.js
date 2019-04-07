const path = require('path');

const config = {
  entry: {
    'home/bundle' : path.resolve(__dirname, '../src/page/index.js'),
    'page1/bundle' : path.resolve(__dirname, '../src/page/page1.js')
  }
};

module.exports = config;
