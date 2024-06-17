import { Router } from 'express';
import { container } from 'tsyringe';
import { StatisticalController } from '../controllers/statistical.Controller';
const statisticalRouter = Router();
const statisticalController = container.resolve(StatisticalController);
statisticalRouter.get('/get/:TinhTrang/:NgayLap', statisticalController.getPiceDetailbill.bind(statisticalController));
statisticalRouter.get('/getmonth/:TinhTrang/:Thang/:Nam', statisticalController.statisticalInMonth.bind(statisticalController));
statisticalRouter.get('/getyear/:TinhTrang/:Nam', statisticalController.statisticalInYear.bind(statisticalController));
statisticalRouter.get('/getdate/:TinhTrang/:BatDau/:KetThuc', statisticalController.statisticalInDate.bind(statisticalController));
statisticalRouter.get('/getbillinday/:TinhTrang/:NgayLap', statisticalController.gatBillInDay.bind(statisticalController));
statisticalRouter.get('/getbillinmonth/:TinhTrang/:Thang/:Nam', statisticalController.getBillInMonth.bind(statisticalController));
statisticalRouter.get('/getbillinyear/:TinhTrang/:Nam', statisticalController.getBillInYear.bind(statisticalController));
statisticalRouter.get('/getbillindate/:TinhTrang/:BatDau/:KetThuc', statisticalController.getBillInDate.bind(statisticalController));

export default statisticalRouter;