const express = require('express');
const router = express.Router({ mergeParams: true });

// controller
const scraper = require('../controllers/scraper.controller');

router
  .get('/', scraper.storeScraper);

module.exports = router;