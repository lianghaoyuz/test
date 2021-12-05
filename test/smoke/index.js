const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const Mocha = require('mocha');

const mocha = new Mocha();

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.pro');

  webpack(prodConfig, (err1, stats) => {
    if (err1) {
      console.error(err1);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
      }),
    );
    console.log('start test');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
