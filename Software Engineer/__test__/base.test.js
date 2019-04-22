const supertest = require('supertest');
const app = require('../app');
const helperTest = require('./helpers/index');
const chai = require('chai');
const chaiSubset = require('chai-subset');

const { expect } = chai.use(chaiSubset);

const { response } = helperTest;

const request = supertest(app);

describe('Testing base endpoint', () => {
  it('should success get base endpoint', async (done) => {
    const route = '/';
    request.get(route).end((err, result) => {
      response(result, 200);
      expect(result.body)
        .to.be.an('object')
        .to.haveOwnProperty('message')
      done(err);
    });
  });
});
