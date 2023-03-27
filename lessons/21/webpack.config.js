const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      static: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 9090,
    },
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/index.html'), // template file
          filename: 'index.html', // output file
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({'process.env': JSON.stringify(process.env)})
      ],
    module: {
        rules: [
          // JavaScript
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.s?css$/i,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  sourceMap: false,
                  modules: false,
                },
              },
              'postcss-loader',
              'sass-loader',
            ]
          }
        ],
      },
}