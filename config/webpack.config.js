const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServer = require('./devServer');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/app.js')
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  performance: {hints: false},
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {loader: "sass-loader"}
        ]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '../src'),
        enforce: 'pre'
      }
    ]
  },
  resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      fileName: 'vendor.js',
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      title: 'Todo list',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
          eslint: {
              configFile: path.resolve(__dirname, '../src/.eslintrc.json')
          }
      }
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  devServer
};