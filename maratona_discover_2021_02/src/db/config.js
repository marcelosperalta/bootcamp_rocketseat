const sqlite3 = require('sqlite3')
// const sqlite = require('sqlite')
const { open } = require('sqlite')

module.exports = () => {
    open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });
};