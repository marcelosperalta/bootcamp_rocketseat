module.exports = {
    index(request, response) {
        //return response.render(views + "profile", { profile: Profile.data })
        return response.render("profile", { profile: Profile.data })
    },

    update(request, response) {
        const data = request.body
        const weeksPerYear = 52
        const weeksPerMouth = (weeksPerYear - data["vacation-per-year"]) / 12
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
        const monthlyTotalHours = weekTotalHours * weeksPerMouth
        const costsPerHour = data["monthly-budget"] / monthlyTotalHours
        Profile.data = {
            ...Profile.data,
            ...request.body,
            "costs-per-hour": costsPerHour
        }

        return response.redirect('./profile')
    }
}