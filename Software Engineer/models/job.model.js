const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jobSchema = new schema({
  jobName: String,
  company: String,
  companyLogo: String,
  jobLocation: String,
  jobFunction: String,
  JobIndustry: String,
  slug: String,
});


const Job = mongoose.model('Job', jobSchema);

module.exports = Job;