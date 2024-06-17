import { Router } from 'express';
import { container } from 'tsyringe';
import { supplierController } from '../controllers/supplierController';
const supplierRouter = Router();
const SupplierController = container.resolve(supplierController);
supplierRouter.get('/getbyid/:id', SupplierController.getnccById.bind(SupplierController));
supplierRouter.get('/getall', SupplierController.getnccAll.bind(SupplierController));
supplierRouter.post('/update', SupplierController.updatencc.bind(SupplierController));
supplierRouter.post('/create', SupplierController.createncc.bind(SupplierController));
supplierRouter.post('/delete/:id', SupplierController.deletencc.bind(SupplierController));
export default supplierRouter;