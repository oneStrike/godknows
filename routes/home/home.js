const router = require('express').Router();
const path = require('path');
const godknows = require(path.join(__dirname, '/../../db/models/godknows'))

router.get('/', function (req, res, next) {
  godknows.find({}, function (err, data) {
    if (!err) {
      console.log(data[0]);
      res.render('home.ejs', {title: 'foo', config:data[0]})
    }
  })
})

module.exports = router;