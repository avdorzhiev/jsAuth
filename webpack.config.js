const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: {
        // 'polyfills': './polyfills.ts',
        'app': './src/app.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        port: 4200,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js']
      },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'

            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader:  'html-loader'
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
          }),
          new MiniCssExtractPlugin({
            filename: "[name].css"
          }),
          new webpack.NoEmitOnErrorsPlugin(),
      ]
}