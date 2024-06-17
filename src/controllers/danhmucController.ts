import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { DanhMucService } from '../services/danhmucService';

@injectable()
export class DanhMucController {
  constructor(private danhMucService: DanhMucService 
  ) { } 
  
  async getBranchById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.danhMucService.getDanhMucById(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getDanhMucAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.danhMucService.getDanhMucAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const danhmuc = req.body as {danh_muc_id:any, ten_danh_muc:any};
      const results = await this.danhMucService.updateDanhMuc(danhmuc);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const danhmuc = req.body as {ten_danh_muc:any, ghichu:any};
      const results = await this.danhMucService.createDanhMuc(danhmuc);
      res.json({ message: 'Đã thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteDanhMuc(req: Request, res: Response): Promise<void> {
    try {
      const danhmuc = req.body as {danh_muc_id:any};
      const results = await this.danhMucService.deleteDanhMuc(danhmuc);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}