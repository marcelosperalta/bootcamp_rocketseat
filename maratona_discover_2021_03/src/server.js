const express = require("express")
const server = express()
//console.log(server);

// request, response
server.get('/', (request, response) => {
    // console.log("showing index content");
    // return response.send('Hi!!!')
    // console.log(__dirname + "/views/index.html");
    return response.sendFile(__dirname + "/views/index.html")
})

server.listen(3000, () => console.log("server running"))
