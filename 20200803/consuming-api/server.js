const express = require('express')
const app = express()

// localhost:4567/
// app.get('/', function(request, response) {
// })
// or
app.get('/', (request, response) => {
    return response.json({
        message: 'okay'
    })
})

// localhost:4567
app.listen('4567')