const glob = require('glob-all')

describe('whether having the html files', function() {
  it('should generate html files', (done) => {
    const files = glob.sync([
      './dist/index.html',
      './dist/search.html'
    ])
    if(files.length) {
      done()
    }else done(new Error('dont have html files'))
  })
})