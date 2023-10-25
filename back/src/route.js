import { Router } from "express";
import TesteController from "./controllers/TesteController";
import Itenscontroller from "./controllers/Itenscontroller";
const routes = new Router();

routes.get('/teste', TesteController.index);

routes.get('/itens', Itenscontroller.index);
routes.get('/itens/:id', Itenscontroller.show);
routes.post('/itens', Itenscontroller.create);
routes.put('/itens:id', Itenscontroller.update);
routes.delete('/itens:id', Itenscontroller.destroy);

export default routes;
