/**
 * Central file
 */

const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const config = JSON.parse(fs.readFileSync(path.join(__dirname, '/config.json'), 'utf8'))

app.use(express.static('public'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack)
    return next(err)
  } else {
    return next()
  }
})

var routes = require('./route')
routes(app)

const Scrapper = require('./src/scraper')
let scrapper = new Scrapper()

async function run () {
  let html = ''
  try {
    html = await scrapper.setHtml()
    await scrapper.setData(html)
  } catch (e) {
    console.error(e)
  }
}

run()

var server = http.createServer(app)

server.listen(config.port, function () {
  var host = config.host
  var port = server.address().port

  console.log('Urban Hiring API listening http://%s:%s', host, port)
})

module.exports = app
