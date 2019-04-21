require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// import router
const index = require('./routers/');

const app = express();

app.use(express.urlencoded({ extended: true, limit: '5mb' }));
app.use(express.json());

app.use('/', index);

app.listen(port, () => console.log(`App listening in port ${port}`));