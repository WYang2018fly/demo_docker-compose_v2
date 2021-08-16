const webpack = require('webpack');
const externalsDep = require('externals-dependencies');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  node: {
    // console: true,
    // global: false,
    // process: true,
    // Buffer: true,
    __filename: false,
    __dirname: false,
    // setImmediate: true,
    // path: true
  },
  externals: [externalsDep()], // in order to ignore all modules in node_modules
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./config", to: "config" },
      ],
    }),
  ],
}