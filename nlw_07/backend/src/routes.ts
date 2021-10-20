import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";


const router = Router();

// "express" pass the parameters (req, res) automatically to "handle"
router.post("/authenticate", new AuthenticateUserController().handle)

export { router };