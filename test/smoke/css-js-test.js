const glob = require('glob-all')

describe('whether having the js/css files', function() {
  it('should generate js/css files', (done) => {
    const files = glob.sync([
      './dist/index*.js',
      './dist/search*.js'
    ])
    if(files.length) {
      done()
    }else done(new Error('dont have js/css files'))
  })
})