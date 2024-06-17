import { Request, Response } from 'express';
import { injectable } from "tsyringe";
import { NewsService } from '../services/newsService';

@injectable()
export class NewsController {
  constructor(private newsService: NewsService 
  ) { } 
  
  async getNewsId(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const danhmuc = await this.newsService.getNewsById(id);   
      if (danhmuc) {
        res.json(danhmuc);
      } else {
        res.json({ message: 'Bản ghi không tồn tại' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }
  
  async getNewsAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.newsService.getNewsAll();      
      if (data && data.length > 0) {
        res.json(data);
      } else {
        res.json({ message: 'Không lấy được danh sách' });
      }
    } catch (error: any) {
      res.json({ message: error.message });
    }
  }

  async updateNews(req: Request, res: Response): Promise<void> {
    try {
      const loaisanpham = req.body as {MaTT:any, TieuDe:any, Anh:any, NoiDung:any, NgayDang:any, MaNV:any};
      const results = await this.newsService.updateNews(loaisanpham);
      res.json({ message: 'Đã cập nhật thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async createNews(req: Request, res: Response): Promise<void> {
    try {
      const loaisanpham = req.body as {TieuDe:any, Anh:any, NoiDung:any, NgayDang:any, MaNV:any};
      const results = await this.newsService.createNews(loaisanpham);
      res.json({ message: 'Thêm thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
  async deleteNews(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      console.log(id)
      const loaisanpham = req.body as {id:any};
      const results = await this.newsService.deleteNews(id);
      res.json({ message: 'Đã xoá thành công',results:true });
    } catch (error: any) {
      res.json({ message: error.message, results:false });
    }
  }
}