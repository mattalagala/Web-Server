var express = require('express')

var app = express()

var counter = undefined

app.get('/ping', function (req, res, next) {
    console.log('Pong')
    res.send('Pong')
})

app.listen(4050, function () {
    console.log('server is listening ...')
})


