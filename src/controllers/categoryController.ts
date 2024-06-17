import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { categoryService } from '../services/categoryService';

@injectable()
export class categoryController {
  constructor(private categoryService: categoryService 
  ) { } 
  
  async getCategoryId(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.categoryService.getCategoryById(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getCategoryAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.categoryService.getCategoryAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateCategory(req: Request, res: Response): Promise<void> {
    try {
      const loaisanpham = req.body as {id:any, TenLDNT:any, MoTa:any};
      const results = await this.categoryService.updateCategory(loaisanpham);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createCategory(req: Request, res: Response): Promise<void> {
    try {
      const loaisanpham = req.body as {TenLDNT:any, MoTa:any};
      const results = await this.categoryService.createCategory(loaisanpham);
      res.json({ message: 'Thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const loaisanpham = req.body as {id:any};
      const results = await this.categoryService.deleteCategory(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}