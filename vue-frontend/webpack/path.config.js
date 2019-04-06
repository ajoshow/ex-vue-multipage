const path = require('path');

const config = {
  entry: {
    'home/index' : path.resolve(__dirname, '../src/page/index.js'),
    'page1/index' : path.resolve(__dirname, '../src/page/page1.js')
  }
};

module.exports = config;
