const router = require('express').Router();
const path = require('path')

router.use('/', require(path.join(__dirname, '/home/home')))
router.use('/home', require(path.join(__dirname, '/home/home')))
router.use('/article', require(path.join(__dirname, '/article/article')))

module.exports = router;