const path = require('path')
const rimraf = require('rimraf')
const webpack = require('webpack')
const Mocha  = require('mocha')
const mocha = new Mocha()

process.chdir(path.join(__dirname, 'template'))

rimraf('./dist', (err) => {
  const prodConfig = require('../../lib/webpack.pro')
  
  webpack(prodConfig, (err, stats) => {
    if(err) {
      console.error(err)
      process.exit(2)
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false
      })
    )
    console.log('start test')
    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))
    mocha.run()
  })
})