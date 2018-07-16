const assert = require('assert')
const Scrapper = require('../src/scraper')

function check () {
  let scrapper = new Scrapper()
  scrapper.setHtml().then(html => {
    assert(html.startsWith('<html>'), true)
    assert(html.includes('body'), true)
    assert(html.endsWith('</html>'), true)
    console.log('set Html done test passed')

    scrapper.setData(html).then(doc => {
      assert(typeof doc === 'object' && Array.isArray(doc))

      console.log('set data done test passed')
    }, err => {
      console.error(err)
    })
  }, err => {
    console.error(err)
  })
}

check()
