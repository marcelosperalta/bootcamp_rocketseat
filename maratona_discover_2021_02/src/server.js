const express = require("express")
const server = express()
const routes = require("./routes")
//console.log(server);

// template engine
server.set('view engine', 'ejs')

// middleware
// - enable static files
server.use(express.static("public"))

// request, response
// server.get('/', (request, response) => {
    // // console.log("showing index content");
    // // return response.send('Hi!!!')
    // // console.log(__dirname + "/views/index.html");
    // return response.sendFile(__dirname + "/views/index.html")
// })

// routes
server.use(routes);

server.listen(3000, () => console.log("server running"))
