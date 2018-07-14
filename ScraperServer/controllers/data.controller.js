const Jobs = require('../models/jobs.model')

module.exports = {
  async getJobs (req, res, next) {
    try {
      let jobs = await Jobs.find().sort('-createdAt').limit(10)

      res.status(200).json({
        message: 'Berhasil get data',
        jobs: jobs
      })
    } catch (err) {
      next(err)
    }
  },
  async getBySlug (req, res, next) {
    try {
      let job = await Jobs.findOne({ jobSlug: req.params.jobslug })

      res.status(200).json({
        message: 'Berhasil get data',
        data: job
      })
    } catch (err) {
      next(err)
    }
  },
  async createJob (req, res, next) {
    try {
      let job = await Jobs.create(req.body)

      res.status(200).json({
        message: 'Berhasil membuat data',
        data: job
      })
    } catch (err) {
      next(err)
    }
  },
  async deleteJob (req, res, next) {
    try {
      let job = await Jobs.findOneAndRemove({ jobSlug: req.params.jobslug })

      res.status(200).json({
        message: 'Berhasil menghapus data',
        data: job
      })
    } catch (err) {
      next(err)
    }
  },
  async updateJob (req, res, next) {
    try {
      let job = await Jobs.findOneAndUpdate({ jobSlug: req.params.jobslug }, req.body)

      res.status(200).json({
        message: 'Berhasil mengubah data',
        data: job
      })
    } catch (err) {
      next(err)
    }
  },
  async searchJob (req, res, next) {
    try {
      let jobs = await Jobs.find({ 'jobName': { '$regex': req.params.query, '$options': 'i' } })

      res.status(200).json({
        message: 'Berhasil mengubah data',
        data: jobs
      })
    } catch (err) {
      next(err)
    }
  }
}
