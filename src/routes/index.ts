import { Router } from 'express';
import 'reflect-metadata';
import danhmucRouter from './danhmucRouter';
import categoryRouter from './categoryRouter';
import companyRouter from './companyRouter';
import productRouter from './productRouter';
import depotRouter from './depotRouter';
import sizeRouter from './sizeRouter';
import colorRouter from './colorRouter';
import supplierRouter from './supplierRouter';
import billofsaleRouter from './billofsaleRouter';
import importedinvoiceRouter from './importedinvoiceRouter';
import newsRouter from './newsRouter';
import UserRouter from './userRouter';
import sendEmailRouter from './sendEmailRouter';
import statisticalRouter from './statistical.Router';
const router = Router();
router.use('/danh-muc', danhmucRouter);
router.use('/category', categoryRouter);
router.use('/company', companyRouter);
router.use('/product', productRouter);
router.use('/depot', depotRouter);
router.use('/size', sizeRouter)
router.use('/color', colorRouter)
router.use('/supplier', supplierRouter)
router.use('/billofsale', billofsaleRouter)
router.use('/importedinvoice',importedinvoiceRouter)
router.use('/news',newsRouter)
router.use('/users', UserRouter)
router.use('/email', sendEmailRouter)
router.use('/statistical', statisticalRouter)

export default router;
