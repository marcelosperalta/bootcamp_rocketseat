const cors = require('cors')
const express = require('express')
const app = express()
//back-end
const axios = require('axios')


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

app.get('/', async(request, response) => {

    try {
        // "response" é a resposta do axios, mas é possível tirar
        // a resposta de dentro de "response" usando "{ }"
        // https://axios-http.com/docs/res_schema
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        // const dataFromJSONplaceholder = await response.json()
        console.log(data); // esses dados irao aparecer no terminal (nodemon server.js)
        return response.json(data)
    } catch (error) {
        console.log(error);
    }
    // return response.json([
    //     { name: 'Priscila' },
    //     { name: 'Marcelo' }
    // ])
})

// localhost:4567
app.listen('4567')