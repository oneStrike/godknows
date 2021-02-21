const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.render('home.ejs', {title: 'foo', content: 'test'})
})

module.exports = router;