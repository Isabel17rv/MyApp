import { Router } from "express";
import * as tcompu from '../controllers/Tcompu.controller.js';


const tiendaCompuRoutes = Router();
tiendaCompuRoutes.get('/', tcompu.getAllTCompu);
tiendaCompuRoutes.get('/:id', tcompu.getTCompuById);
tiendaCompuRoutes.post('/', tcompu.postTCompu);
tiendaCompuRoutes.put('/:id', tcompu.putTCompu);
tiendaCompuRoutes.delete('/:id', tcompu.deleteTCompu);

export default tiendaCompuRoutes;