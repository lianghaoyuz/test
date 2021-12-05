/* eslint-disable no-undef */
/* eslint-disable global-require */
const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('builder-webpack test', () => {
  require('./unit/webpack-base-test');
});
