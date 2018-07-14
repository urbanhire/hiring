const puppeteer = require('puppeteer')
const Jobs = require('../models/jobs.model')

module.exports = {
  async scrape (req, res, next) {
    try {
      const browser = await puppeteer.launch({
        headless: true
      })

      const page = await browser.newPage()

      await page.goto('https://www.urbanhire.com/jobs?q=engineer')

      // await page.waitFor(2*1000)

      await page.waitForSelector('#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(10) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._3Nkxu01b2SFBtUlNUO09ls > h2 > a')

      let ads = await page.$('#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(10) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._3Nkxu01b2SFBtUlNUO09ls > h2 > a')

      if (ads === null) {
        await page.click('#uh-container > div > div.newsLetterContainer._3nGKM2Ue_K8y2JBO5Tn-SY > div > div > div > button')
        await page.waitForSelector('#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(10) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._3Nkxu01b2SFBtUlNUO09ls > h2 > a')
      }

      let companiesSelector = '#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(INDEX) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._2CdcMCMOEtHTE6aprIBeyF.m-b-xxs > h3 > a'
      let jobsNameSelector = '#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(INDEX) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._3Nkxu01b2SFBtUlNUO09ls > h2 > a'
      let jobsIndustrySelector = '#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(INDEX) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._2ovehP2ue1CjJm2RGlhscF > span:nth-child(2) > a'
      let jobLocationsSelector = '#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(INDEX) > div.row > div.col-xs-9.col-sm-9.col-md-9.col-lg-10._11PC0ox88vDutymGqJ9eQI > div._2ovehP2ue1CjJm2RGlhscF > span:nth-child(1) > a'
      let imagesSelector = '#uh-container > div > div:nth-child(3) > div > div.wrap.container > div:nth-child(2) > div.col-xs-12.col-sm-8.col-md-9 > div:nth-child(2) > div.m-b-lg > div._1KBNWpNgG6ZOlJ1lGK_b2j > article:nth-child(INDEX) > div.row > div.col-xs-3.col-sm-3.col-md-3.col-lg-2 > div > a > span > img'

      let hasil = []
      for (let i = 1; i <= 10; i++) {
        let companySelector = companiesSelector.replace('INDEX', i)
        let jobNameSelector = jobsNameSelector.replace('INDEX', i)
        let jobIndustrySelector = jobsIndustrySelector.replace('INDEX', i)
        let jobLocationSelector = jobLocationsSelector.replace('INDEX', i)
        let imageSelector = imagesSelector.replace('INDEX', i)

        let companyName = await page.$(companySelector)
        let jobName = await page.$(jobNameSelector)
        let jobIndustry = await page.$(jobIndustrySelector)
        let jobLocation = await page.$(jobLocationSelector)
        let image = await page.$(imageSelector)

        let objCompanyName = await page.evaluate(companyName => companyName.innerText, companyName)
        let objJobName = await page.evaluate(jobName => jobName.innerText, jobName)
        let objJobIndustry = await page.evaluate(jobIndustry => jobIndustry.innerText, jobIndustry)
        let objJobLocation = await page.evaluate(jobLocation => jobLocation.innerText, jobLocation)
        let objImage = await page.evaluate(image => image.src, image)
        // console.log(await image)

        let slug = objJobName.toLowerCase().replace(' ', '-') + '-' + Math.random().toString(36).substring(2, 15)

        let payload = {
          companyName: objCompanyName,
          jobName: objJobName,
          jobLocation: objJobLocation,
          jobFunction: objJobIndustry,
          jobIndustry: objJobIndustry,
          companyLogo: objImage,
          jobSlug: slug
        }

        await Jobs.create(payload)
        hasil.push(payload)

        // previousHeight = await page.evaluate('document.body.scrollHeight')
        await page.evaluate(`window.scrollTo(0, 500*${i})`)
        await page.waitFor(800)
      }

      await browser.close()

      res.status(200).json({
        message: 'Berhasil scraping data',
        jobs: hasil
      })
    } catch (error) {
      next(error)
    }
  }
}
