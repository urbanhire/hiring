const supertest = require('supertest');
const app = require('../app');
const helperTest = require('./helpers/index');
const chai = require('chai');
const chaiSubset = require('chai-subset');

const { expect } = chai.use(chaiSubset);

const constant = require('./helpers/constant');

const { response } = helperTest;

const request = supertest(app);

let jobCreated = {};

describe('Testing jobs endpoint', () => {

  describe('Create jobs', () => {
    it('should success to create new jobs', (done) => {
      const route = '/jobs';
      const body = constant.JOBS.createBody;
  
      request.post(route).send(body).end((err, result) => {
        response(result, 201);
        jobCreated = result.body;
        expect(result.body)
          .to.be.an('object')
          .to.haveOwnProperty('_id');
        done(err)
      });
    });
    
    it('should error when create jobs with same slug', (done) => {
      const route = '/jobs';
      const body = constant.JOBS.createBody;

      request.post(route).send(body).end((err, result) => {
        response(result, 401);
        expect(result.body)
          .to.be.an('object')
          .to.haveOwnProperty('message')
        done(err)
      });
    });
  });
  
  describe('Get data jobs', () => {
    it('should get all data from jobs', (done) => {
      route = '/jobs'
      request.get(route).end((err, result) => {
        response(result, 200)
        expect(result.body)
          .to.be.an('array');

        expect(result.body[0])
          .to.be.an('object')
          .to.haveOwnProperty('_id')
        done(err)
      });
    });

    it('should get one data of job', (done) => {
      route = `/jobs/${jobCreated._id}`;
      console.log(route)
      request.get(route).end((err, result) => {
        response(result, 200)
        expect(result.body)
          .to.be.an('object')
          .to.haveOwnProperty('_id');
        done(err)
      });
    });
  });
  
  describe('Delete a job', () => {
    it('should delete job', (done) => {
      route = `/jobs/${jobCreated._id}`;
      request.del(route).end((err, result) => {

        done(err);
      });
    });
  });
  
});
