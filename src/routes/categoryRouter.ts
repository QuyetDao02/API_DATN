import { Router } from 'express';
import { container } from 'tsyringe';
import { categoryController } from '../controllers/categoryController';
const categoryRouter = Router();
const CategoryController = container.resolve(categoryController);
categoryRouter.get('/getbyid/:id', CategoryController.getCategoryId.bind(CategoryController));
categoryRouter.get('/getall', CategoryController.getCategoryAll.bind(CategoryController));
categoryRouter.post('/update', CategoryController.updateCategory.bind(CategoryController));
categoryRouter.post('/create', CategoryController.createCategory.bind(CategoryController));
categoryRouter.post('/delete/:id', CategoryController.deleteCategory.bind(CategoryController));
export default categoryRouter;