import { Router } from "express";

import UserController from "./controllers/UserController"

const routes = Router();

routes.get('/', (req, res) => {
    return res.send("Hello Word from routes.ts")
});

routes.get('/users', UserController.index);

export default routes;