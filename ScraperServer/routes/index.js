var express = require('express')
var router = express.Router()
const {
  scrape
} = require('../controllers/scrape.controller')
const {
  getJobs,
  getBySlug,
  createJob,
  updateJob,
  deleteJob,
  searchJob
} = require('../controllers/data.controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/scrape', scrape)
router.get('/get', getJobs)
router.get('/get/:jobslug', getBySlug)
router.get('/search/:query', searchJob)
router.post('/', createJob)
router.put('/:jobslug', updateJob)
router.delete('/:jobslug', deleteJob)

module.exports = router
