let data = {
    name: "Marcelo",
    avatar: "http://github.com/marcelosperalta.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "costs-per-hour": 75
};

module.exports = {
    get() {
        return data;
    },
    update(newData) {
        data = newData;
    }
}