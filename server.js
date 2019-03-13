const {createUpwardServer} = require('@magento/upward-js');

// Launching UPWARD using the `createUpwardServer` function
createUpwardServer({
  upwardPath: './upward-spec.yml',
  bindLocal: true,
  logUrl: true,
  port: 8080,
});
