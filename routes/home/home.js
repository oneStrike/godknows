const router = require('express').Router();
const path = require('path');
const godknows = require(path.join(__dirname,'/../../db/model/godknows'))

router.get('/', function (req, res, next) {
  godknows.create({
    name:'godkonws'
  },function(err,data){
    console.log(err);
    console.log(data);
  })
  res.render('home.ejs', {title: 'foo', content: 'test'})
})

module.exports = router;