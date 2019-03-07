const express = require('express');
const fs = require('fs');

const {createUpwardServer, middleware} = require('@magento/upward-js');

// Launching UPWARD using the `createUpwardServer` function

// createUpwardServer({
//   upwardPath: './upward-spec.yml',
//   bindLocal: true,
//   logUrl: true,
//   port: 4000,
// });

// Launching UPWARD-js using the `middleware` object
//
const app = express();

middleware('/Users/calcaben/tmp/simple-upward/upward-spec.yml').then(
  handler => {
    app.use(handler);
    app.listen(4000);
  },
  error => {
    console.log('Failed!', error);
  },
);
