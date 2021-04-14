const { response } = require('express');
const express = require('express')
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')

// request, response
// routes.get('/', (request, response) => {
//     return response.sendFile(__dirname + "/views/index.html")
// })

// const basePath = __dirname + "/views";
// routes.get('/', (request, response) => response.sendFile(basePath + "/index.html"));
// routes.get('/job', (request, response) => response.sendFile(basePath + "/job.html"));
// routes.get('/job/edit', (request, response) => response.sendFile(basePath + "/job-edit.html"));
// routes.get('/profile', (request, response) => response.sendFile(basePath + "/profile.html"));

// const views = __dirname + "/views/";

// const Profile = {
//     data: {
//         name: "Marcelo",
//         avatar: "http://github.com/marcelosperalta.png",
//         "monthly-budget": 3000,
//         "days-per-week": 5,
//         "hours-per-day": 5,
//         "vacation-per-year": 4,
//         "costs-per-hour": 75
//     },
// }

// routes.get('/', Job.controllers.index);
routes.get('/', JobController.index);

routes.get('/job', JobController.create);
routes.post('/job', JobController.save);

// routes.get('/job/edit', (request, response) => response.render(views + "job-edit"));
// routes.get('/job/edit', Job.controllers.show);
routes.get('/job/:id', JobController.show);
routes.post('/job/:id', JobController.update);
routes.post('/job/delete/:id', JobController.delete);

// routes.get('/profile', (request, response) => response.render(views + "profile"));
// routes.get('/profile', (request, response) => response.render(views + "profile", { profile: profile }));
// routes.get('/profile', Profile.controllers.index);
// routes.post('/profile', Profile.controllers.update);
routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);


module.exports = routes;