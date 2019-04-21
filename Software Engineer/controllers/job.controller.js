// import model
const Jobs = require('../models/job.model');

module.exports = {
  insert: async (req, res) => {
    try {
      const {
        jobName,
        companyName,
        companyLogo,
        jobLocation,
        jobFunction,
        jobIndustry,
        slug,
      } = req.body

      const body = {
        jobName,
        companyName,
        companyLogo,
        jobLocation,
        jobFunction,
        jobIndustry,
        slug,
      }
      const job = await Jobs.create(body);

      return res.status(201).send(job);
    } catch (error) {
      return res.status(401).send({ message: error.message });
    }
  },
  findAll: async (req, res) => {
    try {
      const { q } = req.query;
      const findQuery = (q) ? {
        $text : { $search : q },
      } : {} 

      const jobs = await Jobs.find(findQuery, '_id, jobName companyName jobLocation slugclcl').limit(10);
 
      return res.status(200).send(jobs);
    } catch (error) {
      return res.status(500).send({ message: error.message });      
    }
  },
  findById: async (req, res) => {
    try {
      const { jobId } = req.params;
      const job = await Jobs.findOne({
        _id: jobId
      })

      return res.status(200).send(job);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
  findBySlug: async (req, res) => {
    try {
      const { slug } = req.params;
      const job = await Jobs.findOne({
        slug,
      });
      return res.status(200).send(job);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { jobId } = req.params;
      const {
        jobName,
        companyName,
        companyLogo,
        jobLocation,
        jobFunction,
        jobIndustry,
        slug,
      } = req.body;

      const body = {
        jobName: jobName || job.jobName,
        companyName: companyName || job.companyName,
        companyLogo: companyLogo || job.companyLogo,
        jobLocation: jobLocation || job.jobLocation,
        jobFunction: jobFunction || job.jobFunction,
        jobIndustry: jobIndustry || job.jobIndustry,
        slug: slug || job.slug,
      };

      const job = await Jobs.findOne({
        _id: jobId
      });

      if (!job) {
        return res.status(200).send({ message: 'job not found!'});
      }

      const jobUpdated = await Jobs.findOneAndUpdate({
        _id: jobId
      }, 
      body,
      {
        new: true,
      });

      return res.status(200).send(jobUpdated);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      const { jobId } = req.params;

      const jobDeleted = await Jobs.findOneAndDelete({
        _id: jobId,
      });

      const job = await Jobs.findOne({
        _id: jobId
      });
      if (!job) {
        return res.status(200).send({ message: 'job not found!'});
      }
      return res.status(200).send(jobDeleted);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
};
