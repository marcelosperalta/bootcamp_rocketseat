const Database = require('../db/config')

let data = [
    {
        id: 1,
        name: "Project 1",
        "daily-hours": 2,
        "total-hours": 2,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "Project 2",
        "daily-hours": 3,
        "total-hours": 6,
        created_at: Date.now()
    },
    {
        id: 3,
        name: "Project 3",
        "daily-hours": 1,
        "total-hours": 47,
        created_at: Date.now()
    }
];

module.exports = {
    // get() {
    async get() {
        const db = await Database()

        const data2 = await db.all(`
            SELECT * FROM jobs
        `)

        console.log(data2);

        await db.close()

        return data
    },
    update(newJob) {
        data = newJob
    },
    delete(id) {
        data = data.filter(job => Number(job.id) !== Number(id))
    },
    create(newJob) {
        data.push(newJob)
    }
}