<<<<<<< HEAD
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production';
  const dotenvFilename = isProduction ? '.env.production' : '.env.development';

  return {
    entry: './src/index.tsx',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: './dist',
=======
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = (env) => {
  const isProduction = env.NODE_ENV === "production";
  const dotenvFilename = isProduction ? ".env.production" : ".env.development";

  return {
    entry: "./src/index.tsx",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: "./dist",
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
<<<<<<< HEAD
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
=======
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
            },
          },
        },
        {
          test: /\.css$/,
<<<<<<< HEAD
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
=======
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
        },
      ],
    },
    resolve: {
<<<<<<< HEAD
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        crypto: require.resolve('crypto-browserify'),
=======
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      fallback: {
        crypto: require.resolve("crypto-browserify"),
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
<<<<<<< HEAD
        template: './src/index.html',
=======
        template: "./src/index.html",
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
      }),
      new Dotenv({
        path: dotenvFilename,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
      }),
    ],
    output: {
<<<<<<< HEAD
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
=======
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
>>>>>>> 1a6a9586f92c62ed2248a9d48cb2ea374325e3a8
      clean: true,
      publicPath: '/',
    },
  };
};
