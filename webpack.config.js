const path = require('path');
const { createDefaultConfig } = require('@open-wc/building-webpack');

// const { createCompatibilityConfig } = require('@open-wc/building-webpack');
// module.exports = createCompatibilityConfig({
//   input: path.resolve(__dirname, './index.html'),
// });

module.exports = createDefaultConfig({
  input: path.resolve(__dirname, './index.html'),
});