import { Router } from "express";
import Itenscontroller from "./controllers/Itenscontroller";
const routes = new Router();


routes.get('/itens', Itenscontroller.index);
routes.get('/itens/:id', Itenscontroller.show);
routes.post('/itens', Itenscontroller.create);
routes.put('/itens:id', Itenscontroller.update);
routes.delete('/itens:id', Itenscontroller.destroy);

export default routes;
