import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { companyService } from '../services/companyService';

@injectable()
export class companyController {
  constructor(private CompanyService: companyService 
  ) { } 
  
  async gethangById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const hang = await this.CompanyService.gethangById(id);   
      if (hang) {
        res.json(hang);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async gethangAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.CompanyService.gethangAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updatehang(req: Request, res: Response): Promise<void> {
    try {
      const hang = req.body as {idhang:any, tenhang:any, diachi:any, sdt:any, ghichu:any};
      const results = await this.CompanyService.updatehang(hang);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createhang(req: Request, res: Response): Promise<void> {
    try {
      const hang = req.body as {tenhang:any, diachi:any, sdt:any, ghichu:any};
      const results = await this.CompanyService.createhang(hang);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deletehang(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const hang = req.body as {idhang:any};
      const results = await this.CompanyService.deletehang(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}