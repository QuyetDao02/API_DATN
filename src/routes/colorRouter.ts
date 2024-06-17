import { Router } from 'express';
import { container } from 'tsyringe';
import { ColorController } from '../controllers/colorController';
const colorRouter = Router();
const colorController = container.resolve(ColorController);
colorRouter.get('/getbyid/:id', colorController.getcolorById.bind(colorController));
colorRouter.get('/getall', colorController.getcolorAll.bind(colorController));
colorRouter.post('/update', colorController.updatecolor.bind(colorController));
colorRouter.post('/create', colorController.createcolor.bind(colorController));
colorRouter.post('/delete/:id', colorController.deletecolor.bind(colorController));
colorRouter.get('/getbyproductid/:id', colorController.getcolorByProduct.bind(colorController));
colorRouter.post('/createdetail', colorController.createdetailcolor.bind(colorController));

export default colorRouter;