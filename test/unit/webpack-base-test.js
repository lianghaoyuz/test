/* eslint-disable global-require */
/* eslint-disable no-undef */
const assert = require('assert');

describe('test webpack.base.js', () => {
  const baseConfig = require('../../lib/webpack.base');
  it('entry', () => {
    assert.equal(baseConfig.entry.index, `${process.cwd()}/src/index/index.js`);
    assert.equal(baseConfig.entry.search, `${process.cwd()}/src/search/index.js`);
  });
});
