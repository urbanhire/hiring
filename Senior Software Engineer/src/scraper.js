const cheerio = require('cheerio')
const unirest = require('unirest')
const Jobs = require('./models')

class Scraper {
  setHtml () {
    const url = 'https://www.karirpad.com/Lowongan/load_vacancy/semuanya/null/10'

    return new Promise((resolve, reject) => {
      unirest.get(url).end(resp => {
        if (resp.error) return reject(resp.error)

        let $ = cheerio.load(resp.body)

        resolve($.html())
      })
    })
  }

  setData (html) {
    const $ = cheerio.load(html)

    return new Promise((resolve, reject) => {
      let data = []
      $('.result').each(function (i, elem) {
        let obj = {
          jobName: $(this).find('.result_title').attr('title'),
          compName: $(this).find('.comp_name a').text(),
          compLogo: $(this).find('.comp_logo img').attr('src'),
          jobLocation: $(this).find('.add_s').text()
        }
        data.push(obj)
      })

      let job = new Jobs()
      return job.insertMany(data).then(doc => {
        resolve(doc)
      }, err => {
        reject(err)
      })
    })
  }
}

module.exports = Scraper
