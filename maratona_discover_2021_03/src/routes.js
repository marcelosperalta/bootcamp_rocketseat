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
    avatar: "https://avatars.githubusercontent.com/u/8503067?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

routes.get('/', (request, response) => response.render(views + "index"));
routes.get('/job', (request, response) => response.render(views + "job"));
routes.get('/job/edit', (request, response) => response.render(views + "job-edit"));
// routes.get('/profile', (request, response) => response.render(views + "profile"));
// routes.get('/profile', (request, response) => response.render(views + "profile", { profile: profile }));
routes.get('/profile', (request, response) => response.render(views + "profile", { profile }));

module.exports = routes;
