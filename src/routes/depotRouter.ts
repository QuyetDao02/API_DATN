import { Router } from 'express';
import { container } from 'tsyringe';
import { DepotController } from '../controllers/depotController';
const depotRouter = Router();
const depotController = container.resolve(DepotController);
depotRouter.get('/getbyid/:id', depotController.getDepotById.bind(depotController));
depotRouter.get('/getall', depotController.getDepotAll.bind(depotController));
depotRouter.post('/update', depotController.updateDepot.bind(depotController));
depotRouter.post('/updatequanty', depotController.updateQuantyDepot.bind(depotController));
depotRouter.post('/create', depotController.createDepot.bind(depotController));
depotRouter.post('/delete/:id', depotController.deleteDepot.bind(depotController));
depotRouter.get('/getbyproduct/:id', depotController.getDepotByProduct.bind(depotController));
depotRouter.get('/getdepot/:idSize/:idMauSac', depotController.getDepotByIdInColorSize.bind(depotController));

export default depotRouter;