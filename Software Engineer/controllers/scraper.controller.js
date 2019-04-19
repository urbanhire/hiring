const cheerio = require('cheerio');
const axios = require('axios');

module.exports = {
  storeScraper: async (req, res) => {
    try {
      const { data } = await axios.get(process.env.SCRAP_URL);
      let $ = cheerio.load(data);

      $('.result_unit_con').each((i, el) => {
        // const result = $(el).html();
        // const companyLogo = cheerio.load(result).html().
        // console.log(companyLogo)
      });
      return res.status(200).send({ message: 'message scraper' });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
};
