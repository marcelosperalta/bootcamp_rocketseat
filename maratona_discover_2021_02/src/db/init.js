// Database
//
// table:
// profile
//
// fields:
// name
// avatar
// "monthly-budget"
// "days-per-week"
// "hours-per-day"
// "vacation-per-year"
// "costs-per-hour"
//
// records:
// "Marcelo"
// "http://github.com/marcelosperalta.png"
// ...

const Database = require('config')

// open database
Database()

Database.exec(` 
    CREATE TABLE profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        avatar TEXT,
        monthly-budget INT,
        days-per-week INT,
        hours-per-day INT,
        vatation-per-year INT,
        costs-per-hour INT
    )
`);

// close database
Database.close()