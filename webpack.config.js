const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.js', 'webpack-hot-middleware/client']
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new ManifestPlugin(), new webpack.HotModuleReplacementPlugin()],
};
