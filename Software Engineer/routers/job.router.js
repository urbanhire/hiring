const express = require('express');
const router = express.Router({ mergeParams: true });
const jobController = require('../controllers/job.controller');

router
  .post('/', jobController.insert);

module.exports = router;