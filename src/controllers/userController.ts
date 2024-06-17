import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { UserService } from '../services/userService';
import { generateToken } from '../config/jwt';

@injectable()
export class UserController {
  constructor(private userService: UserService 
  ) { } 
  
  async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { username, password } = req.body;
      const user = await this.userService.authenticate(username, password);
      if (user) {
        const token = generateToken(user);
        user.token = token;
        res.json(user);
      } else {
        res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getuserAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.userService.getuserAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getcustomerAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.userService.getcustomerAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getstaffAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.userService.getstaffAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async getcustomerId(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const data = await this.userService.getcustomerId(id);   
      if (data) {
        res.json(data);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body as {username:any, pass:any, role:any};
      const results = await this.userService.register(user);
      res.json({ message: 'Đã thêm thành công',results:true });
      console.log(user);
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }  
  async registercus(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body as {TenKH:any, Email:any, SDT:any, DiaChi:any};
      const results = await this.userService.registercus(user);
      res.json({ message: 'Đã thêm thành công',results:true });
      console.log(user)
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}