const mongoose = require('mongoose')
const path = require('path');
const dbConfig = require(path.join(__dirname, '/../config/db'))

function db(success, error) {
  let {uri, options} = dbConfig;
  mongoose.connect(uri, options)
      .then(res => success(res), err => error(err));
}
module.exports = db;