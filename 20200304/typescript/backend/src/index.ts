// import * as express from 'express'; // TypeScript (without "tsconfig.json")
   import      express from 'express'; // TypeScript (with    "tsconfig.json")
   import      routes  from "./routes";

const app = express();

app.use(routes);

app.listen(3333);