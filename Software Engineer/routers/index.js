const express = require('express');
const router = express.Router({ mergeParams: true });

// import other router
const job = require('./job.router');
const scraper = require('./scraper.router');

router
  .get('/', (req, res) => res.send({ message: 'Base Endpoint' }))
  .use('/jobs', job)
  .use('/scrapers', scraper);


module.exports = router