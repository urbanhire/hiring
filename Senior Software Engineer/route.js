module.exports = function (app) {
  var Job = require('./src/api')
  app.get('/job', Job.index)
  app.get('/job/:id', Job.detail)
  app.post('/job', Job.create)
  app.put('/job/:id', Job.update)
  app.delete('/job/:id', Job.remove)
}
