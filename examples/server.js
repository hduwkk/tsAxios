const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const router = express.Router()
router.get('/simple/get', function (req, res, next) {
  res.json({ msg: 'hello world' })
})

const app = express()

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(router)

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.POET || 8080
module.exports = app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`)
})
