const { response } = require('express');
const express = require('express')
const routes = express.Router()

// request, response
// routes.get('/', (request, response) => {
//     return response.sendFile(__dirname + "/views/index.html")
// })

// const basePath = __dirname + "/views";
// routes.get('/', (request, response) => response.sendFile(basePath + "/index.html"));
// routes.get('/job', (request, response) => response.sendFile(basePath + "/job.html"));
// routes.get('/job/edit', (request, response) => response.sendFile(basePath + "/job-edit.html"));
// routes.get('/profile', (request, response) => response.sendFile(basePath + "/profile.html"));

const views = __dirname + "/views/";

const profile = {
    name: "Marcelo",
    avatar: "http://github.com/marcelosperalta.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "'total-hours": 60,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Project",
        "daily-hours": 3,
        "'total-hours": 47,
        created_at: Date.now()
    }
]

// GET
routes.get('/', (request, response) => response.render(views + "index", { jobs }));
routes.get('/job', (request, response) => response.render(views + "job"));
routes.get('/job/edit', (request, response) => response.render(views + "job-edit"));
// routes.get('/profile', (request, response) => response.render(views + "profile"));
// routes.get('/profile', (request, response) => response.render(views + "profile", { profile: profile }));
routes.get('/profile', (request, response) => response.render(views + "profile", { profile }));

// POST
routes.post('/job', (request, response) => {
    // console.log("Save data");
    // console.log(request.body);

    // reference:
    // { name: 'Front-End', 'daily-hours': '2', 'total-hours': '20' }
    // jobs.push(request.body)

    // const job = request.body
    // job.created_at = Date.now()

    const lastId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: request.body.name,
        "daily-hours": request.body["daily-hours"],
        "'total-hours": request.body["total-hours"],
        created_at: Date.now() // attributing date
    })

    return response.redirect('/')
});

module.exports = routes;
