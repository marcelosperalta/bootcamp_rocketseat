// import * as express from 'express'; // TypeScript (without "tsconfig.json")
import express from 'express';         // TypeScript (with    "tsconfig.json")
import routes from "./routes";

const app = express();

// function getUsername() {
//     return 'diego3g';
// }
// const username = getUsername();

// function getUsername(): string {
//     return 'diego3g';
// }
// const username = 'diego3g';

// const username: string = 'diego3g';

// app.get('/', (req, res) => {
//     return res.send("Hello Word")
// })

app.use(routes);

app.listen(3333);