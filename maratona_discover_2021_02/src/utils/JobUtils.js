module.exports = {
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
}