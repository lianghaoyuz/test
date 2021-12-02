const path = require('path')

process.chdir(path.join(__dirname, 'smoke/template'))

describe('builder-webpack test', function(){
  const baseTest = require('./unit/webpack-base-test')
  
})