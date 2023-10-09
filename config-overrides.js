const path = require('path');

module.exports = function override(config, env) {
  // Add a loader for HTML files
  config.module.rules.push({
    test: /\.html$/,
    use: 'html-loader',
  });

  // You can add more customizations here

  return config;
};
