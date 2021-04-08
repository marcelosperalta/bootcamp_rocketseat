const express = require("express");
const app = express();

app.set("view engine", "ejs");

// ejs default folder = "views"
app.get("/", function (request, response){
    const items = [
        { 
            title: "F",
            message: "ocus"
        },
        { 
            title: "U",
            message: "nion"
        },
        { 
            title: "N",
            message: "etwork"
        },
    ];

    const subtitle = "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript."

    response.render("pages/index", {
        words: items,
        subtitle: subtitle
    });
})

app.get("/about", function (request, response){
    response.render("pages/about");
})

app.listen(8080);
console.log("Running");