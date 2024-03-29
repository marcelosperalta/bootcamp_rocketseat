import { Router }                     from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController }    from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated }        from "./middleware/ensureAuthenticated";


const router = Router();

// "express" pass the parameters (req, res) automatically to "handle"
router.post(
    "/authenticate", 
    new AuthenticateUserController().handle
);

router.post(
    "/messages", 
    ensureAuthenticated, 
    new CreateMessageController().handle
);

router.get(
    "/",
    function (req, res) {
        res.send('Server running on port 4000')
    }
);

router.get(
    "/messages/last3",
    new GetLast3MessagesController().handle
);

router.get(
    "/profile",
    ensureAuthenticated,
    new ProfileUserController().handle
);

export { router };