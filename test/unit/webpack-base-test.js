const assert = require('assert');
describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/guoyubo/Desktop/my-project-webpack/builder-webpack/test/smoke/template/src/index/index.js') 
    assert.equal(baseConfig.entry.search, '/Users/guoyubo/Desktop/my-project-webpack/builder-webpack/test/smoke/template/src/search/index.js')
  })
})