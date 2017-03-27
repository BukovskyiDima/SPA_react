const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    performance: { hints: false },
    module : {
        rules : [
            {
                test : /\.js/,
                loader : 'babel-loader',
                exclude: /(node_modules)/,
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        extensions: ['.js']
    }
};