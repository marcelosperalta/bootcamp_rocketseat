const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

// localhost:4567/
// app.get('/', function(request, response) {
// })
// or
// app.get('/', (request, response) => {
//     return response.json({
//         message: 'okay'
//     })
// })

app.get('/', (request, response) => {
    return response.json([
        { name: 'Priscila' },
        { name: 'Marcelo' }
    ])
})

// localhost:4567
app.listen('4567')