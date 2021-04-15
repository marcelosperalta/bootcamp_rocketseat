const Job = require('../models/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../models/Profile')

module.exports = {

    create(request, response) {
        // return response.render(views + "job")
        return response.render("job")
    },

    save(request, response) {
        // Optional chaining "?."
        // const lastId = Job.get()[Job.data.length - 1]?.id || 0; // or
        const jobs = Job.get()
        const lastId = jobs[jobs.length - 1]?.id || 0;

     // Job.data.push({
        jobs.push({
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

        const jobs = Job.get()
        // const job = Job.data.find(job => Number(job.id) === Number(jobId))
        // const job = Job.get().find(job => Number(job.id) === Number(jobId))
        const job = jobs.find(job => Number(job.id) === Number(jobId))

        if (!job) {
            return response.send("Job not found!")
        }

        const profile = Profile.get()
        job.budget = JobUtils.calculateBudget(job, profile["costs-per-hour"])

        // return response.render(views + "job-edit", { job })
        return response.render("job-edit", { job })

    },

    update(request, response) {

        const jobId = request.params.id
        const jobs = Job.get()

        const job = jobs.find(job => Number(job.id) === Number(jobId))

        if (!job) {
            return response.send("Job not found!")
        }

        const updatedJob = {
            ...job,
            name: request.body.name,
            "daily-hours": request.body["daily-hours"],
            "total-hours": request.body["total-hours"],
        }

       const newJobs = jobs.map(job => {

            if(Number(job.id) === Number(jobId)) {
                job = updatedJob
            }

            return job

        })
        Job.update(newJobs)

        response.redirect('/job/' + jobId)

    },

    delete(request, response) {
        const jobId = request.params.id

        // Job.data = jobs.filter(job => Number(job.id) !== Number(jobId))
        Job.delete(jobId)

        return response.redirect('/')
    }
    
}