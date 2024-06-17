import { Router } from 'express';
import { container } from 'tsyringe';
import { ProductController } from '../controllers/productController';
const productRouter = Router();
const productController = container.resolve(ProductController);
productRouter.get('/productnew', productController.productnew.bind(productController));
productRouter.get('/sellingProduct', productController.sellingProduct.bind(productController));
productRouter.get('/getbyid/:id', productController.getProductId.bind(productController));
productRouter.get('/getbyidadmin/:id', productController.getProductIdAdmin.bind(productController));
productRouter.get('/getcategorybyid/:id', productController.getProductCategoryId.bind(productController));
productRouter.get('/representativeProduct', productController.representativeProduct.bind(productController));
productRouter.post('/update', productController.updateproduct.bind(productController));
productRouter.post('/create', productController.createproduct.bind(productController));
productRouter.post('/delete/:id', productController.deleteproduct.bind(productController));
productRouter.get('/getall', productController.getproductAll.bind(productController));
productRouter.get('/getallimage', productController.getallproductimage.bind(productController));
productRouter.get('/getallprice', productController.getallproductprice.bind(productController));
productRouter.get('/getalladmin', productController.getallproductAdmin.bind(productController));
productRouter.get('/getimagecolor/:id/:idms', productController.getProductImageOfColor.bind(productController));


export default productRouter;