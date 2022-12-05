const express = require('express')
const app = express()
const _PORT = process.env.PORT || 3001

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', function (req, res) {
    var data = [
        {name:'rony',id:17},
        {name:'Ahmad',id :5}
    ]
    res.send(data)
  })

app.listen(_PORT)