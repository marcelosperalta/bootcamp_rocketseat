const express = require("express")
const server = express()
//console.log(server);
const routes = require("./routes")
const path = require("path")


// template engine
server.set('view engine', 'ejs')


// change "views" folder location
server.set('views', path.join(__dirname, 'views'))


// middleware
// - enable static files
server.use(express.static("public"))


// use "request.body" (routes.js)
server.use(express.urlencoded({ extended: true }))


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
