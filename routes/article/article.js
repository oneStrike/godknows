const router = require('express').Router()

router.get('/', function (req, res, next) {
  res.render('article.ejs')
})

module.exports = router;