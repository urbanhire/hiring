const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

const mongoose = require('mongoose')
mongoose.connect(`mongodb://${config.db.host}/${config.db.db_name}`)

module.exports = mongoose
