const Database = require('../db/config')

// let data = {
//     name: "Marcelo",
//     avatar: "http://github.com/marcelosperalta.png",
//     "monthly-budget": 3000,
//     "days-per-week": 5,
//     "hours-per-day": 5,
//     "vacation-per-year": 4,
//     "costs-per-hour": 75
// };

module.exports = {

    async get() {

        const db = await Database()

        // db.run(`SELECT name FROM profile`)
        // const dataDb = await db.get(`SELECT * FROM profile`)
        const data = await db.get(`SELECT * FROM profile`)

        db.close()

        // console.log(dataDb);

        // return data;
        // Normalization   
        return {
            name: data.name,
            avatar: data.avatar,
            "monthly-budget": data.monthly_budget,
            "days-per-week": data.days_per_week,
            "hours-per-day": data.hours_per_day,
            "vacation-per-year": data.vacation_per_year,
            "costs-per-hour": data.costs_per_hour
        }

    },

    // update(newData) {
    async update(newData) {

        // data = newData;

        const db = await Database()

        db.run(`
            UPDATE profile SET 
                name = "${newData.name}",
                avatar = "${newData.avatar}",
                monthly_budget = ${newData["monthly-budget"]},
                days_per_week = ${newData["days-per-week"]},
                hours_per_day = ${newData["hours-per-day"]},
                vacation_per_year = ${newData["vacation-per-year"]},
                costs_per_hour = ${newData["costs-per-hour"]}
        `)

        await db.close()

    }

}