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

    controllers: {
        index(request, response) {
            return response.render(views + "profile", { profile: Profile.data })
        },

        update(request, response) {
            
        }
    }
}

const Job = {

    data: [
        {
            id: 1,
            name: "Pizzaria Guloso",
            "daily-hours": 2,
            "total-hours": 2,
            created_at: Date.now(),
        },
        {
            id: 2,
            name: "OneTwo Project",
            "daily-hours": 3,
            "total-hours": 47,
            created_at: Date.now(),
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
                    budget: Profile.data["costs-per-hour"] * job["total-hours"]
                }
            })
            
            return response.render(views + "index", { jobs: updatedJobs })
        },

        create(request, response) {
            return response.render(views + "job")
        },

        save(request, response) {
            const lastId = Job.data[Job.data.length - 1]?.id || 1;

            Job.data.push({
                id: lastId + 1,
                name: request.body.name,
                "daily-hours": request.body["daily-hours"],
                "total-hours": request.body["total-hours"],
                created_at: Date.now() // attributing date
            })
        
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
        }
    },

}

routes.get('/', Job.controllers.index);

routes.get('/job', Job.controllers.create);
routes.post('/job', Job.controllers.save)

routes.get('/job/edit', (request, response) => response.render(views + "job-edit"));

// routes.get('/profile', (request, response) => response.render(views + "profile"));
// routes.get('/profile', (request, response) => response.render(views + "profile", { profile: profile }));
routes.get('/profile', Profile.controllers.index);
routes.post('/profile', Profile.controllers.update);

module.exports = routes;