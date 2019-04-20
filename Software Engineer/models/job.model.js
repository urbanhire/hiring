const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jobSchema = new schema({
  jobName: {
    type: String,
    required: [true, 'Job Name cannot be empty']
  },
  companyName: {
    type: String,
    required: [true, 'Company Name cannot be empty']
  },
  companyLogo: {
    type: String,
  },
  jobLocation: {
    type: String,
    required: [true, 'Location cannot be empty']
  },
  jobFunction: String,
  JobIndustry: String,
  slug: {
    type: String,
    required: [true, 'Slug cannot be empty'],
    validate: [{
      validator: (v) => {
        return Job.findOne({
          slug: v
        })
          .then((result) => {
            throw new Error('Slug has been registered')
          }).catch((err) => {
            throw new Error(err.errors)
          });
      }
    }]
  },
});


const Job = mongoose.model('Job', jobSchema);

module.exports = Job;