const Job = require('../models/Job')
const Profile = require('../models/Profile')
const JobUtils = require('../utils/JobUtils')

module.exports = {

    // index: function() {}
    // index: () => {}
    index(request, response) {

        const jobs = Job.get()
        const profile = Profile.get()
        const statusCount = {
            progress: 0,
            done: 0,
            projects: jobs.length,
        }

            const updatedJobs =  jobs.map((job) => {

                const remaining = JobUtils.remainingDays(job);
                const status = remaining <= 0 ? "done" : "progress";
             // e.g.
             // status = done
             // statusCount[done] = done + 1
                statusCount[status] += 1;

                return {
                    ...job,
                    remaining,
                    status,
                    budget: JobUtils.calculateBudget(job, profile["costs-per-hour"])
                }
            })

            // return response.render(views + "index", { jobs: updatedJobs })
            return response.render("index", { 
                jobs: updatedJobs, 
                profile: profile,
                statusCount: statusCount
            })
    }

}