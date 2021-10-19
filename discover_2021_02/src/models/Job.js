const Database = require('../db/config')

// let data = [
//     {
//         id: 1,
//         name: "Project 1",
//         "daily-hours": 2,
//         "total-hours": 2,
//         created_at: Date.now()
//     },
//     {
//         id: 2,
//         name: "Project 2",
//         "daily-hours": 3,
//         "total-hours": 6,
//         created_at: Date.now()
//     },
//     {
//         id: 3,
//         name: "Project 3",
//         "daily-hours": 1,
//         "total-hours": 47,
//         created_at: Date.now()
//     }
// ];

module.exports = {

    // get() {
    async get() {

        const db = await Database()

        // const data2 = await db.all(`
        //     SELECT * FROM jobs
        // `)

        // console.log(data2);

        const jobs = await db.all(`
        SELECT * FROM jobs
        `)

        await db.close()

        // return data
        return jobs.map(job => ({
            // return {
                id: job.id,
                name: job.name,
                "daily-hours": job.daily_hours,
                "total-hours": job.total_hours,
                created_at: job.created_at
            // }
        }))
    },

    // update(newJob) {
    async update(updatedJob, jobId) {
        // data = newJob
        const db = await Database()

        await db.run(`
            UPDATE jobs SET
                name = "${updatedJob.name}",
                daily_hours = ${updatedJob["daily-hours"]},
                total_hours = ${updatedJob["total-hours"]}
            WHERE id = ${jobId}
        `)

        await db.close()
    },

    // delete(id) {
    async delete(id) {
        // data = data.filter(job => Number(job.id) !== Number(id))
        const db = await Database()

        await db.run(`DELETE FROM jobs WHERE id = ${id}`)

        await db.close()
    },

    async create(newJob) {
        // data.push(newJob)

        const db = await Database()

        await db.run(`
            INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                "${newJob.name}",
                ${newJob["daily-hours"]},
                ${newJob["total-hours"]},
                ${newJob.created_at}
            )
        `)

        await db.close()
    }
}