const path = require('path');

const express = require('express');

const {createUpwardServer, middleware} = require('@magento/upward-js');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Launching UPWARD using the `createUpwardServer` function
//createUpwardServer({
//  upwardPath: './upward-spec.yml',
//  bindLocal: true,
//  logUrl: true,
//  port: 8080,
//});

// Launching UPWARD-js using the `middleware` object
const app = express();

middleware(path.join(__dirname, 'upward-spec.yml')).then(
  handler => {
    app.use(
      webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
      }),
    );
    app.use(require('webpack-hot-middleware')(compiler));
    app.use(handler);
    app.listen(8080);
  },
  error => {
    console.log('Failed!', error);
  },
);
