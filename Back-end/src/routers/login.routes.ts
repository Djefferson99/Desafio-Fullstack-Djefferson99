import { Router } from "express";
import { loginClientController } from "../controllers/login.controllers";
import ensureBodyValidMiddleware from "../middlewares/ensureBody.middlewares";
import { loginShema } from "../schemas/login.schema";

const loginRoutes: Router = Router()

loginRoutes.post('', ensureBodyValidMiddleware(loginShema), loginClientController)

export {
    loginRoutes
}