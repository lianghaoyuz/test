const assert = require('assert')

describe('test webpack.base.js', function(){
  const baseConfig = require('../../lib/webpack.base')
  it('entry', function(){
    assert.equal(baseConfig.entry.index, '/Users/lianghaoyu/Desktop/toltal/webpack_demo/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(baseConfig.entry.search, '/Users/lianghaoyu/Desktop/toltal/webpack_demo/builder-webpack/test/smoke/template/src/search/index.js')
  })
})