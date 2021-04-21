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
            "monthly-budget": data.module_budget,
            "days-per-week": data.days_per_week,
            "hours-per-day": data.hours_per_day,
            "vacation-per-year": data.vacation_per_year,
            "costs-per-hour": data.costs_per_hour
        }

    },

    update(newData) {

        data = newData;

    }

}