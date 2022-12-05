const express = require('express')
const app = express()
const _PORT = process.env.PORT || 3001

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(_PORT)