var express = require('express')

var app2 = express()

var counter = 0

app2.get('/value', function (req, res) {
 
    console.log('Value is', counter)
    res.send(`<h1>value is ${counter}</h1>`)
})

app2.post('/increment', function (req, res) {
    counter ++
    console.log('Increment', counter)
    res.status('Increment', counter)
      
})

app2.post('/decrement', function (req, res) {
    counter--
    console.log('Decrement', counter)
    res.status('Decrement', counter)
})

app2.listen(6050, function () {
    console.log('server is listening ...')
})


