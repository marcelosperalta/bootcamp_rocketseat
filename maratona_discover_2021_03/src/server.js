const express = require("express")
const server = express()
//console.log(server);

// request, response
server.get('/', (request, response) => {
//console.log("showing index content");
    return response.send('Hi!!!')
})

server.listen(3000, () => console.log("server running"))
