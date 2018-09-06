const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
});

module.exports = {
    devtool: 'sourcemap',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './build.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },

            {
                test: /\.s?css$/,
                use: [
                    "style-loader",

                    "css-loader",

                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: '[id].css',
            publicPath: '/dist'
        }),
        htmlPlugin
    ],
}