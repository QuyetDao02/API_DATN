import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { SendEmailService } from '../services/sendEmailService';

@injectable()
export class SendEmailController {
  constructor(private sendEmailService: SendEmailService 
  ) { } 
  
//   async sendEmail(req: Request, res: Response): Promise<void> {
//     try {
//       const { to, subject, body } = req.body;
//       await this.sendEmailService.sendEmail(to, subject, body);
//       res.status(200).json({ success: true, message: 'Email sent successfully' });
//     } catch (error: any) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, message: 'Error sending email' });
//     }
//   }
  async sendEmail (req: Request, res: Response): Promise<void> {
    try {
      const { to, subject, html } = req.body;

      // Gửi email
      const result = await this.sendEmailService.sendEmail(to, subject, html);

      res.status(200).json({ success: true, result });
    } catch (error:any) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
}