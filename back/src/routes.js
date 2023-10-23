import { Router } from "express";
import LoginController from "./controllers/LoginController";
import UserController from "./controllers/UserController";

const routes = new Router();

routes.get('/', LoginController.index);

//rest
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

export default routes;