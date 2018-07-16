/**
 * Detail Controllers
 */

const Jobs = require('./models')

class Api {
  index (req, res, next) {
    let result = {
      meta: {
        code: 400,
        msg: 'An error occured'
      },
      data: []
    }

    let query = {}

    if (req.query.q !== undefined && req.query.q && req.query.q.length > 0) {
      var search = req.query.q.trim()

      var regex = new RegExp(search, 'gi')
      query = {
        $or: [{ jobName: regex }, { compName: regex }]
      }
    }

    let job = new Jobs()

    job.find(query).then(doc => {
      result.meta.code = 200
      result.meta.msg = 'Success'
      result.data = doc
      return res.json(result)
    }, err => {
      console.error(err)
      return res.status(result.meta.code).json(result)
    })
  }

  detail (req, res, next) {
    let result = {
      meta: {
        code: 400,
        msg: 'An error occured'
      },
      data: []
    }

    let query = {
      _id: req.params.id.trim()
    }

    let job = new Jobs()

    job.findOne(query).then(doc => {
      result.meta.code = 200
      result.meta.msg = 'Success'
      result.data = doc
      return res.json(result)
    }, err => {
      console.error(err)
      return res.status(result.meta.code).json(result)
    })
  }

  create (req, res, next) {
    let result = {
      meta: {
        code: 400,
        msg: 'An error occured'
      },
      data: []
    }

    var payload = {
      jobName: req.body.job_name.trim(),
      compName: req.body.comp_name.trim(),
      compLogo: req.body.comp_logo.trim(),
      jobLocation: req.body.job_location.trim(),
      jobFunction: req.body.job_function.trim(),
      jobIndustry: req.body.job_industry.trim()
    }

    let job = new Jobs()

    job.insert(payload).then(doc => {
      result.meta.code = 201
      result.meta.msg = 'Success'
      result.data = doc
      return res.json(result)
    }, err => {
      console.error(err)
      return res.status(result.meta.code).json(result)
    })
  }

  update (req, res, next) {
    let result = {
      meta: {
        code: 400,
        msg: 'An error occured'
      },
      data: []
    }

    var payload = {
      jobName: req.body.job_name.trim(),
      compName: req.body.comp_name.trim(),
      compLogo: req.body.comp_logo.trim(),
      jobLocation: req.body.job_location.trim(),
      jobFunction: req.body.job_function.trim(),
      jobIndustry: req.body.job_industry.trim()
    }

    let job = new Jobs()

    let query = { _id: req.params.id }

    job.update(query, payload).then(doc => {
      result.meta.code = 200
      result.meta.msg = 'Success'
      result.data = doc
      return res.json(result)
    }, err => {
      console.error(err)
      return res.status(result.meta.code).json(result)
    })
  }

  remove (req, res, next) {
    let result = {
      meta: {
        code: 400,
        msg: 'An error occured'
      },
      data: []
    }

    let query = {
      _id: req.params.id.trim()
    }

    let job = new Jobs()

    job.remove(query).then(doc => {
      result.meta.code = 200
      result.meta.msg = 'Success'
      return res.json(result)
    }, err => {
      console.error(err)
      return res.status(result.meta.code).json(result)
    })
  }
}

module.exports = new Api()
