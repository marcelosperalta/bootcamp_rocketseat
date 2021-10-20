import "dotenv/config";
import express from "express";

import { router } from "./routes";

const app = express();

// to make "express" works with "code" of request.body:
app.use(express.json()); 

app.use(router);

app.get("/github", (request, response) => {
                                                                         // using "dotenv" module
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (request, response) => {

    // option 1
    // return response.json(request.query.code);

    // option 2
    // const codeFromRequestQuery = request.query.code;
    // return response.json(codeFromRequestQuery);

    // option 3 ()
    // ** Destructuring assignment **
    // The destructuring assignment syntax is a JavaScript expression
    // that makes it possible to
    // unpack values from arrays,
    // or
    // properties from objects,
    // into distinct variables.
       const { code } = request.query;
       return response.json(code);

});

app.listen(4000, () => console.log("Server running on port 4000"));