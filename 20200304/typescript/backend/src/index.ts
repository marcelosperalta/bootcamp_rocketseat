// import * as express from 'express'; // TypeScript (without "tsconfig.json")
import express from 'express';         // TypeScript (with    "tsconfig.json")

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello Word")
})

app.listen(3333);