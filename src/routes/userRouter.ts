import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../controllers/userController';

const UserRouter = Router();
const userController = container.resolve(UserController);
UserRouter.get('/getall', userController.getuserAll.bind(userController));
UserRouter.get('/getallcustomer', userController.getcustomerAll.bind(userController));
UserRouter.get('/getallstaff', userController.getstaffAll.bind(userController));
UserRouter.get('/getbyidcustomer/:id', userController.getcustomerId.bind(userController));
UserRouter.post('/register', userController.register.bind(userController));
UserRouter.post('/registercus', userController.registercus.bind(userController));

export default UserRouter;