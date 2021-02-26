const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const FileStreamRotator = require("file-stream-rotator");
const logger = require('morgan')

const sassMiddleware = require('node-sass-middleware')

const db = require(path.join(__dirname, '/db/index'))
const router = require(path.join(__dirname, '/routes/index'))

const files = require(path.join(__dirname, '/utils/files'))

db(() => {
  //数据库连接成功
  const app = express()
  files(path.join(__dirname)).then(val=>{
    console.log(val);
  })
  //设置模板引擎
  app.set('views', path.join(__dirname, '/views'))
  app.set('engine', 'ejs')

  //scss中间件
  app.use(sassMiddleware({
    src: path.join(__dirname, '/public/scss'),
    dest: path.join(__dirname, '/public/stylesheets'),
    prefix: '/stylesheets',
    indentedSyntax: false,
  }))

  //设置文件静态路径
  app.use(express.static(path.join(__dirname, '/public')))
  app.use(express.static(path.join(__dirname, '/libs')))

  //解析请求主体
  app.use(bodyParser.json())

  //日志记录
  let logDirectory = path.join(__dirname, '/logs')
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
  let accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
  })
  app.use(logger('combined', {stream: accessLogStream}))

  //路由
  app.use(router)

  //404
  app.use(function (req, res, next) {
    if (req.url === '/favicon.ico') return;
    console.log('404')
  });

  app.listen(3000, () => {
    console.log('3000port listening...')
  })
}, (err) => {
  //数据库连接失败
  console.log(err);
})