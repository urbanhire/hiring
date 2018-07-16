const mongoose = require('./connect')

const schema = new mongoose.Schema({
  jobName: String,
  compName: String,
  compLogo: String,
  jobLocation: String,
  jobFunction: String,
  jobIndustry: String
})

const JobModel = mongoose.model('Job', schema)

class Job {
  insert (payload) {
    return new Promise((resolve, reject) => {
      JobModel.create(payload, (err, doc) => {
        if (err) return reject(err)

        resolve(doc)
      })
    })
  }

  insertMany (payloads) {
    return new Promise((resolve, reject) => {
      JobModel.insertMany(payloads, (err, doc) => {
        if (err) return reject(err)

        resolve(doc)
      })
    })
  }

  find (query, options = null, limit = 10) {
    return new Promise((resolve, reject) => {
      // options, {skip: limit},
      JobModel.find(query, (err, doc) => {
        if (err) return reject(err)

        resolve(doc)
      })
    })
  }

  findOne (query) {
    return new Promise((resolve, reject) => {
      JobModel.findOne(query, (err, doc) => {
        if (err) return reject(err)
        resolve(doc)
      })
    })
  }

  update (query, payload) {
    return new Promise((resolve, reject) => {
      JobModel.update(query, payload, (err, doc) => {
        if (err) return reject(err)
        resolve(doc)
      })
    })
  }

  remove (query) {
    return new Promise((resolve, reject) => {
      JobModel.deleteOne(query, (err, doc) => {
        if (err) return reject(err)
        resolve(doc)
      })
    })
  }
}

module.exports = Job
