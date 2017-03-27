const path = require('path');

const devServer = {
    contentBase: path.join(__dirname, '../public'),
    hot: true,
    port: 9000
};

module.exports = devServer;