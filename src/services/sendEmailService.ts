import { injectable } from 'tsyringe';
import nodemailer, { SentMessageInfo } from 'nodemailer';
import { google } from 'googleapis'

@injectable()
export class SendEmailService {
    private oAuth2Client: any;
    private transporter: any;
  
    constructor() {
      // Thông tin xác thực OAuth2
      const CLIENT_ID = '1096438340185-fuukmrok0lam5f1vbu4vltakj895pjei.apps.googleusercontent.com';
      const CLIENT_SECRET = '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';
    //   const REDIRECT_URI = 'YOUR_REDIRECT_URI';
      const REFRESH_TOKEN = '1//04dM9nXNa-6PoCgYIARAAGAQSNwF-L9Ir1qFvysD7ve9oWQlxmO68Ij6Iz7vb7x_eLZLbxFTEV1IOtcCcwc6kUQaqRVh0Gswdk3s';
  
      // Tạo một OAuth2 client
      this.oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET
        // REDIRECT_URI
      );
  
      // Đặt mã thông báo là refresh token
      this.oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  
      // Tạo một transporter sử dụng OAuth2
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'quyetdao02@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: this.oAuth2Client.getAccessToken(),
        },
      });
    }

   async sendEmail(to: string, subject: string, html: string) {
    try {
      // Gửi email
      const result = await this.transporter.sendMail({
        from: 'quyetdao02@gmail.com',
        to,
        subject,
        html,
      });
      console.log(to);
      console.log('Email sent: ' + result.response);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}