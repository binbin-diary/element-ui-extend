const path = require('path');

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.externals = {
  vue: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
