const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
  jobName: {
    type: String,
    required: [true, 'Harap masukan nama testimoner']
  },
  companyName: {
    type: String,
    required: [true, 'Harap masukan nama perusahaan']
  },
  jobLocation: {
    type: String,
    required: [true, 'Harap masukan lokasi pekerjaan']
  },
  jobFunction: {
    type: String,
    required: [true, 'Harap masukan fungsi pekerjaan']
  },
  jobIndustry: {
    type: String,
    required: [true, 'Harap masukan industri pekerjaan']
  },
  jobSlug: {
    type: String,
    required: [true, 'Harap masukan job slug']
  },
  companyLogo: String
}, {
  timestamps: true
})

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = Jobs
