const cheerio = require('cheerio');
const axios = require('axios');

// import model
const job = require('../models/job.model');

module.exports = {
  storeScraper: async (req, res) => {
    try {
      const { data } = await axios.get(process.env.SCRAP_URL);
      let $ = cheerio.load(data);
      let allData = [];
      $('.result_unit_con').each((i, each) => {
        const companyLogo = $(each).find('.llogo').find('img').attr('src');
        const companyName = $(each).find('.company_name').find('.btn_open').text();
        const tags = $(each).find('.result_labels').find('.tags');
        const jobLocation = $(tags).html();
        const jobFunction = $(tags).next().html();
        const jobIndustry = $(tags).next().next().html();
        const jobName = $(each).find('.unit_head').find('.posting_name').text()
        let slug = $(each).find('.unit_head').find('.posting_name').attr('href');
        slug = slug.split('/');
        slug = slug[slug.length - 2];
        let objectData = {
          companyLogo,
          companyName,
          jobLocation,
          jobName,
          jobFunction,
          jobIndustry,
          slug,
        };
        allData.push(job.create(objectData));
      });
      const promiseAll = await Promise.all(allData);

      return res.status(200).send({ 
        message: 'Successfully store scrape to database.',
        result: promiseAll,
      });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
};
