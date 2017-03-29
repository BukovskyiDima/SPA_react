const path = require('path');

const devServer = {
  contentBase: path.join(__dirname, '../public'),
  watchContentBase: true,
  hot: true,
  port: 9000,
  open: true,
  publicPath: '/',
  historyApiFallback: true
};

module.exports = devServer;