import { Router } from "express";
import { studentLogin } from "../controllers/student.js";
import user from "../controllers/user.js";


const routes = Router();

routes.post('/login', studentLogin)
routes.post('/register')
routes.get('/me', user)


export default routes;