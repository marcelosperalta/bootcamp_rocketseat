const { response } = require('express');
const express = require('express')
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')

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

const Profile = {
    data: {
        name: "Marcelo",
        avatar: "http://github.com/marcelosperalta.png",
        "monthly-budget": 3000,
        "days-per-week": 5,
        "hours-per-day": 5,
        "vacation-per-year": 4,
        "costs-per-hour": 75
    },
}

const Job = {

    data: [
        {
            id: 1,
            name: "Pizzaria Guloso",
            "daily-hours": 2,
            "total-hours": 2,
            created_at: Date.now()
        },
        {
            id: 2,
            name: "OneTwo Project",
            "daily-hours": 3,
            "total-hours": 47,
            created_at: Date.now()
        }
    ],

    controllers: {
        // index: function() {}
        // index: () => {}
        index(request, response) {
            const updatedJobs =  Job.data.map((job) => {

                const remaining = Job.services.remainingDays(job);
                const status = remaining <= 0 ? "done" : "progress";

                return {
                    ...job,
                    remaining,
                    status,
                    budget: Job.services.calculateBudget(job, Profile.data["costs-per-hour"])
                }
            })
            
            // return response.render(views + "index", { jobs: updatedJobs })
            return response.render("index", { jobs: updatedJobs })
        },

        create(request, response) {
            // return response.render(views + "job")
            return response.render("job")
        },

        save(request, response) {
            // Optional chaining "?."
            const lastId = Job.data[Job.data.length - 1]?.id || 0;

            Job.data.push({
                id: lastId + 1,
                name: request.body.name,
                "daily-hours": request.body["daily-hours"],
                "total-hours": request.body["total-hours"],
                created_at: Date.now() // attributing date
            })
        
            return response.redirect('/')
        },

        show(request, response) {
            const jobId = request.params.id
            const job = Job.data.find(job => Number(job.id) === Number(jobId))
            if (!job) {
                return response.send("Job not found!")
            }

            job.budget = Job.services.calculateBudget(job, Profile.data["costs-per-hour"])

            // return response.render(views + "job-edit", { job })
            return response.render("job-edit", { job })
        },

        update(request, response) {
            const jobId = request.params.id
            const job = Job.data.find(job => Number(job.id) === Number(jobId))
            if (!job) {
                return response.send("Job not found!")
            }

            const updatedJob = {
                ...job,
                name: request.body.name,
                "daily-hours": request.body["daily-hours"],
                "total-hours": request.body["total-hours"],
            }

            Job.data = Job.data.map(job => {

                if(Number(job.id) === Number(jobId)) {
                    job = updatedJob
                }

                return job
            })

            response.redirect('/job/' + jobId)
        },

        delete(request, response) {
            const jobId = request.params.id

            Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId))

            return response.redirect('/')
        }
    },

    services: {
        remainingDays(job) {
            const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
            const createdDate = new Date(job.created_at)
            const dueDay = createdDate.getDate() + Number(remainingDays)
            const dueDateInMilliseconds = createdDate.setDate(dueDay)
            const timeDifferenceInMilliseconds = dueDateInMilliseconds - Date.now()
            const dayInMilliseconds = 1000 * 60 * 60 * 24
            const dayDifference = Math.floor(timeDifferenceInMilliseconds / dayInMilliseconds)
            return dayDifference
        },

        calculateBudget: (job, costsPerHour) => costsPerHour * job["total-hours"]
    },
}

routes.get('/', Job.controllers.index);

routes.get('/job', Job.controllers.create);
routes.post('/job', Job.controllers.save);

// routes.get('/job/edit', (request, response) => response.render(views + "job-edit"));
// routes.get('/job/edit', Job.controllers.show);
routes.get('/job/:id', Job.controllers.show);
routes.post('/job/:id', Job.controllers.update);
routes.post('/job/delete/:id', Job.controllers.delete);

// routes.get('/profile', (request, response) => response.render(views + "profile"));
// routes.get('/profile', (request, response) => response.render(views + "profile", { profile: profile }));
// routes.get('/profile', Profile.controllers.index);
// routes.post('/profile', Profile.controllers.update);
routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);


module.exports = routes;