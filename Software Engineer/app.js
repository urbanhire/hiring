require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const env = process.env.NODE_ENV;
const mongoDB = (env === 'development') ?  process.env.MONGODB_URL : process.env.MONGODB_URL_TEST;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// import router
const index = require('./routers/');

const app = express();

app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(express.json());

app.use('/', index);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`App listening in port ${port}`));
}

module.exports = app;
