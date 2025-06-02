import { Router } from "express";
import ejemploRoutes from "./ejemplo.routes.js";
import tiendaCompuRoutes from "./tiendaCompu.routes.js";

const indexRouter = Router();

indexRouter.use('/ejemplo', ejemploRoutes);
indexRouter.use('/tiendaCompu', tiendaCompuRoutes); // Assuming you want to use the same routes for tiendaCompu

export default indexRouter;