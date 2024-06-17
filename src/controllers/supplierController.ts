import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { supplierService } from '../services/supplierSevice';

@injectable()
export class supplierController {
  constructor(private SupplierSevice : supplierService 
  ) { } 
  
  async getnccById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const ncc = await this.SupplierSevice.getnccById(id);   
      if (ncc) {
        res.json(ncc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getnccAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.SupplierSevice.getnccAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  
  }

  async updatencc(req: Request, res: Response): Promise<void> {
    try {
      const ncc = req.body as {MaNCC:any, TenNCC:any, DiaChi:any, Sdt:any};
      const results = await this.SupplierSevice.updatencc(ncc);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createncc(req: Request, res: Response): Promise<void> {
    try {
      const ncc = req.body as {TenNCC:any, DiaChi:any, Sdt:any};
      const results = await this.SupplierSevice.createncc(ncc);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deletencc(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const ncc = req.body as {MaNCC:any};
      const results = await this.SupplierSevice.deletencc(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}