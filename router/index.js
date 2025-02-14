import { Router } from "express";
import studentLogin from "../controllers/studentLogin.js";
import user from "../controllers/user.js";


const routes = Router();

routes.post('/login', studentLogin)
routes.post('/register')
routes.get('/user', user)


export default routes;