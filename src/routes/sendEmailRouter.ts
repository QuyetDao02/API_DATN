import { Router } from 'express';
import { container } from 'tsyringe';
import { SendEmailController } from '../controllers/sendEmailContoller';
const sendEmailRouter = Router();
const sendEmailController = container.resolve(SendEmailController);
sendEmailRouter.post('/send-email', sendEmailController.sendEmail.bind(sendEmailController));
export default sendEmailRouter;