const path = require('path');
exports.jsexcludeyar = '/node_modules|utils\/popper\.js|utils\/date\.js/';

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples')
};