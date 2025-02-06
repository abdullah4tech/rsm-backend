import { Router } from "express";


const routes = Router();

routes.get('/', (req, res) => {
  res.send("RSM backend;)");
})


export default routes;