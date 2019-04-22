const express = require('express');
const router = express.Router({ mergeParams: true });
const jobController = require('../controllers/job.controller');

router
  .post('/', jobController.insert)
  .get('/', jobController.findAll)
  .get('/slug/:slug', jobController.findBySlug)
  .get('/:jobId', jobController.findById)
  .put('/:jobId', jobController.edit)
  .delete('/:jobId', jobController.remove);



module.exports = router;