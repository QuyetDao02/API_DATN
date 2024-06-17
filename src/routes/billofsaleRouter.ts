import { Router } from 'express';
import { container } from 'tsyringe';
import { BillOfSaleController } from '../controllers/billofsaleController';
const billofsaleRouter = Router();
const billOfSaleController = container.resolve(BillOfSaleController);
billofsaleRouter.get('/get/:id', billOfSaleController.getBillOfSaleStatus.bind(billOfSaleController));
billofsaleRouter.post('/update', billOfSaleController.updateBillOfSale.bind(billOfSaleController));
billofsaleRouter.get('/getdetail/:id', billOfSaleController.getDetailBillOfSaleByid.bind(billOfSaleController));
billofsaleRouter.post('/addorder', billOfSaleController.addorder.bind(billOfSaleController));
billofsaleRouter.post('/addorderdetail', billOfSaleController.addoderdetail.bind(billOfSaleController));

export default billofsaleRouter;